import axios from "axios";
import React from "react";
import { useInView } from "react-intersection-observer";
import EmailTemplate, {
  emailTemplate,
} from "../../../Constants/HtmlConstants/EmailTemplate";
import { sendMail } from "../../../Service/ElasticMail/ElasticMailer";
import { ToastContainer, toast } from "react-toastify";

export default function ContactView() {
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  // is in view
  const [ref, inView] = useInView({
    /* Optional options */
    triggerOnce: true,
    rootMargin: "0px 0px",
  });
  return (
    <div
      ref={ref}
      className={`contact-container ${
        inView && "animate__animated animate__fadeIn"
      }`}
    >
      <div className="contact-image-container" />
      <div className="contact-form-container">
        <div className="contact-form">
          <div className="contact-form-header">
            <h1>İletişime Geçin</h1>
            <p>Bir sorunuz veya öneriniz mi var? Benimle iletişime geçin.</p>

            <div className="contact-form-inputs">
              <input
                className="contact-form-input"
                type="text"
                id="fname"
                name="firstname"
                placeholder="Adınız"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="contact-form-input"
                type="text"
                id="lname"
                name="lastname"
                placeholder="Soyadınız"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
              <input
                className="contact-form-input"
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="E-posta adresiniz"
                style={{ width: "100%" }}
                onChange={(e) => setEmail(e.target.value)}
              />

              <textarea
                className="contact-form-input"
                id="message"
                name="message"
                value={message}
                placeholder="Mesajınız"
                style={{ width: "100%", minHeight: "100px" }}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                type="submit"
                className="contact-form-button"
                onClick={async (e) => {
                  e.preventDefault();
                  sendMail(
                    emailTemplate(name, surname, message, email),
                    (error, data, response) => {
                      if (error) {
                        toast.error("Bir hata oluştu. Lütfen tekrar deneyin.", {
                          toastId: "error1",
                        });
                      } else {
                        toast.success("Mesajınız başarıyla gönderildi.", {
                          toastId: "success1",
                        });
                      }
                    }
                  );
                }}
              >
                Mesaj Gönder
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
