import React from "react";
import { useInView } from "react-intersection-observer";

export default function TimeLineContent(props) {
  const [ref, inView] = useInView({
    /* Optional options */
    triggerOnce: true,
    rootMargin: "0px 0px",
  });
  return (
    <li className={`time-line-${props.position || "left"}`}>
      <div
        ref={ref}
        className={`${
          inView && "animate__animated animate__fadeInUp"
        } time-line-content`}
      >
        <h3
          className={`${
            inView && "animate__animated animate__fadeInUp"
          } time-line-content-header`}
        >
          {props.header}
        </h3>
        <span
          className={`${
            inView && "animate__animated animate__fadeInUp"
          } time-line-content-subheader`}
        >
          {props.subheader}
        </span>
        <p
          className={`${
            inView && "animate__animated animate__fadeInUp"
          } time-line-content-paragraph`}
        >
          {props.paragraph}
        </p>
      </div>
      <div
        className={`${
          inView && "animate__animated animate__fadeInUp"
        } time-line-badge`}
      >
        {props.icon}
      </div>
    </li>
  );
}
