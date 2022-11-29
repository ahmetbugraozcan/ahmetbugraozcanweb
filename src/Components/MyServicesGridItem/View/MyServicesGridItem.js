import React from "react";

export default function MyServicesGridItem(props) {
  return (
    <div className="grid-item-container">
      <div className="grid-item-image">{props.icon}</div>
      <h3 className="grid-item-title">{props.title}</h3>
      <span className="grid-item-subtitle">{props.subtitle}</span>
    </div>
  );
}
