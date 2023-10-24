import React from 'react'
//Images
import Visa from '../../assets/images/payment-methods/visa-icon.svg'
import MasterCard from '../../assets/images/payment-methods/mastercard-icon.svg'
import ApplePay from '../../assets/images/payment-methods/applepay-icon.svg'
import GooglePay from '../../assets/images/payment-methods/googlepay-icon.svg'

export default class FooterContact extends React.Component {
  render() {
    return (
      <section className="footer-contact  flex-container flex-column">
        <h3>Have questions?</h3>
        <p>0917 865 7346</p>
        <p>minervasales.corporation@gmail.com</p>
        <p>Mon - Sat - 8:00 - 17:30</p>
        <p>Sunday - 10:00 - 16:30</p>
        <section className="accepted-payments">
          {/* <img width="50" height="50" src={Visa} alt="Visa card" />
          <img width="50" height="50" src={MasterCard} alt="Mastercard card" />
          <img width="50" height="50" src={ApplePay} alt="Apple pay" />
          <img
            width="50"
            height="50"
            className="googlepay"
            src={GooglePay}
            alt="Google pay"
          /> */}
        </section>
      </section>
    )
  }
}
