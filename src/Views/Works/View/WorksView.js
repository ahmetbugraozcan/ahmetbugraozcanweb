import React from "react";
import { AiOutlineMobile } from "react-icons/ai";

import { RiFlutterFill } from "react-icons/ri";
import ShowAllProjectsButton from "../../../Components/Buttons/ShowAllProjects/View/ShowAllProjectsButton";
import WorksItem from "../../../Components/WorksItem/View/WorksItem";

export default function WorksView() {
  const projectsData = [
    {
      link: "https://github.com/ahmetbugraozcan/ea-anime",
      projectType: "Mobile",
      projectTitle: "EA Anime",
      icon: <RiFlutterFill color="#60c9f8" />,
      marketUrls: [
        {
          market: "playstore",
          url: "https://play.google.com/store/apps/details?id=com.bakapps.herseyanime",
        },
        {
          market: "appstore",
          url: "https://apps.apple.com/tr/app/her-%C5%9Fey-anime/id6443685155",
        },
      ],
      projectSubtitle:
        "EA Anime, anime testlerinin, duvar kağıtlarının vs. bulunduğu bir uygulamadır.",
    },
    {
      link: "https://github.com/AppismDev/Gamepedia_Flutter",
      projectType: "Mobile",
      icon: <RiFlutterFill color="#60c9f8" />,
      projectTitle: "Gamepedia",
      projectSubtitle: "Gamepedia, video oyunları için bir wiki uygulamasıdır.",
    },
    {
      link: "https://github.com/AppismDev/shopism",
      projectType: "Mobile",
      icon: <RiFlutterFill color="#60c9f8" />,
      projectTitle: "Shopism",
      projectSubtitle: "Shopism bir e-ticaret uygulamasıdır.",
    },
  ];

  return (
    <div className="works-container">
      <h1 className="works-title">Works</h1>
      <div className="works-grid">
        {projectsData.map((item, index) => (
          <WorksItem item={item} key={index} />
        ))}
      </div>
      <ShowAllProjectsButton />
    </div>
  );
}
