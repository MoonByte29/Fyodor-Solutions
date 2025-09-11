import React from "react";

const PartnerSection = () => {
  const partners = [
    {
      id: 1,
      name: "Matin Browser",
      logo: "https://via.placeholder.com/150x80/1e293b/ffffff?text=Matin+Browser",
      website: "#"
    },
    {
      id: 2,
      name: "Stellium",
      logo: "https://via.placeholder.com/150x80/1e293b/ffffff?text=Stellium",
      website: "#"
    },
    {
      id: 3,
      name: "GGG",
      logo: "https://via.placeholder.com/150x80/1e293b/ffffff?text=GGG",
      website: "#"
    },
    {
      id: 4,
      name: "ADIENT",
      logo: "https://via.placeholder.com/150x80/1e293b/ffffff?text=ADIENT",
      website: "#"
    },
    {
      id: 5,
      name: "MB",
      logo: "https://via.placeholder.com/150x80/1e293b/ffffff?text=MB",
      website: "#"
    },
    {
      id: 6,
      name: "Martin Browser",
      logo: "https://via.placeholder.com/150x80/1e293b/ffffff?text=Martin+Browser",
      website: "#"
    },
    {
      id: 7,
      name: "CooperStandard",
      logo: "https://via.placeholder.com/150x80/1e293b/ffffff?text=CooperStandard",
      website: "#"
    }
  ];
  
  // Duplicate partner lists to create seamless loop animations
  const duplicatedPartnersRow1 = [...partners, ...partners];
  const duplicatedPartnersRow2 = [...partners, ...partners];

  return (
    <div className="w-full py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section heading */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            {/* Enhanced Benefits Badge */}
            <div className="min-w-fit border border-white/30 rounded-full px-6 py-2 backdrop-blur-sm bg-white/10 flex items-center gap-2 mb-8">
              <span className="h-2 w-2 animate-pulse bg-violet-500 rounded-full"></span>
              <span className="text-white text-sm font-medium tracking-wider">
                PARTNERS
              </span>
            </div>

            {/* Title */}
            <h2 className="text-center font-bold text-white text-2xl md:text-4xl lg:text-5xl leading-tight mb-6">
              Partnerships That Power{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                Fyodor
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-center text-slate-300 text-lg max-w-2xl mx-auto">
              Driving innovation together through meaningful partnerships
            </p>
          </div>
        </div>

        {/* Mobile/Tablet Layout: Static Grid */}
        <div className="block md:hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 px-4">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="group cursor-pointer"
                onClick={() =>
                  partner.website && window.open(partner.website, "_blank")
                }
              >
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 group-hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 backdrop-blur-sm">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-10 w-auto mx-auto filter brightness-0 invert opacity-80 group-hover:opacity-100 group-hover:brightness-125 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Desktop Layout: Two Rows with Opposite Animations */}
        <div className="hidden md:block relative overflow-hidden gap-0">
          {/* Top Row: Left to Right */}
          <div className="relative overflow-hidden">
            {/* Edge gradients for fade effect */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-slate-950 to-transparent z-10"></div>

            <div className="flex animate-scroll-left hover:[animation-play-state:paused] py-5">
              {duplicatedPartnersRow1.map((partner, index) => (
                <div
                  key={`top-${partner.id}-${index}`}
                  className="flex-shrink-0 mx-6 group cursor-pointer"
                  onClick={() =>
                    partner.website && window.open(partner.website, "_blank")
                  }
                >
                  <div className="bg-slate-800/50 border border-blue-700/50 rounded-xl p-4 transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 group-hover:border-blue-800 hover:shadow-lg hover:shadow-blue-500/10 backdrop-blur-sm">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="h-12 w-auto mx-auto filter brightness-0 invert opacity-80 group-hover:opacity-100 group-hover:brightness-125 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row: Right to Left */}
          <div className="relative overflow-hidden">
            {/* Edge gradients for fade effect */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-slate-950 to-transparent z-10"></div>

            <div className="flex animate-scroll-right hover:[animation-play-state:paused] py-5">
              {duplicatedPartnersRow2.map((partner, index) => (
                <div
                  key={`bottom-${partner.id}-${index}`}
                  className="flex-shrink-0 mx-6 group cursor-pointer"
                  onClick={() =>
                    partner.website && window.open(partner.website, "_blank")
                  }
                >
                  <div className="bg-slate-800/50 border border-blue-700/50 rounded-xl p-4 transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 group-hover:border-blue-800 hover:shadow-lg hover:shadow-violet-500/10 backdrop-blur-sm">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="h-12 w-auto mx-auto filter brightness-0 invert opacity-80 group-hover:opacity-100 group-hover:brightness-125 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Add animation keyframes in style tag */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default PartnerSection;