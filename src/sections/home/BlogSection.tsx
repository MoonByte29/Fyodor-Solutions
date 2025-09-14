import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShinyButton from "../../components/ShinyButton";

const BlogSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const cards = [
    {
      id: 1,
      title: "The Future of Agentic AI",
      blog: "Agentic AI represents a transformative evolution in artificial intelligence, offering unprecedented autonomy in task execution. This technology is becoming the driving force behind modern automation across industries, enabling systems to perform complex tasks and make decisions based on real-time data analysis.",
      cta: "Read more",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      url: "/blogs/future-of-agentic-ai",
    },
    {
      id: 2,
      title: "Maximizing SaaS Efficiency",
      blog: "Discover how businesses are leveraging SaaS solutions to streamline operations and reduce costs. Our latest research shows companies can save up to 40% on operational expenses by implementing the right SaaS tools tailored to their specific needs.",
      cta: "Read more",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      url: "/blogs/maximizing-saas-efficiency",
    },
    {
      id: 3,
      title: "Hiring Tech Talent in 2023",
      blog: "The landscape for hiring technical professionals has evolved dramatically. Companies now prioritize vetted professionals, managed services, and dedicated teams to ensure project success. Learn about the latest trends in tech recruitment.",
      cta: "Read more",
      image:
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      url: "/blogs/hiring-tech-talent-2023",
    },
  ];

  const truncateText = (text: string, maxChars: number) => {
    if (text.length <= maxChars) return text;

    const truncated = text.slice(0, maxChars);
    const lastSpaceIndex = truncated.lastIndexOf(" ");

    return truncated.slice(0, lastSpaceIndex) + "...";
  };

  return (
    <div className="min-h-screen py-12 px-4 overflow-hidden  relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="min-w-fit border border-white/30 rounded-full px-6 py-2 backdrop-blur-sm bg-white/10 flex items-center gap-2 mb-8">
            <span className="h-2 w-2 animate-pulse bg-violet-500 rounded-full"></span>
            <span className="text-white text-sm font-medium tracking-wider">
              BLOGS
            </span>
          </div>

          <h2 className="text-center font-bold text-white text-2xl md:text-4xl lg:text-5xl leading-tight mb-6">
            What's New at{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              Fyodor
            </span>
          </h2>

          <p className="text-left text-slate-300 text-lg max-w-2xl">
            Stay informed with the latest trends, ideas, and expert guidance
            from our team.
          </p>
        </div>
        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
          {cards.map((card) => {
            const isActive = activeCard === card.id;
            return (
              <div
                key={card.id}
                onMouseEnter={() => setActiveCard(card.id)}
                onMouseLeave={() => setActiveCard(null)}
                className={`bg-gradient-to-b from-slate-900/70 to-blue-950/90 backdrop-blur shadow-xl rounded-lg cursor-pointer transition-all duration-500 ease-in-out overflow-hidden border border-blue-700/30 flex flex-col ${
                  isActive
                    ? "md:flex-[2] shadow-sm shadow-blue-500/30 border-blue-500/50"
                    : "md:flex-[1] "
                }`}
                style={{ maxHeight: "350px" }}
              >
                <div className="p-6 h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {card.title}
                  </h3>

                  <div className="flex flex-col md:flex-row gap-4 h-full">
                    {/* Content area */}
                    <div
                      className={`flex-1 flex flex-col ${
                        isActive ? "md:w-1/2" : "w-full"
                      }`}
                    >
                      {isActive ? (
                        <>
                          <p className="text-blue-100/90 mb-4 flex-1 line-clamp-4">
                            {truncateText(card.blog, 200)}
                          </p>
                          <Link
                            to={card.url}
                            className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200"
                          >
                            Read More
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </Link>
                        </>
                      ) : (
                        <div className="flex flex-col items-center justify-center h-full">
                          <div className="mb-4 h-full object-cover overflow-hidden rounded-lg shadow-lg border border-blue-700/30">
                            <img
                              src={card.image}
                              alt={card.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Image area - only visible when expanded */}
                    {isActive && (
                      <div className="flex-1 md:w-1/2 flex items-center justify-center">
                        <div className="w-full h-64 md:h-full rounded-lg overflow-hidden shadow-md border border-blue-700/30">
                          <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Glow effect overlay */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-400/5 pointer-events-none rounded-lg"></div>
                )}
              </div>
            );
          })}
        </div>{" "}
        <div className="w-full flex justify-end mt-6">
          <ShinyButton text="Read More" disabled={false} speed={3} />
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
