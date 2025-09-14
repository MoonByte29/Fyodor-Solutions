import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShinyButton from "../../components/ShinyButton";
import { motion, AnimatePresence } from "framer-motion";

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
    <section className="section-padding min-h-screen overflow-hidden relative">
      <div className="container-custom relative z-10">
        <motion.div 
          className="flex flex-col items-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="glass-effect rounded-full px-8 py-3 flex items-center gap-3 mb-10"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className="h-2 w-2 animate-pulse-slow bg-violet-500 rounded-full"></span>
            <span className="text-white text-sm font-semibold tracking-wider">
              BLOGS
            </span>
          </motion.div>

          <motion.h2 
            className="text-center font-bold text-white text-3xl md:text-5xl lg:text-6xl leading-tight mb-8 text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            What's New at{" "}
            <span className="gradient-text">
              Fyodor
            </span>
          </motion.h2>

          <motion.p 
            className="text-center text-slate-300 text-xl max-w-3xl leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Stay informed with the latest trends, ideas, and expert guidance
            from our team.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div 
          className="flex flex-col lg:flex-row gap-8 justify-center items-stretch mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {cards.map((card) => {
            const isActive = activeCard === card.id;
            return (
              <motion.div
                key={card.id}
                onMouseEnter={() => setActiveCard(card.id)}
                onMouseLeave={() => setActiveCard(null)}
                className={`glass-effect shadow-2xl rounded-2xl cursor-pointer transition-all duration-500 ease-in-out overflow-hidden border border-blue-700/40 flex flex-col ${
                  isActive
                    ? 'lg:flex-[2] shadow-blue-500/40 border-blue-500/60'
                    : 'lg:flex-[1]'
                }`}
                style={{ maxHeight: "350px" }}
                whileHover={{ 
                  y: -4,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                layout
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="p-8 h-full flex flex-col">
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-6"
                    layout
                  >
                    {card.title}
                  </motion.h3>

                  <div className="flex flex-col lg:flex-row gap-6 h-full">
                    {/* Content area */}
                    <div
                      className={`flex-1 flex flex-col ${
                        isActive ? "lg:w-1/2" : "w-full"
                      }`}
                    >
                      <AnimatePresence mode="wait">
                        {isActive ? (
                          <motion.div
                            key="expanded"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col h-full"
                          >
                            <p className="text-blue-100/90 mb-6 flex-1 text-lg leading-relaxed font-light">
                              {truncateText(card.blog, 200)}
                            </p>
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Link
                                to={card.url}
                                className="btn-primary flex items-center justify-center gap-2 text-sm"
                              >
                                Read More
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </Link>
                            </motion.div>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="collapsed"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col items-center justify-center h-full"
                          >
                            <div className="mb-4 h-full object-cover overflow-hidden rounded-xl shadow-xl border border-blue-700/40">
                              <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                              />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Image area - only visible when expanded */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, x: 20, scale: 0.9 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          exit={{ opacity: 0, x: 20, scale: 0.9 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="flex-1 lg:w-1/2 flex items-center justify-center"
                        >
                          <div className="w-full h-64 lg:h-full rounded-xl overflow-hidden shadow-xl border border-blue-700/40">
                            <img
                              src={card.image}
                              alt={card.title}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Glow effect overlay */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 pointer-events-none rounded-2xl"
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          className="w-full flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ShinyButton 
              text="Explore All Articles" 
              disabled={false} 
              speed={3}
              className="text-lg px-10 py-4"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;

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
