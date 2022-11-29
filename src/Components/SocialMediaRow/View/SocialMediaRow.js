import React from "react";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillMediumCircle,
} from "react-icons/ai";

export default function SocialMediaRow(props) {
  return (
    <ul className="social-media-icons-ul">
      <li className="social-media-icon">
        <a
          href="https://github.com/ahmetbugraozcan"
          style={{ color: props.iconColor }}
        >
          <AiOutlineGithub />
        </a>
      </li>
      <li className="social-media-icon">
        <a
          href="https://www.linkedin.com/in/ahmet-bu%C4%9Fra-%C3%B6zcan-42a010198/"
          style={{ color: props.iconColor }}
        >
          <AiFillLinkedin />
        </a>
      </li>
      <li className="social-media-icon">
        <a
          href="https://twitter.com/ozcan_bugrahmet"
          style={{ color: props.iconColor }}
        >
          <AiFillTwitterCircle />
        </a>
      </li>
      <li className="social-media-icon">
        <a
          href="https://medium.com/@bugra.ahmetozcan"
          style={{ color: props.iconColor }}
        >
          <AiFillMediumCircle />
        </a>
      </li>
    </ul>
  );
}
