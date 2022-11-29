import React from "react";
import TimeLineContent from "../../../Components/TimeLineContent/View/TimeLineContent";
import { MdWork, MdSchool } from "react-icons/md";
import { useInView } from "react-intersection-observer";

export default function ResumeView() {
  const [title, isTitleInView] = useInView({
    /* Optional options */
    triggerOnce: true,
    rootMargin: "0px 0px",
  });
  const [workEx, isWorkExVisible] = useInView({
    /* Optional options */
    triggerOnce: true,
    rootMargin: "0px 0px",
  });
  const [education, isEducationVisible] = useInView({
    /* Optional options */
    triggerOnce: true,
    rootMargin: "0px 0px",
  });

  return (
    <div id="resume-body">
      <h2
        ref={title}
        className={`${isTitleInView && "animate__animated animate__fadeInUp"}`}
      >
        Özgeçmişim
      </h2>
      <ul id="my-resume-timeline">
        <li>
          <h3
            ref={workEx}
            className={`${
              isWorkExVisible && "animate__animated animate__fadeInUp"
            } time-line-header`}
          >
            İŞ DENEYİMİ
          </h3>
        </li>
        <TimeLineContent
          position="left"
          icon={<MdWork />}
          header="Front-End Developer"
          subheader="Detaysoft 2021 Haziran - 2022 Nisan"
          paragraph="2021 Haziran ayında Detaysoft'ta Front-End Developer olarak işe
              başladım. Yazın tam zamanlı okul zamanı ise yarı zamanlı şeklinde
              çalıştım. Burada çoğunlukla React ve React-Native ile projeler
              geliştirdim."
        />

        <TimeLineContent
          icon={<MdWork />}
          position="right"
          header="Freelance Mobil Developer"
          subheader="2022 Haziran - Şu an"
          paragraph="2022 Haziran
                'dan bu yana Flutter ile freelance olarak mobil uygulama
                geliştiriyorum."
        />
        <li>
          <h3
            ref={education}
            className={`${
              isEducationVisible && "animate__animated animate__fadeInUp"
            } time-line-header`}
          >
            EĞİTİM
          </h3>
        </li>
        <TimeLineContent
          position="left"
          icon={<MdSchool />}
          header="Lisans"
          subheader="Sivas Cumhuriyet Üniversitesi Bilgisayar Mühendisliği 2019 - Şu an"
          paragraph="Sivas Cumhuriyet Üniversitesi Bilgisayar Mühendisliği bölümünde 2019 yılında okumaya başladım. Şu an 4. sınıf öğrencisiyim."
        />
      </ul>
    </div>
  );
}
