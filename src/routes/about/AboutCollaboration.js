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
          Whether it's catering for a corporate event, providing lunch for a business meeting, or simply offering a delicious meal for employees to enjoy, we are committed to meeting the unique needs of businesses in our area. Our menu features a wide range of options, from classic pizzas and salads to sandwiches and pasta dishes, so you can be sure there's something for everyone to enjoy. Don't forget, Pizza Time is a fictional pizza restaurant made by Ekaterine Mitagvaria.
        </p>
      </section>
    </article>
  );
}

export default AboutCollaboration;
