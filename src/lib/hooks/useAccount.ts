import { useEffect, useMemo, useState } from "react";
import { Account, Address } from "@signumjs/core";
import { useAppContext } from "@lib/hooks/useAppContext";
import { useAppSelector } from "@lib/hooks/useAppSelector";
import { selectWalletState } from "@lib/states/walletState";
import { useLedger } from "@lib/hooks/useLedger.ts";

const InitialAccountData = {
  accountId: "",
  accountRS: "",
  publicKey: "",
  isWatchOnlyMode: false,
  accountInfo: null,
  isLoadingAccountInfo: false,
};

export const useAccount = () => {
  const { Ledger } = useAppContext();
  const ledgerClient = useLedger();
  const [accountInfo, setAccountInfo] = useState<Account | null>(null);
  const [isLoadingAccountInfo, setIsLoadingAccountInfo] = useState(false);

  const { walletPublicKey, isWalletConnected, watchOnly } =
    useAppSelector(selectWalletState);

  const address = useMemo(() => {
    if (!walletPublicKey || !isWalletConnected) return null;

    try {
      return Address.fromPublicKey(walletPublicKey, Ledger.AddressPrefix);
    } catch (e) {
      console.error(e);
      return null;
    }
  }, [isWalletConnected, walletPublicKey, Ledger.AddressPrefix]);

  useEffect(() => {
    if (!address || !ledgerClient) return;

    setIsLoadingAccountInfo(true);

    ledgerClient.account
      .getAccount({ accountId: address.getNumericId() })
      .then(setAccountInfo)
      .catch((e: any) => {
        setAccountInfo(null);
        console.error("Error fetching account info", e.message);
      })
      .finally(() => setIsLoadingAccountInfo(false));
  }, [address, ledgerClient]);

  if (!address) return InitialAccountData;

  return {
    accountId: address.getNumericId(),
    accountRS: address.getReedSolomonAddress(),
    publicKey: address.getPublicKey(),
    isWatchOnlyMode: watchOnly,
    accountInfo,
    isLoadingAccountInfo,
  };
};
