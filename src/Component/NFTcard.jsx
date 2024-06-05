import React from "react";
import useApp from "../hook";
import { useNavigate } from "react-router-dom";

function NFTcard({ nft_image, nft_name, nft_price, collection_id, nft_id }) {
  const navigate = useNavigate();

  const { buyNFT, fetchData } = useApp();

  const handleBuyNFt = () => {
    const data = fetchData();
    if (data.accountStatus === false) {
      navigate("/connect-wallet");
    } else {
      buyNFT(collection_id, nft_id);
    }
  };
  return (
    <div className="card" onClick={handleBuyNFt}>
      <div className="nft-image-container">
        <img src={nft_image} alt={nft_image} className="card-img" />
      </div>
      <div
        className="nft-card-head flex-space-between"
        style={{ padding: "1rem" }}
      >
        <h3 className="card-heading">{nft_name}</h3>
        <div className="card-label">
          <span style={{ background: "#D4D3EB" }}>{nft_price} </span>
        </div>
      </div>
    </div>
  );
}

export default NFTcard;
