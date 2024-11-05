import React from "react";
import Section1 from "../components/Section1";
import ContactUs from "./ContactUs";
import SuccessSection from "../components/SuccessSection";
import AboutOurCompany from "./AboutOurCompany";
import Services from "./Services";
import ScheduleSection from "./ScheduleSection";
import TrustedPartners from "./TrustedPartners";

const Home = () => (
  <>
    <Section1 />
    <SuccessSection />
    <AboutOurCompany />
    <Services />
    <ScheduleSection />
    <TrustedPartners />
    <ContactUs />
  </>
);

export default Home;
