import React, { useEffect, useState } from "react";
import useApp from "../hook";
import { useNavigate } from "react-router-dom";
import PopUpNFT from "../assets/PopUpNFT";

function NFTcard({ nft_image, nft_name, nft_price, collection_id, nft_id }) {
  const navigate = useNavigate();

  const [active, setActive] = useState(false);
  const { buyNFT, fetchData } = useApp();

  const handleBuyNFt = () => {
    const data = fetchData();
    if (data.accountStatus === false) {
      navigate("/connect-wallet");
    } else {
      buyNFT(collection_id, nft_id);
      setActive(true);
    }
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      console.log("hello");
      setActive(false);
    }, 2000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [active]);

  return (
    <div className="card" onClick={handleBuyNFt}>
      <PopUpNFT active={active} setActive={setActive} />
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
