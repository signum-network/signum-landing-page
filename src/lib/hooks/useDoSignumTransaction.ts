import { useCallback, useState } from "react";
import { useLedger } from "@lib/hooks/useLedger";
import { useExtensionWallet } from "@lib/hooks/useExtensionWallet";
import {
  signStartWalletEvent,
  signEndWalletEvent,
} from "@lib/utils/manageWalletSignTrasactionEvent";
import { Ledger, UnsignedTransaction } from "@signumjs/core";

/**
 * Configuration options for the useDoSignumTransaction hook.
 */
interface UseDoSignumTransactionOptions {
  /** Callback function that runs when a transaction succeeds */
  onSuccess?: (transactionId: string) => void;
  /** Callback function that runs when a transaction fails */
  onError?: (error: Error) => void;
}

/**
 * Type definition for transaction functions that can be executed by the hook.
 * Your transaction function receives a Ledger instance and must return an UnsignedTransaction.
 *
 * @param ledger - The Signum ledger instance to create transactions
 * @returns Promise that resolves to an UnsignedTransaction
 *
 * @example
 * ```typescript
 * const myTransaction: DoSignumTransactionFunction = async (ledger) => {
 *   return await ledger.message.sendMessage({
 *     message: "Hello World!",
 *     feePlanck: Amount.fromSigna(0.01).getPlanck(),
 *     messageIsText: true,
 *     senderPublicKey: publicKey,
 *     recipientId: accountId,
 *   });
 * };
 * ```
 */
export type DoSignumTransactionFunction = (
  ledger: Ledger
) => Promise<UnsignedTransaction>;

/**
 * Interface representing the return value of the `useDoSignumTransaction` hook.
 *
 * This hook provides everything you need to execute Signum blockchain transactions
 * with proper wallet integration, loading states, and error handling.
 */
interface UseDoSignumTransactionReturn {
  /**
   * Execute a Signum transaction with automatic wallet confirmation.
   * This function handles all the complex logic like wallet events, error handling, and state management.
   *
   * @param fn - A function that creates and returns an UnsignedTransaction
   */
  doTransaction: (fn: DoSignumTransactionFunction) => Promise<void>;

  /**
   * Boolean indicating if a transaction is currently being processed.
   * Use this to show loading states in your UI (e.g., disable buttons, show spinners).
   */
  isSending: boolean;

  /**
   * The transaction ID of the last successful transaction.
   * Will be empty string if no transaction has been completed yet.
   * Use this to show transaction links or confirmations to users.
   */
  transactionId: string;

  /**
   * Reset the transaction state (clears transactionId and sets isSending to false).
   * Call this when you want to clear previous transaction results.
   */
  resetTransaction: () => void;
}

/**
 * Custom React hook for executing Signum blockchain transactions with wallet integration.
 *
 * This hook provides a simplified interface for executing any type of Signum transaction
 * while automatically handling wallet connection, transaction signing, error management,
 * loading states, and wallet events.
 *
 * ## What this hook does for you:
 * - ✅ Checks wallet connection before executing transactions
 * - ✅ Manages loading states (isSending) automatically
 * - ✅ Handles wallet signing events (signStartWalletEvent/signEndWalletEvent)
 * - ✅ Automatically confirms transactions with the connected wallet
 * - ✅ Provides error handling and logging
 * - ✅ Tracks transaction IDs for successful transactions
 * - ✅ Offers optional success/error callbacks
 *
 * ## Basic Usage Example:
 * ```typescript
 * import { useDoSignumTransaction } from "@lib/hooks/useDoSignumTransaction";
 * import { Amount } from "@signumjs/util";
 *
 * function SendMessageComponent() {
 *   const { publicKey, accountId } = useAccount();
 *
 *   const { doTransaction, isSending, transactionId } = useDoSignumTransaction({
 *     onSuccess: (txId) => console.log("Transaction successful:", txId),
 *     onError: (error) => console.error("Transaction failed:", error),
 *   });
 *
 *   const handleSendMessage = async () => {
 *     await doTransaction(async (ledger) => {
 *       return await ledger.message.sendMessage({
 *         message: "Hello from my dApp!",
 *         feePlanck: Amount.fromSigna(0.01).getPlanck(),
 *         messageIsText: true,
 *         senderPublicKey: publicKey,
 *         recipientId: accountId,
 *       });
 *     });
 *   };
 *
 *   return (
 *     <div>
 *       <button
 *         disabled={isSending}
 *         onClick={handleSendMessage}
 *       >
 *         {isSending ? "Sending..." : "Send Message"}
 *       </button>
 *
 *       {transactionId && (
 *         <p>Transaction sent! ID: {transactionId}</p>
 *       )}
 *     </div>
 *   );
 * }
 * ```
 *
 * ## Advanced Usage Example:
 * ```typescript
 * function TransferTokensComponent() {
 *   const { doTransaction, isSending, transactionId, resetTransaction } = useDoSignumTransaction();
 *
 *   const transferSigna = async (amount: string, recipient: string) => {
 *     await doTransaction(async (ledger) => {
 *       return ledger.account.sendMoney({
 *         amountPlanck: Amount.fromSigna(amount).getPlanck(),
 *         feePlanck: Amount.fromSigna(0.01).getPlanck(),
 *         recipientId: recipient,
 *         senderPublicKey: publicKey,
 *       });
 *     });
 *   };
 *
 *   const handleNewTransaction = () => {
 *     resetTransaction(); // Clear previous transaction results
 *   };
 *
 *   return (
 *     <div>
 *       <button onClick={() => transferSigna("10", "S-1234-5678-9ABC-DEFGH")}>
 *         {isSending ? "Transferring..." : "Transfer 10 SIGNA"}
 *       </button>
 *       <button onClick={handleNewTransaction}>Start New Transaction</button>
 *     </div>
 *   );
 * }
 * ```
 *
 * @param options - Configuration options for the hook
 * @returns Object containing doTransaction function, loading state, transaction ID, and reset function
 */
export const useDoSignumTransaction = (
  options: UseDoSignumTransactionOptions = {}
): UseDoSignumTransactionReturn => {
  const { onSuccess, onError } = options;

  const [isSending, setIsSending] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  const ledger = useLedger();
  const wallet = useExtensionWallet();

  const resetTransaction = useCallback(() => {
    setTransactionId("");
    setIsSending(false);
  }, []);

  const doTransaction = useCallback(
    async (transactionFunction: DoSignumTransactionFunction) => {
      if (!wallet?.connection) {
        console.error("Wallet not connected");
        alert("Please connect your wallet first");
      }
      if (!ledger) return;

      try {
        setIsSending(true);
        setTransactionId("");
        signStartWalletEvent();
        const result = await transactionFunction(ledger);
        const { transactionId } = await wallet.confirm(
          result.unsignedTransactionBytes
        );
        setTransactionId(transactionId);
        if (onSuccess) {
          onSuccess(transactionId);
        }
      } catch (e: any) {
        console.error(e);
        throw e;
      } finally {
        signEndWalletEvent();
        setIsSending(false);
      }
    },
    [ledger, wallet, onSuccess, onError]
  );

  return {
    doTransaction,
    isSending,
    transactionId,
    resetTransaction,
  };
};
