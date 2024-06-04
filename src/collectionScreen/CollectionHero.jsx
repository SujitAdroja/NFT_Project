import React from "react";

function CollectionHero({ singleCollection }) {
  return (
    <div className="section section-collection-hero">
      <div className=" container  ">
        <div className="grid grid--2-cols hero-content">
          <div>
            <div className="banner-label">
              <span>Trending</span>
            </div>
            <h4 className="banner-heading">Collection</h4>
            <h2 className="banner-tagLine">
              {singleCollection.collection_name}
            </h2>
            <p className="hero-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              asperiores esse odio pariatur quis dolore rem voluptatibus id,
              eaque dignissimos saepe quos sunt, aspernatur iure nemo distinctio
              velit veritatis earum!
            </p>
            <div className="collection-owner">
              <img
                src={singleCollection.artist_image}
                alt="Artist logo"
                className="owner-image"
              />
              <div>
                <p className="tag-artist">Artist</p>
                <h3 className="artist-name">{singleCollection.artist_name}</h3>
              </div>
            </div>
          </div>
          <div className="banner-image">
            <img
              src={singleCollection.collection_image}
              alt="Banner Image"
              className="banner-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionHero;
