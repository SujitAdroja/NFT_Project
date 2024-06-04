import { useEffect, useState } from "react";

import "./App.css";
import "./Query.css";

import Home from "./homeScreen/Home";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
  json,
} from "react-router-dom";
import SingleCollection from "./collectionScreen/SingleCollection";
import ConnectWallet from "./ConnectWallet";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import data from "./data";
import AccountSlider from "./Component/AccountSlider";

const account = { accountStatus: false, data, nfts: [] };
localStorage.setItem("user", JSON.stringify(account));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [accountOpenClose, setAccountOpenClose] = useState(false);
  const [accNFTS, setAccNFTS] = useState(
    JSON.parse(localStorage.getItem("user")).nfts
  );

  const handleAccountSlider = () => {
    setAccountOpenClose((accountOpenClose) => !accountOpenClose);
    setAccNFTS(JSON.parse(localStorage.getItem("user")).nfts);
  };

  return (
    <>
      <BrowserRouter>
        <Header handleAccountSlider={handleAccountSlider} />
        <AccountSlider
          accNFTS={accNFTS}
          accountOpenClose={accountOpenClose}
          handleAccountSlider={handleAccountSlider}
        />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/collection/:collection_id"
            element={<SingleCollection />}
          />
          <Route path="/connect-wallet" element={<ConnectWallet />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;