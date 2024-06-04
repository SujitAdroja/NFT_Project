import React from "react";
import NFTcard from "../Component/NFTcard";

function NFT({ nftsData, collection_id }) {
  return (
    <section className="section section-collection">
      <div className="container">
        <h2 className="heading-secondary">NFTS</h2>
        <div className="card-grid">
          {nftsData.map((nfts) => {
            const { nft_id, nft_image, nft_name, nft_price } = nfts;
            return (
              <NFTcard
                key={nft_id}
                collection_id={collection_id}
                nft_id={nft_id}
                nft_image={nft_image}
                nft_name={nft_name}
                nft_price={nft_price}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default NFT;
