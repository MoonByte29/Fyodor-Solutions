import React from "react";
import { Users, Target, Award, Lightbulb, Heart, Globe } from "lucide-react";
import AboutSection from "../sections/about/AboutSection";
import PartnerSection from "../sections/home/PartnerSection";
import AboutFounder from "../sections/about/AboutFounder";
import Stages from "../sections/about/Stages";
import ValuesSection from "../sections/about/ValuesSection";
import TeamSection from "../sections/about/TeamSection";
import FaqSection from "../sections/contact/FaqSection";
import ContactForm from "../sections/contact/ContactForm";

const About = () => {
  return (
    <>
      <div className="relative">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold">About BlueTech</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                We're a team of passionate innovators dedicated to transforming
                businesses through technology. Founded in 2018, we've helped
                hundreds of companies achieve their digital goals.
              </p>
            </div>
          </div>
        </section>

        <AboutSection />
        <PartnerSection />
        <AboutFounder />
        <TeamSection />
        {/* <DraggableCircularCapsules /> */}
        <ValuesSection />
        <Stages />
        <FaqSection />
        <ContactForm />
      </div>
    </>
  );
};

export default About;
