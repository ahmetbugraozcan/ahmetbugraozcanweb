import React from "react";
import { AiOutlineMobile } from "react-icons/ai";
import { useInView } from "react-intersection-observer";

export default function WorksItem(props) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px",
  });

  return (
    <div
      ref={ref}
      className={`works-grid-item ${
        inView && "animate__animated animate__fadeInUp"
      }`}
    >
      <span className="works-icon">
        {props.item.icon ?? <AiOutlineMobile />}
      </span>
      <div className="works-item-title">{props.item.projectTitle}</div>
      <div className="works-item-subtitle">{props.item.projectSubtitle}</div>
      <div className="works-item-footer">
        {props.item.marketUrls?.map((marketUrl) => {
          return (
            <a
              href={marketUrl.url}
              className={`works-item-footer-icon ${marketUrl.market}-image`}
            />
          );
        })}
      </div>
    </div>
  );
}
