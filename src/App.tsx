// App.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import SignumMainPage from "./pages/SignumMainPage";
import PocPlusPage from "./pages/PocPlusPage";
import DisclaimerPage from "./pages/DisclaimerPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import AboutUsyPage from "./pages/AboutUsPage";
import WalletsPage from "./pages/WalletsPage";
import MiningPage from "./pages/MiningPage";
import PaymentPage from "./pages/PaymentPage";
import ExchangePage from "./pages/ExchangePage";
import TokenPage from "./pages/SmartTokenPage";
import SmartContractsPage from "./pages/SmartContractPage";
import MessagePage from "./pages/MessagePage";
import SNAPage from "./pages/SignumSNAPage";
import SignumSubscriptionsPage from "./pages/SignumSubscriptionsPage";
import AliasPage from "./pages/SmartAliasPage";
import HDDMiningPage from "./pages/HDDMiningPage";

import { Provider as ReduxProvider } from "react-redux";
import { store } from "@lib/states/store";
import { AppInitializer } from "@lib/components/AppInitializer";
import { AppContextProvider } from "@lib/contexts/AppContext";
import { SignTransactionModal } from "@lib/components/SignTransactionModal";
import EssentialCookiesBanner from "./components/EssentialCookiesBanner";

import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <AppContextProvider>
      <ReduxProvider store={store}>
        <BrowserRouter>
          <ScrollToTop />
          <AppInitializer />
          <SignTransactionModal />
          <EssentialCookiesBanner />
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<SignumMainPage />} />
              <Route path="pocplus" element={<PocPlusPage />} />
              <Route
                path="/poc-plus"
                element={<Navigate to="/pocplus" replace />}
              />
              <Route path="disclaimer" element={<DisclaimerPage />} />
              <Route path="privacypolicy" element={<PrivacyPolicyPage />} />
              <Route path="aboutus" element={<AboutUsyPage />} />
              <Route path="wallet" element={<WalletsPage />} />
              <Route path="mining" element={<MiningPage />} />
              <Route path="payments" element={<PaymentPage />} />
              <Route path="exchanges" element={<ExchangePage />} />
              <Route
                path="cex"
                element={<Navigate to="/exchanges" replace />}
              />
              <Route path="tokens" element={<TokenPage />} />
              <Route path="messages" element={<MessagePage />} />
              <Route path="autopayment" element={<SignumSubscriptionsPage />} />
              <Route path="smartcontracts" element={<SmartContractsPage />} />
              <Route path="sna" element={<SNAPage />} />
              <Route path="aliases" element={<AliasPage />} />
              <Route
                path="alias"
                element={<Navigate to="/aliases" replace />}
              />
              <Route path="/hdd-mining" element={<HDDMiningPage />} />
              <Route
                path="/hddmining"
                element={<Navigate to="/hdd-mining" replace />}
              />
              <Route
                path="*"
                element={<div className="p-10 text-center">Not Found</div>}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </ReduxProvider>
    </AppContextProvider>
  );
}
