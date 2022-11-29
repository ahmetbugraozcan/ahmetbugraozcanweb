import React from "react";

import SocialMediaRow from "../../../Components/SocialMediaRow/View/SocialMediaRow";
export default function EntryView() {
  React.useEffect(() => {
    let entryBody = document.getElementById("entryBody");

    window.addEventListener("scroll", () => {
      // set background position
      entryBody.style.backgroundPositionY = `-${window.scrollY * 0.5}px`;
    });
  });

  return (
    <div id="entryBody">
      <div className="animate__animated animate__fadeIn">
        <div className="profile-thumb"></div>
        <h1 className="name-header">
          <span className="name-header-span">Ahmet Buğra Özcan</span>
        </h1>
        <h6 style={{ fontWeight: "300" }}>Mobile Developer</h6>
        <SocialMediaRow />
      </div>
    </div>
  );
}
