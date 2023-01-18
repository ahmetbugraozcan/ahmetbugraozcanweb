import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import SocialMediaRow from "../../../Components/SocialMediaRow/View/SocialMediaRow";

export default function AboutMe() {
  // useEffect(() => {}, []);
  // add new class to aboutme classname when scroll position greater than 200
  const [ref, inView] = useInView({
    /* Optional options */
    triggerOnce: true,
    rootMargin: "-300px 0px",
  });

  return (
    <div
      ref={ref}
      id="about-me"
      className={`${inView && "animate__animated animate__fadeIn"}`}
    >
      <h2>Hakkımda</h2>

      <div className="about-me-container">
        <ul className="about-me-li-container">
          <li>
            <span className="about-me-li-key">Ad - Soyad:</span>
            <span className="about-me-li-value">Ahmet Buğra Özcan</span>
          </li>
          <li>
            <span className="about-me-li-key">Cep Telefonu:</span>
            <span className="about-me-li-value">+90 553 075 14 38</span>
          </li>
          <li>
            <span className="about-me-li-key">E-posta:</span>
            <span className="about-me-li-value">
              bugra.ahmetozcan@gmail.com
            </span>
          </li>
        </ul>

        <div className="about-me-content-container">
          <span>Merhaba!</span>
          <p className="about-me-content-paragraph">
            Ben Ahmet Buğra. Şu anda (2022 Kasım) Sivas Cumhuriyet Üniversitesi
            Bilgisayar Mühendisliği 4.Sınıf öğrencisiyim. 2.5 yıllık bir süredir
            <b> Flutter</b> ile mobil uygulamalar geliştiriyorum. Bu süreç zarfında
            Android, React Native gibi teknolojiler ile de mobil uygulama
            geliştirdim. Şu anda <b>UIKit</b> ve <b>SwiftUI</b> ile iOS uygulama geliştirmeyi öğreniyorum. Hedefim native <b >iOS</b> tarafında kendimi daha da geliştirip
            donanımlı bir mobil geliştirici olarak mezun olmak.
            <br />
            <br />
            Mobil dışında web geliştirme ile de ilgileniyorum. React, Node.js ve
            Express.js gibi teknolojilerde de az da olsa tecrübem mevcut ancak
            mobil geliştirici olma yolunda ilerlemek istiyorum.
          </p>
          <SocialMediaRow iconColor="grey" />
        </div>
      </div>
    </div>
  );
}
