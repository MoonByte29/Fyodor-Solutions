import React, { useState } from 'react';

interface CardData {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  color: string;
}

const ExpandableCards = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const cardData: CardData[] = [
    {
      id: 1,
      title: "AI-Powered Automation",
      shortDescription: "Intelligent process automation that learns and adapts",
      fullDescription: "Our AI solutions don't just automate tasks—they learn from them. With machine learning algorithms that continuously improve, we create automation systems that become more efficient over time, reducing errors by up to 92% and processing times by 75% on average.",
      icon: "🤖",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Enterprise Integration",
      shortDescription: "Seamless connection with your existing systems",
      fullDescription: "AventIQ specializes in integrating with your current tech stack. Whether you're using legacy systems or modern cloud platforms, our solutions work alongside your existing infrastructure, minimizing disruption while maximizing ROI. We've successfully integrated with over 50 different enterprise platforms.",
      icon: "🔌",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Data Intelligence",
      shortDescription: "Transform raw data into actionable insights",
      fullDescription: "Our data intelligence platform processes millions of data points to uncover patterns and opportunities you might otherwise miss. With real-time analytics and predictive modeling, we help you make data-driven decisions that increase efficiency and drive growth across your organization.",
      icon: "📊",
      color: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      title: "Scalable Solutions",
      shortDescription: "Grow without constraints or performance issues",
      fullDescription: "AventIQ's architecture is built for scale. Whether you're processing 100 transactions or 10 million, our systems maintain consistent performance. We design solutions that grow with your business, ensuring you never need to rebuild from scratch as your needs evolve.",
      icon: "📈",
      color: "from-orange-500 to-red-500"
    }
  ];

  const toggleCard = (id: number) => {
    if (expandedCard === id) {
      setExpandedCard(null);
    } else {
      setExpandedCard(id);
    }
  };

  return (
    <div className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-8 text-slate-800">Our Solutions</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cardData.map((card) => (
          <div
            key={card.id}
            className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 ease-in-out cursor-pointer ${
              expandedCard === card.id ? 'ring-2 ring-opacity-50 ring-blue-500' : 'hover:shadow-xl'
            }`}
            onClick={() => toggleCard(card.id)}
            style={{
              height: expandedCard === card.id ? '320px' : '140px',
            }}
          >
            <div className="p-5 h-full flex flex-col">
              {/* Card Header */}
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r ${card.color} flex items-center justify-center text-white text-xl`}>
                  {card.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-slate-800 truncate">{card.title}</h3>
                  <p className="text-slate-600 text-sm mt-1">{card.shortDescription}</p>
                </div>
                <div className="flex-shrink-0 transform transition-transform duration-300">
                  <svg 
                    className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${
                      expandedCard === card.id ? 'rotate-180' : ''
                    }`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              {/* Expanded Content */}
              <div 
                className={`mt-4 overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedCard === card.id ? 'opacity-100' : 'opacity-0 h-0'
                }`}
              >
                <p className="text-slate-700 leading-relaxed">
                  {card.fullDescription}
                </p>
                <button className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-sm font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpandableCards;