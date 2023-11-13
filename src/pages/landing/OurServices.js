import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import ourServices from '../../data/ourServices';
import { Link } from 'react-router-dom'
import ResetLocation from '../../helpers/ResetLocation'



const OurServices = () => {
  return (
    <motion.article
      className="section-3-container"
      initial={{ opacity: 0, translateX: -300 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <h2 className="pop-font">Our Services</h2>
      <p className="pop-font section-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis, dolor quis efficitur ultrices, 
        dolor tellus ornare massa, in interdum tortor velit ac quam. Integer pulvinar fringilla ullamcorper. 
        Aliquam euismod eget tellus non dictum.
      </p>
      <section className="services-grid  flex-container flex-column">
        {ourServices.map((service) => (
          <Tilt key={service.id}>
            <section className="service-list flex-container flex-column">
              <img
                width="50"
                height="50"
                className="service-img"
                src={service.img}
                alt=""
                aria-hidden="true"
              />

              <section>
                <h3 className="pop-font">{service.name}</h3>
                <p>{service.description}</p>
              </section>
            </section>
          </Tilt>
        ))}
      </section>
      <br></br>
      <section>
      <Link
        onClick={ResetLocation}
        to="/blog"
        className="active-button-style txt-white"
      >
        View All Services
      </Link>
      </section>
    </motion.article>
  )
}

export default OurServices;