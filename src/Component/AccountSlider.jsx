import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AccountSlider({ accountOpenClose, handleAccountSlider, accNFTS }) {
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("click", function (e) {
      const accSlider = e.target.closest(".account-slider");

      if (accSlider === null) {
        handleAccountSlider(false);
      }
      if (e.target.textContent === "Account") {
        handleAccountSlider(true);
      }
    });
  }, []);

  return (
    <div className={`account-slider ${accountOpenClose ? "active" : ""}`}>
      <div className="arrow-component">
        <button
          className="arrow-btn"
          onClick={() => {
            navigate("/");
            handleAccountSlider(false);
          }}
        >
          &#x27BE;
        </button>
      </div>
      <div className="account-component"></div>
      <div className="account-info">
        <div className="account-image"></div>
        <p className="account-number">suhfuh9i9809</p>
        <button
          className="icon-btn"
          onClick={() => {
            handleAccountSlider(false);
          }}
        >
          <ion-icon name="arrow-forward-circle-outline"></ion-icon>
        </button>
      </div>
      <div className="account-balance-info  m-b24rem">
        <p className="in-your-wallet">In your wallet</p>
        <h2 className="account-amount">0.123BTC</h2>
      </div>
      <div className="nft-collection-acc">
        <h3 className="m-b24rem heading-ternary">Your NFTs</h3>
        {accNFTS.length === 0 && (
          <div>
            <p className="paragraph-info">You don't own any NFTs yet</p>
            <button
              className="buy-sell-btn"
              onClick={() => {
                navigate("/");
                handleAccountSlider(false);
              }}
            >
              Start Shopping
            </button>
          </div>
        )}
        <div className="account-nft-collection">
          {accNFTS.length !== 0 &&
            accNFTS.map((nft) => (
              <div className="nft-image-box">
                <img
                  src={nft.nft_image}
                  alt={nft.nft_name}
                  className="nft-img"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default AccountSlider;
