import React from "react";

const PartnerSection = () => {
  const partners = [
    {
      id: 1,
      name: "Microsoft",
      logo: "https://logos-download.com/wp-content/uploads/2016/02/Microsoft_logo_2012.svg",
      website: "https://microsoft.com"
    },
    {
      id: 2,
      name: "Amazon Web Services",
      logo: "https://logos-download.com/wp-content/uploads/2016/11/Amazon_Web_Services_logo_AWS.png",
      website: "https://aws.amazon.com"
    },
    {
      id: 3,
      name: "Google Cloud",
      logo: "https://logos-download.com/wp-content/uploads/2020/04/Google_Cloud_logo.png",
      website: "https://cloud.google.com"
    },
    {
      id: 4,
      name: "IBM",
      logo: "https://logos-download.com/wp-content/uploads/2016/05/IBM_logo.png",
      website: "https://ibm.com"
    },
    {
      id: 5,
      name: "Salesforce",
      logo: "https://logos-download.com/wp-content/uploads/2016/10/Salesforce_logo.png",
      website: "https://salesforce.com"
    },
    {
      id: 6,
      name: "Oracle",
      logo: "https://logos-download.com/wp-content/uploads/2016/10/Oracle_logo_red.png",
      website: "https://oracle.com"
    },
    {
      id: 7,
      name: "SAP",
      logo: "https://logos-download.com/wp-content/uploads/2016/10/SAP_logo.png",
      website: "https://sap.com"
    },
    {
      id: 8,
      name: "Accenture",
      logo: "https://logos-download.com/wp-content/uploads/2016/05/Accenture_logo.png",
      website: "https://accenture.com"
    },
    {
      id: 9,
      name: "Deloitte",
      logo: "https://logos-download.com/wp-content/uploads/2016/04/Deloitte_logo_blue.png",
      website: "https://deloitte.com"
    },
    {
      id: 10,
      name: "JPMorgan Chase",
      logo: "https://logos-download.com/wp-content/uploads/2021/01/JPMorgan_Chase_Logo.png",
      website: "https://jpmorganchase.com"
    },
    {
      id: 11,
      name: "Walmart",
      logo: "https://logos-download.com/wp-content/uploads/2016/03/Walmart_logo.png",
      website: "https://walmart.com"
    },
    {
      id: 12,
      name: "Tesla",
      logo: "https://logos-download.com/wp-content/uploads/2020/11/Tesla_logo.png",
      website: "https://tesla.com"
    }
  ];
  
  // Duplicate partner list to create seamless loop animation on desktop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="w-full py-20 overflow-hidden ">
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
              Brands we have worked with at{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                Fyodor
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-center text-slate-300 text-lg max-w-2xl mx-auto">
              Discover how our innovative approach delivers measurable results
              for businesses worldwide
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

        {/* Desktop Layout: Horizontal Scroll Animation */}
        <div className="hidden md:block relative overflow-hidden">
          {/* Edge gradients for fade effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-slate-950 to-transparent z-10"></div>

          <div className="flex animate-scroll hover:[animation-play-state:paused] px-20 py-5">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 mx-6 group cursor-pointer"
                onClick={() =>
                  partner.website && window.open(partner.website, "_blank")
                }
              >
                <div className="bg-slate-800/50 border border-blue-700/50 rounded-xl p-6 transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 group-hover:border-blue-800 hover:shadow-lg hover:shadow-blue-500/10 backdrop-blur-sm">
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
      
      {/* Add animation keyframes in style tag */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default PartnerSection;