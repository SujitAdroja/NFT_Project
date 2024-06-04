import React from "react";

function ConnectWallet() {
  return (
    <>
      <div className="connect-page">
        <div className=" container wallet-info">
          <h2 className="heading-tertiary">Choose wallet to connect</h2>
          <div className="wallet-code">
            <input type="number" name="wallet-code" id="" />
            <input type="number" name="wallet-code" id="" />
            <input type="number" name="wallet-code" id="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ConnectWallet;
