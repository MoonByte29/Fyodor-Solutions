import React from "react";
import BlurText from "../components/BlurText";
import ShinyText from "../components/ShinyButton";
import Particles from "../components/Particles";
import ServicesSection from "../sections/home/ServicesSection";
import Benefits from "../sections/home/Benefits";
import PartnerSection from "../sections/home/PartnerSection";
import BlogSection from "../sections/home/BlogSection";
// import FeatureSection from './../sections/FeatureSection';
import ChromaBackground from "./../components/ChromaBackground";
import Specialities from "../sections/home/Specialities";
import ContactForm from "../sections/contact/ContactForm";
import Testimonial from "../sections/home/Testimonial";
import FaqSection from "../sections/contact/FaqSection";

const Home = () => {
  return (
    <>
      <div className="relative">
        {/* Hero Section */}
        <div className="min-h-screen flex justify-center items-center flex-col gap-3 relative z-10 px-4">
          {/* Particles Background */}
          <div className="absolute inset-0 z-0">
            <Particles
              particleColors={["#ffffff", "#ffffff"]}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <BlurText
              text={`Your Vision\n Intelligently Engineered`}
              delay={150}
              animateBy="words"
              direction="top"
              className="text-4xl md:text-5xl lg:text-6xl text-slate-200 font-bold mb-6"
            />
            <p className="max-w-3xl mx-auto text-white/80 text-lg md:text-xl text-justify md:text-center mb-8">
              Fyodor is a next-generation consulting firm specializing in IT
              transformation, Cloud, AI, QA Automation, and Data Engineering.
              Our innovation-driven services empower businesses and
              professionals alike.
            </p>
            <ShinyText
              text="Schedule a Consultation"
              disabled={false}
              speed={3}
            />
          </div>
        </div>

        {/* <ServicesSection /> */}
      </div>
      <Benefits />
      <PartnerSection />
      {/* <FeatureSection/> */}
      <ChromaBackground />
      <Specialities />
      <BlogSection />
      <Testimonial />
      <FaqSection/>
      <ContactForm />
    </>
  );
};

export default Home;
