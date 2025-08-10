// src/components/Projects/GraphicCard.js
import React from "react";

export default function GraphicCard({ imgPath, title, description, alt }) {
  return (
    <div className="graphic-design-card">
      <img src={imgPath} alt={alt || title} />
      <div className="graphic-design-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
