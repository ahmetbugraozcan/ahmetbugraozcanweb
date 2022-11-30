import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import PieChart from "../../../Components/PieChart/View/PieChart";
import ProgressBar from "../../../Components/ProgressBar/View/ProgressBar";

export default function SkillsView() {
  const [ref, inView] = useInView({
    /* Optional options */
    triggerOnce: true,
    rootMargin: "0px 0px",
  });

  const skills = [
    {
      skill: "Flutter",
      percentage: 80,
      color: "#2980b9",
    },
    {
      skill: "SwiftUI",
      percentage: 40,
      color: "#c0392b",
    },
    {
      skill: "Android",
      percentage: 30,
      color: "#d35400",
    },
    {
      skill: "React",
      percentage: 50,
      color: "#8e44ad",
    },
    {
      skill: "Node",
      percentage: 60,
      color: "#27ae60",
    },
    {
      skill: "Firebase",
      percentage: 40,
      color: "#2F3C4F",
    },
  ];

  return (
    <div
      ref={ref}
      id="skills"
      className={`${inView && "animate__animated animate__fadeInUp"}`}
    >
      <h1 className="skills-title">Yetenekler</h1>
      <div className="skills-grid">
        {skills.map((skill) => (
          <PieChart title={skill.skill} percentage={skill.percentage} />
        ))}
      </div>
      <div className="skills-horizontal-grid">
        {skills.map((skill) => (
          <ProgressBar
            skill={skill.skill}
            percentage={skill.percentage}
            color={skill.color}
          />
        ))}
      </div>
    </div>
  );
}
