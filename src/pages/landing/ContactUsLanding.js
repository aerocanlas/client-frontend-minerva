import React from 'react'
import { motion } from "framer-motion";
import PizzaOne from '../../assets/images/contact-us/image-one-parallax.webp'


const ContactUsLanding = () => {
  return (
    <section className="contact-us-landing flex-container flex-row txt-white" >
      <motion.img
        initial={{ opacity: 0, translateX: 1000 }}
        whileInView={{ opacity: 0.8, translateX: 400, }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        src={PizzaOne} alt="" aria-hidden="true" className="parallax company-details-image"
      />
      <motion.img
        initial={{ opacity: 0, translateX: 1000 }}
        whileInView={{ opacity: 0.8, translateX: 600, }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        src={PizzaOne} alt="" aria-hidden="true" className="parallax company-details-image-two"
      />
      <motion.img
        initial={{ opacity: 0, translateX: 1000 }}
        whileInView={{ opacity: 0.8, translateX: 800, }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        src={PizzaOne} alt="" aria-hidden="true" className="parallax company-details-image-three"
      />
      <section className='company-details'>
        <div>
          <h2>0917 865 7346</h2>
          <p>Contact us if you have any questions</p>
        </div>
        <div>
          <h2>General Malvar Street </h2>
          <h2>Barangay Tubigan</h2>
          <p>Binan City, Laguna</p>
        </div>
        <div>
          <h2>Open Monday-Saturday</h2>
          <p>8:00am - 5:00pm</p>
        </div>
        <div>
          <h2>Open Sunday</h2>
          <p>8:30am - 3:00pm</p>
        </div>
      </section>
    </section>
  );

}


export default ContactUsLanding;