import React, { useState } from "react";
import CollectionHero from "./CollectionHero";
import data from "../data.js";
import NFT from "./NFT";
import { useParams } from "react-router-dom";

function SingleCollection() {
  const { collection_id: id } = useParams();

  const [singleData, setSingleData] = useState(
    data.filter((coll) => coll.id === +id)[0]
  );
  return (
    <div>
      <CollectionHero singleCollection={singleData} />
      <NFT nftsData={singleData.nfts} collection_id={id} />
    </div>
  );
}

export default SingleCollection;
