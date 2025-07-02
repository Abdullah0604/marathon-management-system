import React from "react";
import AboutCompany from "./AboutCompany";
import Testimonials from "./Testimonials";
import Team from "./Team";

const About = () => {
  return (
    <div className="space-y-16 py-12 px-2 md:px-6 max-w-6xl mx-auto">
      <AboutCompany />
      <Testimonials />
      <Team />
    </div>
  );
};

export default About;
