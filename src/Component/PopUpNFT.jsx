import React from "react";

function PopUpNFT({ active }) {
  return (
    <div className={`pop-up ${active ? "active" : ""}`} role="alert">
      NFT Added Successfully !
    </div>
  );
}

export default PopUpNFT;
