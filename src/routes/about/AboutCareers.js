import React from "react";
import OfficeTwo from "../../assets/images/about-us/office-2.jpg";
import { Link } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";

const AboutCareers = () => {
  return (
    <article className="about-careers">
      <section className="content">
        <h2 className="sub-title">Objectives</h2>
        <h3>Quality</h3>
        <p>
        We value quality workmanship and strive for excellence in every service we provide. We prioritize using high-quality parts, employing skilled technicians, and following industry best practices to ensure that vehicles are serviced or repaired to the highest standards.
        </p>
      </section>
      <img src={OfficeTwo} alt="" aria-hidden="true" />
    </article>
  );
}
export default AboutCareers;
