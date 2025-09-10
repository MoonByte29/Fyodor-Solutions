import React from "react";


const ScrollRibbon = () => {
  const partners = [
    {
      
    }
  ];
  // Duplicate partner list to create seamless loop animation on desktop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="w-full py-12 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            Trusted by Industry Leaders
          </h2>
          <p className="text-blue-700 text-lg">
            Partnering with the world's most innovative companies
          </p>
        </div>

        {/* Mobile/Tablet Layout: Static Grid */}
        <div className="block md:hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 px-4">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="group cursor-pointer"
                onClick={() =>
                  partner.website && window.open(partner.website, "_blank")
                }
              >
                <div className="bg-white border border-blue-100 rounded-lg shadow-md p-4 transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 group-hover:border-blue-300 hover:shadow-xl hover:shadow-blue-200/30">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-10 w-auto mx-auto filter group-hover:brightness-110 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout: Horizontal Scroll Animation */}
        <div className="hidden md:block relative overflow-hidden">
          {/* Optional edge gradients for fade effect */}
          {/* 
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div> 
          */}

          <div className="flex animate-scroll hover:[animation-play-state:paused] px-20 py-5">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 mx-6 group cursor-pointer"
                onClick={() =>
                  partner.website && window.open(partner.website, "_blank")
                }
              >
                <div className="bg-white border border-blue-100 rounded-lg shadow-md p-6 transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 group-hover:border-blue-300 hover:shadow-xl hover:shadow-blue-200/30">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-12 w-auto mx-auto filter group-hover:brightness-110 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Optional: Footer note */}
        {/* 
        <div className="text-center mt-8">
          <p className="text-blue-600 text-sm">
            And many more amazing partners worldwide
          </p>
        </div> 
        */}
      </div>
    </div>
  );
};

export default ScrollRibbon;
