import { useCallback, useState } from "react";
import { Address, UnsignedTransaction } from "@signumjs/core";
import { useLedger } from "@lib/hooks/useLedger";
import { useExtensionWallet } from "@lib/hooks/useExtensionWallet";
import { Amount } from "@signumjs/util";
/* import {useAppContext} from '@lib/hooks/useAppContext';  */

export const SednMessageExample = () => {
  const ledger = useLedger();
  const wallet = useExtensionWallet();
  const [isSending, setIsSending] = useState(false);
  const [, setTransactionId] = useState("");
  /* const {Ledger} = useAppContext()  */

  const sendTestMessage = useCallback(async () => {
    if (!ledger || !wallet || !wallet.connection) return;

    try {
      setIsSending(true);
      setTransactionId("");
      const address = Address.fromPublicKey(wallet.connection?.publicKey || "");
      const { unsignedTransactionBytes } = (await ledger.message.sendMessage({
        message: "This is a test message from the XT Demo DApp",
        feePlanck: Amount.fromSigna(0.01).getPlanck(),
        messageIsText: true,
        senderPublicKey: address.getPublicKey(),
        recipientId: address.getNumericId(),
      })) as UnsignedTransaction;
      const { transactionId: txId } = await wallet.confirm(
        unsignedTransactionBytes
      );
      setTransactionId(txId);
      alert("Successfully sent");
    } catch (e: any) {
      console.error(e);
      alert(`Oh no, something failed: ${e.message}`);
    } finally {
      setIsSending(false);
    }
  }, [ledger, wallet]);

  return (
    <div className="flex flex-col items-center text-center">
      <button
        type="button"
        onClick={sendTestMessage}
        disabled={isSending}
        className={`
            inline-flex items-center justify-center
            rounded-full
            bg-neutral-900 text-white
            font-semibold tracking-wide
            px-6 py-3
            shadow-soft
            transition-all duration-200
            hover:bg-neutral-800 hover:shadow-lift
            active:scale-[0.98]
            disabled:opacity-50 disabled:cursor-not-allowed
        `}
      >
        {isSending ? "Sending message..." : "Send a Test Message"}
      </button>
    </div>
  );
};
