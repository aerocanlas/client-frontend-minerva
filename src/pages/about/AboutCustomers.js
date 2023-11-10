import React from "react";
//images
import ImgOne from "../../assets/images/about-us/img-1.jpg";
import ImgTwo from "../../assets/images/about-us/img-2.jpg";
import ImgThree from "../../assets/images/about-us/img-3.jpg";

const AboutCustomers = () => {
  return (
    <article className="about-customers">
      <div className="images">
        <img src={ImgOne} alt="" aria-hidden="true" />
        <img src={ImgTwo} alt="" aria-hidden="true" />
        <img src={ImgThree} alt="" aria-hidden="true" />
      </div>
      <section className="content">
        <h2 className="sub-title">We Follow Best Practices</h2>
        <h3>Customer Satisfaction</h3>
        <p>
        By following these best practices, we provide superior service, enhance customer satisfaction, and build a reputation for excellence in the industry.
        </p>
      </section>
      <div className="img-glass"></div>
    </article>
  );
}


export default AboutCustomers;