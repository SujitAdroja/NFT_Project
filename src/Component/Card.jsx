import React from "react";
import { useNavigate } from "react-router-dom";

function Card({
  id,
  collection_name,
  collection_image,
  artist_name,
  artist_image,
}) {
  const navigate = useNavigate();
  return (
    <div
      className="card"
      onClick={() => {
        navigate(`/collection/${id}`);
      }}
    >
      <div className="image-container">
        <img src={collection_image} alt="" className="card-img" />
      </div>
      <div className="card-content">
        <div className="card-head flex-space-between">
          <h3 className="card-heading">{collection_name}</h3>
          <div className="card-label">
            <span>120 NTF</span>
          </div>
        </div>
        <p className="price-range">Price Range : 0.12BTC - 0.18BTC</p>
        <p className="card-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          officiis porro.
        </p>
        <div className="collection-owner-card">
          <img src={artist_image} alt="Artist logo" className="owner-image" />
          <div>
            <p className="tag-artist">Artist</p>
            <h3 className="artist-name">{artist_name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
