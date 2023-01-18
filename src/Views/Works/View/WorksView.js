import React from "react";
import { AiOutlineMobile } from "react-icons/ai";

import { RiFlutterFill } from "react-icons/ri";
import { FaSwift } from "react-icons/fa";
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
        {
          market: "github",

          url: "https://github.com/ahmetbugraozcan/ea-anime"
        },
      ],
      projectSubtitle:
        "EA Anime, anime testlerinin, duvar kağıtlarının vs. bulunduğu bir uygulamadır.",
    },
    {
      link: "https://github.com/ahmetbugraozcan/BookHeaven",
      projectType: "Mobile",
      marketUrls: [

        {
          market: "github",
          url: "https://github.com/ahmetbugraozcan/BookHeaven",

        },
      ],
      icon: <FaSwift color="#ED6A37" />,
      projectTitle: "BookHeaven",
      projectSubtitle: "BookHeaven, UIKit ile geliştirilmiş bir e-kitap indirme ve görüntüleme uygulamasıdır.",
    },


    {
      link: "https://github.com/ahmetbugraozcan/MusicPlayer-SwiftUI",
      projectType: "Mobile",
      marketUrls: [

        {
          market: "github",
          url: "https://github.com/ahmetbugraozcan/MusicPlayer-SwiftUI",

        },
      ],
      icon: <FaSwift color="#3274B9" />,
      projectTitle: "MusicPlayer",
      projectSubtitle: "MusicPlayer, SwiftUI ile geliştirilmiş bir müzik çalar uygulamasıdır.",
    },



    {
      link: "https://github.com/ahmetbugraozcan/IOS-Mars-Nasa-Rover",
      projectType: "Mobile",
      marketUrls: [

        {
          market: "github",
          url: "https://github.com/ahmetbugraozcan/IOS-Mars-Nasa-Rover",

        },
      ],
      icon: <FaSwift color="#3274B9" />,
      projectTitle: "MarsRovers",
      projectSubtitle: "MarsRovers, SwiftUI ile geliştirilmiş bir uygulamadır. NASA Mars araçlarının çektiği fotoğrafları listeler.",
    },
    {
      link: "https://github.com/AppismDev/Gamepedia_Flutter",
      projectType: "Mobile",
      marketUrls: [

        {
          market: "github",
          url: "https://github.com/AppismDev/Gamepedia_Flutter",

        },
      ],
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
      marketUrls: [
        {
          market: "github",
          url: "https://github.com/AppismDev/shopism",

        },
      ],
    },
  ];

  return (
    <div className="works-container">
      <h1 className="works-title">Çalışmalarım</h1>
      <div className="works-grid">
        {projectsData.map((item, index) => (
          <WorksItem item={item} key={index} />
        ))}
      </div>
      <ShowAllProjectsButton />
    </div>
  );
}
