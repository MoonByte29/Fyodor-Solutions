import React from "react";
import Card from "../../components/Card";

const teamMembers = [
  {
    name: "Nikhil Mittal",
    title: "Founder & CEO",
    contactText: "Connect",
    avatarUrl: "/path-to-image1.jpg",
    linkedinUrl: "https://www.linkedin.com/in/nikhil-mittal",
  },
  {
    name: "Viresh Gupta",
    title: "VP — Business Consulting",
    contactText: "Connect",
    avatarUrl: "/path-to-image2.jpg",
    linkedinUrl: "https://www.linkedin.com/in/viresh-gupta",
  },
  {
    name: "Hardic Garg",
    title: "VP - Strategy",
    contactText: "Connect",
    avatarUrl: "/path-to-image3.jpg",
    linkedinUrl: "https://www.linkedin.com/in/hardic-garg",
  },
];

const TeamSection = () => {
  return (
    <section className="min-h-screen py-12 px-4 overflow-hidden  relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-start mb-16">
          <div className="min-w-fit border border-white/30 rounded-full px-6 py-2 backdrop-blur-sm bg-white/10 flex items-center gap-2 mb-8">
            <span className="h-2 w-2 animate-pulse bg-violet-500 rounded-full"></span>
            <span className="text-white text-sm font-medium tracking-wider">
              TEAM
            </span>
          </div>

          <h2 className="text-center font-bold text-white text-2xl md:text-4xl lg:text-5xl leading-tight mb-6">
            The People Behind{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              Fyodor
            </span>
          </h2>

          <p className="text-left text-slate-300 text-lg max-w-2xl">
            Meet the dedicated minds driving innovation, collaboration, and
            excellence at Fyodor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              name={member.name}
              title={member.title}
              contactText={member.contactText}
              avatarUrl={member.avatarUrl}
              linkedinUrl={member.linkedinUrl} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
