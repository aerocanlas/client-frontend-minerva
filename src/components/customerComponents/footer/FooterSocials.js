import React from "react";
import Facebook from "../../../assets/images/socials/facebook.svg";

const socials = [
  {
    id: 2,
    href: "https://www.facebook.com/MinervaSalesCorp",
    img: Facebook,
    name: Facebook
  },
];

export default class FooterSocials extends React.Component {
  render() {
    return (
      <ul className="socials">
      {socials.map(social =>
      <li key={social.id}>
          <a
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.name}
          >
          <span aria-hidden="true">{social.name}</span>
            <img src={social.img} alt="" aria-hidden="true"/>
          </a>
        </li>)}
      </ul>
    );
  }
}
