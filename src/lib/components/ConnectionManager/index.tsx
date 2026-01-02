/* import { useAppContext } from "@lib/hooks/useAppContext"; */
import { useAppSelector } from "@lib/hooks/useAppSelector";
import { selectWalletState } from "@lib/states/walletState";
import {
  requestWalletConnection,
  /* requestWalletDisconnection,*/
} from "@lib/utils/manageWalletConnection";

export const ConnectionManager = (): JSX.Element => {
  /* const { Ledger } = useAppContext(); */
  const { isWalletConnected } = useAppSelector(selectWalletState);

  return (
    <div className="flex items-center">
      {!isWalletConnected && (
        <button
          onClick={requestWalletConnection}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-[12px]"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};
