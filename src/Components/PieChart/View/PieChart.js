import React from "react";

export default function PieChart(props) {
  return (
    <div
      className="pie animate no-round"
      style={{ "--p": `${props.percentage || 0}`, "--c": "orange" }}
    >
      <div className="pie-title">{props.title}</div>
      <div className="pie-percentage-title">{props.percentage}%</div>
    </div>
  );
}
