import React from "react";
import OfficeTwo from "../../assets/images/about-us/office-1.jpg";
import { Link } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";

const AboutCollaboration = () => {
  return (
    <article className="about-collaboration">
      <img src={OfficeTwo} alt="" aria-hidden="true" />
      <section className="content">
        <h2 className="sub-title">Objectives</h2>
        <h3>Integrity and Transparency</h3>
        <p>
        We place a high emphasis on integrity and transparency. We are honest and upfront about the services, products, pricing, and any potential issues discovered during inspections. We provide detailed explanations, options, and accurate estimates, ensuring that customers have a clear understanding of the work being done on their vehicles.        </p>
        <Link to="/contact" onClick={ResetLocation} className="active-button-style">Request a call</Link>
      </section>
    </article>
  );
}

export default AboutCollaboration;
