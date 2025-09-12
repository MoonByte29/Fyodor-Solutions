import React from "react";

const Stages = () => {
  return (
    <>
      <div className="py-20 px-5 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-start mb-16">
            <div className="min-w-fit border border-white/30 rounded-full px-6 py-2 backdrop-blur-sm bg-white/10 flex items-center gap-2 mb-8">
              <span className="h-2 w-2 animate-pulse bg-violet-500 rounded-full"></span>
              <span className="text-white text-sm font-medium tracking-wider">
                ABOUT
              </span>
            </div>

            <h2 className="text-center font-bold text-white text-2xl md:text-4xl lg:text-5xl leading-tight mb-6">
              Our Stages of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                Success
              </span>
            </h2>

            <p className="text-left text-slate-300 text-lg max-w-2xl">
              Innovating with purpose, leading with vision
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stages;
