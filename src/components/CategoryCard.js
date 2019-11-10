import React from "react";

export default function CategoryCard({title, subtitle, image}) {
  return (
    <div className="column">
      <div className="card is-transparent">
        <img
          className="hero-background is-absolute"
          src={image}
          alt="Clothes Line"
        />
        <div className="card-content">
          <p className="title">{title}</p>
          <p className="subtitle">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
