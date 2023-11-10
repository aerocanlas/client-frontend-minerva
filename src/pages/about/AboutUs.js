import React from 'react'
//images
import SlideOne from '../../assets/images/img-one.jpeg'
import SlideTwo from '../../assets/images/parts.jpg'
import SlideThree from '../../assets/images/img-three.jpeg'
import SlideFour from '../../assets/images/img-four.jpeg'


const AboutUs = () => {
  return (
    <article className="about-us">
      <section className="content">
        <h2>About Us</h2>
        <h3 className='sub-title'>ROAD SAFETY & ROADWORTHINESS AT YOUR FINGERTIPS</h3>
        <p>
        Drive with Confidence Knowing Minerva Sales Corporation is Always by Your Side. We Take Pride in Offering Comprehensive Solutions to Enhance Your Vehicle’s Performance, Longevity, and Efficiency. With Our Team of Skilled Technicians and a Wide Selection of Premium Tires, Rest Assured Your Journey Will be Smooth, Safe, and Remarkable!
        </p>
        <div className="section-one-glass"></div>
      </section>
      <section className="images">
        <img src={SlideOne} alt="" aria-hidden="true" />
        <img src={SlideTwo} alt="" aria-hidden="true" />
        <img src={SlideThree} alt="" aria-hidden="true" />
        <img src={SlideFour} alt="" aria-hidden="true" />
      </section>
    </article>
  )
}

export default AboutUs;