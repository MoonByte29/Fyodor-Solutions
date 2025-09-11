import React from "react";
import ChromaBackground from "../../components/ChromaBackground";
import bgimg from "./../../assets/bgimg.jpg";

const FeatureSection: React.FC = () => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden z-10 isolate">
      {/* <div className="min-h-screen w-full relative overflow-hidden isolate"> */}
        {/* Chroma Background - z-0 */}
        <div className="inset-0 z-0">
          <ChromaBackground radius={300} />
        </div>
        {/* <div className="absolute inset-0 bg-black/30 z-10" /> */}

        <div className="absolute bg-red-800 z-50 min-h-screen flex flex-col">
          {/* Stats Section */}
          <div className="h-10 w-full flex flex-wrap justify-around py-16 px-4">
            {[
              { number: "3+", label: "Years of Experience" },
              { number: "62K+", label: "Hours Saved Annually" },
              { number: "$3.4M", label: "Annual Savings" },
              { number: "4+", label: "Sectors Served" },
            ].map((stat, index) => (
              <div key={index} className="text-center m-4 min-w-[150px]">
                <div className="text-4xl font-bold text-white mb-2 drop-shadow-md">
                  {stat.number}
                </div>
                <div className="text-gray-200 text-sm opacity-90 text-shadow">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Feature Cards Section */}
          <div className="flex flex-wrap justify-center gap-8 p-8 mt-auto">
            {[
              {
                title: "Proven Track Record",
                description:
                  "We have consistently delivered measurable impact, saving clients thousands of hours and millions in operational costs.",
              },
              {
                title: "Tailored Solutions",
                description:
                  "Whether it's streamlining processes or enhancing customer engagement, we deliver innovation customized to your needs.",
              },
              {
                title: "Client-Centric Focus",
                description:
                  "Your success is our mission. By deeply understanding your business goals, we create outcomes that matter.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-8 max-w-xs shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Value Pills Section */}
          <div className="flex flex-wrap justify-center gap-4 p-8">
            {[
              "Continuous Innovation",
              "Dedicated Support",
              "Positive Client Experience",
              "Commitment to Excellence",
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full font-medium"
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
