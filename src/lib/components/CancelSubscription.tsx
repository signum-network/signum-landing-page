import { useState } from "react";
import { Amount } from "@signumjs/util";
import { useAccount } from "@lib/hooks/useAccount";
import { useAppContext } from "@lib/hooks/useAppContext";
import { useDoSignumTransaction } from "@lib/hooks/useDoSignumTransaction";

type Props = { id: string };

function extractSignumError(e: any): string {
  const desc =
    e?.message ??
    e?.errorDescription ??
    e?.data?.errorDescription ??
    e?.response?.errorDescription ??
    e?.response?.data?.errorDescription;
  const code =
    e?.errorCode ?? e?.data?.errorCode ?? e?.response?.data?.errorCode;
  return desc ? (code ? `${desc} (code ${code})` : desc) : "Transaction failed";
}

export function SubscriptionCancelButton({ id }: Props) {
  const [localError, setLocalError] = useState("");
  const { publicKey } = useAccount();
  const {
    Ledger: { Explorer },
  } = useAppContext();
  const { doTransaction, isSending, transactionId } = useDoSignumTransaction();
  const isInvalid = !publicKey;
  const handleCancel = async () => {
    try {
      await doTransaction((ledger) =>
        ledger.transaction.cancelSubscription({
          subscriptionId: id,
          feePlanck: Amount.fromSigna(0.01).getPlanck(),
          senderPublicKey: publicKey,
        })
      );
    } catch (e: any) {
      setLocalError(extractSignumError(e));
    }
  };

  return (
    <div className="flex flex-col items-end gap-2">
      <button
        type="button"
        onClick={handleCancel}
        disabled={isSending || isInvalid}
        className="inline-flex items-center gap-2 rounded-xl border border-red-200 px-3 py-1.5 text-sm font-medium text-red-700 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-300 disabled:opacity-50"
        title="Cancel plan"
        aria-label="Cancel plan"
      >
        {/* Trash-Icon */}
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 6h18" />
          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
          <path d="M10 11v6M14 11v6" />
        </svg>
      </button>

      {localError && <div className="text-xs text-red-700">{localError}</div>}

      {transactionId && (
        <a
          href={`${Explorer}tx/${transactionId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-blue-600 hover:text-blue-700 underline"
        >
          See in Explorer
        </a>
      )}
    </div>
  );
}
