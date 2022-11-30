import React from "react";
import MyServicesGridItem from "../../../Components/MyServicesGridItem/View/MyServicesGridItem";
import { BiBrushAlt } from "react-icons/bi";
import { AiOutlineMobile, AiOutlineExperiment } from "react-icons/ai";
import { RiAppStoreLine } from "react-icons/ri";
import { useInView } from "react-intersection-observer";
export default function MyServices() {
  const [ref, inView] = useInView({
    /* Optional options */
    triggerOnce: true,
    rootMargin: "0px 0px",
  });

  return (
    <div
      ref={ref}
      id="my-services"
      className={`${inView && "animate__animated animate__fadeInUp"}`}
    >
      <h1 className="my-services-title">Servislerim</h1>
      <div className="my-services-grid-container">
        <MyServicesGridItem
          title="Mobil Uygulama Geliştirme"
          subtitle="Responsive ve performans odaklı mobil uygulama geliştirebilirim."
          icon={<AiOutlineMobile />}
        />
        <MyServicesGridItem
          title="Mobil Uygulama Yayınlama"
          subtitle="App Store ve Google Play Store'da uygulama yayınlama tecrübem mevcut."
          icon={<RiAppStoreLine />}
        />
        <MyServicesGridItem
          title="Test ve Bakım"
          subtitle="Mobil uygulamaları test edip, bakımını yapabilirim."
          icon={<AiOutlineExperiment />}
        />
      </div>
    </div>
  );
}
