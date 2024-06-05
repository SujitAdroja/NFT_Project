import React, { useEffect, useState } from "react";

import data from "../data.js";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const nextIndex = () => {
    const carousel = document.querySelectorAll(".banner-content");
    const screenWidth = window.innerWidth;

    let currentIndex = 0;
    if (index >= data.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex = index + 1;
    }

    carousel.forEach(
      (c) => (c.style.transform = `translateX(-${currentIndex * 100}%)`)
    );
    setIndex((index) => index + 1);
    if (index >= data.length - 1) setIndex((index) => 0);
  };

  useEffect(() => {
    const timeInterval = setTimeout(() => {
      nextIndex();
    }, 3000);
    return () => {
      clearTimeout(timeInterval);
    };
  }, [index]);

  return (
    <section className="section section-banner ">
      <div className="line-container ">
        {data.map((coll, ind) => (
          <div
            key={ind}
            className={`banners-track-line ${index === ind ? "active" : ""}`}
          ></div>
        ))}
      </div>
      <div className=" container banners-container ">
        {data.map((coll, ind) => {
          const {
            id,
            collection_name,
            collection_tagLine,
            collection_image,
            artist_name,
            artist_image,
          } = coll;
          return (
            <div key={ind} className={`grid grid--2-cols banner-content `}>
              <div className="banner-content-info">
                <div className="banner-label">
                  <span>Trending</span>
                </div>
                <h4 className="banner-heading">{collection_name} collection</h4>
                <h2 className="banner-tagLine">{collection_tagLine}</h2>
                <div className="collection-owner">
                  <img
                    src={artist_image}
                    alt="Artist logo"
                    className="owner-image"
                  />
                  <div>
                    <p className="tag-artist">Artist</p>
                    <h3 className="artist-name">{artist_name}</h3>
                  </div>
                </div>
                <div className="banner-buttons">
                  <button className="buy-sell-btn">Buy</button>
                  <button
                    className="btn"
                    onClick={() => navigate(`/collection/${id}`)}
                  >
                    See collection
                  </button>
                </div>
              </div>
              <div className="banner-image-container">
                <img
                  src={collection_image}
                  alt="Banner Image"
                  className="banner-image"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Banner;
