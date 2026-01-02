import { Amount } from "@signumjs/util";
import { useAccount } from "@lib/hooks/useAccount";
import { useAppContext } from "@lib/hooks/useAppContext";
import { useDoSignumTransaction } from "@lib/hooks/useDoSignumTransaction";

export const SendMessageButton = (): JSX.Element => {
  const { publicKey, accountId } = useAccount();
  const {
    Ledger: { Explorer },
  } = useAppContext();
  const { doTransaction, isSending, transactionId } = useDoSignumTransaction();

  const sendMessageFn = () =>
    doTransaction((ledger) =>
      ledger.message.sendMessage({
        message: "This is a test message from the XT Demo React dApp",
        feePlanck: Amount.fromSigna(0.01).getPlanck(),
        messageIsText: true,
        senderPublicKey: publicKey,
        recipientId: accountId,
      })
    );

  return (
    <div className="flex flex-col gap-4">
      <button
        disabled={isSending}
        onClick={sendMessageFn}
        className="
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
            "
      >
        {isSending ? "Sending message..." : "Send a Test Message"}
      </button>

      {transactionId && (
        <a
          href={`${Explorer}tx/${transactionId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4 underline"
        >
          See in Explorer
        </a>
      )}
    </div>
  );
};
