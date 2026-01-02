import { useState } from "react";
import { Amount } from "@signumjs/util";
import { useAccount } from "@lib/hooks/useAccount";
import { useAppContext } from "@lib/hooks/useAppContext";
import { useDoSignumTransaction } from "@lib/hooks/useDoSignumTransaction";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

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

export const AddCommitmentButton = () => {
  const [value, setValue] = useState("10000");
  const [localError, setLocalError] = useState("");
  const { publicKey } = useAccount();
  const {
    Ledger: { Explorer },
  } = useAppContext();
  const { doTransaction, isSending, transactionId } = useDoSignumTransaction();

  const amount = Number(value || "0");
  const isInvalid = !publicKey || !value || amount <= 0;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.replace(/[^0-9]/g, "")); // nur ganze Zahlen
  };

  const addCommitment = async () => {
    if (isInvalid) return;
    setLocalError("");
    try {
      await doTransaction((ledger) =>
        ledger.account.addCommitment({
          amountPlanck: Amount.fromSigna(amount).getPlanck(),
          feePlanck: Amount.fromSigna(0.01).getPlanck(),
          senderPublicKey: publicKey,
        })
      );
      // optional: Erfolgsmeldung oder Input zurücksetzen
      // setValue("0");
    } catch (e: any) {
      setLocalError(extractSignumError(e));
    }
  };

  return (
    <div className="card p-5">
      <div className="flex flex-col gap-3">
        <label className="text-sm font-medium text-neutral-700">
          <strong>Add Commitment (SIGNA)</strong>
        </label>

        <div className="flex items-center gap-2">
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={value}
            onChange={onChange}
            className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-[16px]
                       focus:outline-none focus:ring-2 focus:ring-signum-blue/40"
            placeholder="10000"
          />
          <span className="rounded-lg bg-signum-acqua/70 px-3 py-2 text-sm text-signum-midnight">
            SIGNA
          </span>
        </div>

        <button
          onClick={addCommitment}
          disabled={isSending || isInvalid}
          className="inline-flex items-center justify-center rounded-full
                     bg-signum-blue text-white font-semibold tracking-wide
                     px-6 py-3 shadow-[var(--shadow-card)]
                     w-auto min-w-[120px] md:min-w-[140px] shrink-0 
                     self-start
                     transition hover:bg-signum-darkblue
                     disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSending ? "Adding commitment…" : "Add it"}
        </button>

        {localError && (
          <div className="rounded-lg bg-red-50 text-red-700 ring-1 ring-red-200 px-3 py-2 text-sm">
            <FontAwesomeIcon icon={faTriangleExclamation} className="text-sm" />
            {localError}
          </div>
        )}

        {transactionId && (
          <a
            href={`${Explorer}tx/${transactionId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 underline text-sm"
          >
            See in Explorer
          </a>
        )}
      </div>
    </div>
  );
};
