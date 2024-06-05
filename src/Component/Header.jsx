import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useApp from "../hook";

function Header({ handleAccountSlider }) {
  const navigate = useNavigate();
  const location = useLocation();

  const { ConnectToWallet } = useApp();

  const [account, setAccount] = useState(false);

  const handleConnectWallet = function () {
    const connect_BTN = document.querySelector(".btn-acc-connect");
    if (location.pathname === "/connect-wallet") {
      setAccount(true);
      ConnectToWallet();
    } else if (connect_BTN.textContent === "Account") {
      handleAccountSlider(true);
    } else {
      navigate("/connect-wallet");
    }
  };

  return (
    <div className="container ">
      <div className="header flex-space-between">
        <h2 className="logo">MARKETPLACE.</h2>
        <button
          className="btn btn-acc-connect width-auto"
          onClick={handleConnectWallet}
        >
          {account === false ? "Connect Wallet" : "Account"}
        </button>
      </div>
    </div>
  );
}

export default Header;
