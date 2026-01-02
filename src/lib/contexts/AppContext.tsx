import { FC, ReactNode, createContext } from "react";
import { DeeplinkableWallet, GenericExtensionWallet } from "@signumjs/wallets";
import { Config } from "@lib/config";
import { Crypto } from "@signumjs/crypto";
import { WebCryptoAdapter } from "@signumjs/crypto/adapters";

Crypto.init(new WebCryptoAdapter());

const appConfig = {
  appName: Config.appName,
  Wallet: {
    Extension: new GenericExtensionWallet(),
    Deeplink: new DeeplinkableWallet({ openInBrowser: true }),
  },
  Ledger: {
    IsTestnet: Config.IsTestnet,
    AddressPrefix: Config.IsTestnet ? "TS" : "S",
    Network: Config.Network,
    Explorer: Config.Explorer,
  },
  Ipfs: {
    getUrlByCid: (cid: string) => `https://ipfs.io/ipfs/${cid}`,
  },
};

export const AppContext = createContext(appConfig);

export const AppContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <AppContext.Provider value={appConfig}>{children}</AppContext.Provider>
  );
};
