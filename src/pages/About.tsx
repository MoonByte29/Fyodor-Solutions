import React from "react";
import { Users, Target, Award, Lightbulb, Heart, Globe } from "lucide-react";
import AboutSection from "../sections/about/AboutSection";
import PartnerSection from "../sections/home/PartnerSection";
import AboutFounder from "../sections/about/AboutFounder";
import DraggableCircularCapsules from "../components/DraggableCircularCapsules";
import Stages from "../sections/about/Stages";
import ValuesSection from "../sections/about/ValuesSection";

const About = () => {
  const team = [
    {
      name: "Alex Thompson",
      role: "CEO & Founder",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Visionary leader with 15+ years in tech innovation",
    },
    {
      name: "Sarah Kim",
      role: "CTO",
      image:
        "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Technical expert specializing in scalable architectures",
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Full-stack developer passionate about clean code",
    },
    {
      name: "Jessica Davis",
      role: "Design Director",
      image:
        "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Creative designer focused on user-centered experiences",
    },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We stay ahead of technology trends to deliver cutting-edge solutions",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "We love what we do and it shows in every project we deliver",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for perfection in every detail of our work",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Our solutions help businesses succeed worldwide",
    },
  ];

  return (
    <>
      <div className="relative">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        {/* <DraggableCircularCapsules /> */}
        <ValuesSection />
        <Stages />
      </div>
    </>
  );
};

export default About;
