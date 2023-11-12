import React, { useEffect } from "react";
import Header from "./Hero";
import ScrollButton from "../../helpers/ScrollBtn";
import ContactUsLanding from "./ContactUsLanding";
import WelcomeSection from "./WelcomeSection";
import PizzaMenuPreview from "./PizzaMenuPreview";
import OurServices from "./OurServices";
import ResetLocation from "../../helpers/ResetLocation";

const RootSection = () => {
  useEffect(() => {
    document.title = "Minerva Sales Corp.";
    ResetLocation();
  }, []);
  return (
    <React.Fragment>
      <Header />
      <WelcomeSection />
      <ContactUsLanding />
      <PizzaMenuPreview />
      <OurServices />
      <ScrollButton />
    </React.Fragment>
  );
}

export default RootSection;
