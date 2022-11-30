import React from "react";

export default function ProgressBar(props) {
  return (
    <div>
      <div className="progress-title-container">
        <span>{props.skill}</span>
        <span>{props.percentage}%</span>
      </div>
      <div className="progress progress-striped active">
        <div
          role="progressbar progress-striped"
          style={{
            width: `${props.percentage}%`,
            backgroundColor: `${props.color}`,
          }}
          className="progress-bar"
        />
      </div>
    </div>
  );
}
