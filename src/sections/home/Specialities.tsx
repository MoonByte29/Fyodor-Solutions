import React from "react";
import speciality1 from "./../../assets/speciality1.mp4";

const Specialities = () => {
  return (
    <section className="py-12 px-6 md:px-12 ">
      <div className="max-w-6xl mx-auto">
        {/* Header - Kept exactly as provided */}
        <div className="flex flex-col items-start mb-16">
          <div className="min-w-fit border border-white/30 rounded-full px-6 py-2 backdrop-blur-sm bg-white/10 flex items-center gap-2 mb-6">
            <span className="h-2 w-2 animate-pulse bg-violet-500 rounded-full"></span>
            <span className="text-white text-sm font-medium tracking-wider">
              WHY US
            </span>
          </div>

          <h2 className="text-center font-bold text-white text-2xl md:text-4xl lg:text-5xl leading-tight mb-6">
            Discover the Specialties of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              Fyodor
            </span>
          </h2>

          <p className="text-left text-slate-300 text-lg max-w-2xl">
            Delivering innovation through expertise and excellence
          </p>
        </div>
        <div className="min-w-full text-justify pb-5 flex justify-end mb-6">
          <div className="w-1/2">
            {" "}
            At Fyodor,we excel in delivering transformative digital solutions
            that go beyond expectations. Our specialties lie in innovation,
            measurable outcomes, and strategic execution. We take pride in our
            ability to empower businesses with cutting-edge technology, ensuring
            impactful results and unmatched value.
          </div>
        </div>

        {/* Grid Section - Following the exact structure from the diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-1 gap-6 h-[400px]">
          {/* Top Left - Efficiency Improvement (spans 2 columns) */}
          <div className="lg:col-span-2 relative border border-green-500/30 rounded-xl p-8 text-white flex flex-col justify-center overflow-hidden">
            {/* Background Image */}
            <video
              src={speciality1}
              className="absolute inset-0 w-full h-full object-cover opacity-40"
              autoPlay
              loop
              muted
              playsInline
            />
            {/* Green Overlay */}
            <div className="absolute inset-0 bg-green-800/50"></div>

            <div className="relative z-10">
              <h3 className="text-6xl font-bold mb-2">150%</h3>
              <h4 className="text-xl font-semibold mb-4">
                EFFICIENCY IMPROVEMENT
              </h4>
              <p className="text-green-100 text-sm max-w-lg">
                We empower businesses with transformative RPA and AI solutions,
                achieving over 150% improvement in efficiency by advancing
                expertise links.
              </p>
            </div>
          </div>

          {/* Top Right - Revenue Impact */}
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 border border-blue-300/30 rounded-xl p-6 text-gray-800 flex flex-col justify-center">
            <h3 className="text-5xl font-bold mb-2 text-blue-900">$12M</h3>
            <h4 className="text-lg font-semibold mb-3 text-blue-800">
              REVENUE IMPACT
            </h4>
            <p className="text-blue-700 text-sm">
              From finance to supply chain, we help organizations unlock their
              full potential by maximizing ROI with tailored technology
              solutions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-6 h-[400px] mt-6">
          {/* Bottom Left - Custom Solutions */}
          <div className="bg-gradient-to-br from-orange-900/80 to-red-800/60 backdrop-blur-sm border border-orange-500/30 rounded-xl p-6 text-white relative overflow-hidden flex flex-col justify-center">
            <div className="relative z-10">
              <div className="mb-4"></div>
              <h4 className="text-lg font-semibold mb-3">CUSTOM SOLUTIONS</h4>
              <p className="text-orange-100 text-sm">
                Tailored technology solutions designed specifically for your
                unique business requirements and challenges.
              </p>
            </div>
          </div>

          {/* Bottom Right */}
          <div className="lg:col-span-1 bg-gradient-to-br from-orange-400 to-red-400 rounded-xl p-8 text-white flex flex-col justify-center">
            <h3 className="text-6xl font-bold mb-2">80%</h3>
            <h4 className="text-xl font-semibold mb-4">
              ENHANCED BRAND VISIBILITY
            </h4>
            <p className="text-orange-100 text-sm max-w-lg">
              With a focus on customer experience and digital engineering, our
              tailored solutions drive up to 80% improvement in brand visibility
              and customer engagement across all digital touchpoints.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialities;
