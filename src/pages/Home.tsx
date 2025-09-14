import React from "react";
import BlurText from "../components/BlurText";
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
import ShinyButton from "../components/ShinyButton";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div className="relative">
        {/* Hero Section */}
        <motion.div 
          className="min-h-screen flex justify-center items-center flex-col gap-8 relative z-10 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
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
          <motion.div 
            className="relative z-10 text-center max-w-6xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <BlurText
              text={`Your Vision\n Intelligently Engineered`}
              delay={150}
              animateBy="words"
              direction="top"
              className="text-4xl md:text-6xl lg:text-7xl text-slate-200 font-bold mb-8 leading-tight text-balance"
            />
            <motion.p 
              className="max-w-4xl mx-auto text-white/90 text-lg md:text-xl lg:text-2xl text-center mb-12 leading-relaxed font-light"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              Fyodor is a next-generation consulting firm specializing in IT
              transformation, Cloud, AI, QA Automation, and Data Engineering.
              Our innovation-driven services empower businesses and
              professionals alike.
            </motion.p>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <ShinyButton
                text="Schedule a Consultation"
                disabled={false}
                speed={3}
                className="text-lg px-10 py-5"
              />
            </motion.div>
          </motion.div>
        </motion.div>

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
