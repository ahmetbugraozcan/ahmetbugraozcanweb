import React from "react";
import { useInView } from "react-intersection-observer";

export default function ShowAllProjectsButton() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px",
  });

  return (
    <a
      ref={ref}
      className={`works-all-projects-link ${
        inView && "animate__animated animate__fadeInUp"
      }`}
      href="https://github.com/ahmetbugraozcan"
    >
      Tüm Projelerimi Gör
    </a>
  );
}
