import React from "react";
import data from "../data.js";
import Card from "../Component/Card.jsx";
function Collections() {
  return (
    <section className="section section-collections " id="collections">
      <div className="container">
        <h2 className="heading-secondary">Collections</h2>
        <div className="card-grid">
          {data.map((coll) => {
            const {
              id,
              collection_name,
              collection_image,
              artist_name,
              artist_image,
            } = coll;
            return (
              <Card
                id={id}
                collection_image={collection_image}
                collection_name={collection_name}
                artist_name={artist_name}
                key={coll.id}
                artist_image={artist_image}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Collections;
