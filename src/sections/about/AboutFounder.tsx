"use client";
import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface ContainerScrollTitleProps {
  translate: number;
  children: React.ReactNode;
}
const ContainerScrollTitle: React.FC<ContainerScrollTitleProps> = ({
  translate,
  children,
}) => {
  return (
    <div
      style={{ transform: `translateY(${translate}px)` }}
      className="mx-auto max-w-5xl text-center"
    >
      {children}
    </div>
  );
};

interface ContainerScrollCardProps {
  rotate: number;
  scale: number;
  children: React.ReactNode;
}
const ContainerScrollCard: React.FC<ContainerScrollCardProps> = ({
  rotate,
  scale,
  children,
}) => {
  return (
    <div
      style={{
        transform: `rotateX(${rotate}deg) scale(${scale})`,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="mx-auto -mt-12 h-[30rem] w-full max-w-5xl rounded-[30px] border border-blue-500 bg-[#0f172a] p-2 shadow-2xl md:h-[40rem] md:p-6"
    >
      <div className="size-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#0a0f2d] to-[#1e293b] md:p-6">
        {children}
      </div>
    </div>
  );
};

const AboutFounder: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex h-[60rem] items-center justify-center md:h-[80rem]"
    >
      <div
        className="relative w-full py-5 md:py-10"
        style={{ perspective: 1000 }}
      >
        <motion.div style={{ y: translateY }}>
          <ContainerScrollTitle translate={0}>
            <div className="flex flex-col items-center text-center">
              {" "}
              {/* Centering container */}
              <div className="max-w-fit border border-white/30 rounded-full px-6 py-2 backdrop-blur-sm bg-white/10 flex items-center gap-2 mb-8">
                <span className="h-2 w-2 animate-pulse bg-violet-500 rounded-full"></span>
                <span className="text-white text-sm font-medium tracking-wider">
                  FOUNDER
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Meet Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                  Founder
                </span>
              </h2>
              <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto">
                Driven by vision, passion, and innovation, our founder built
                Fyodor to empower businesses worldwide.
              </p>
            </div>
          </ContainerScrollTitle>
        </motion.div>

        <motion.div style={{ rotateX: rotate, scale }}>
          <ContainerScrollCard rotate={0} scale={1}>
            {/* Founder Content Inside ContainerScrollCard */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-12">
              {/* Left Side: Image + Name */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-72 h-72 bg-blue-600 rounded-full -z-10 blur-lg opacity-70"></div>
                  <img
                    src="https://img.freepik.com/free-photo/portrait-confident-young-businessman-with-his-arms-crossed_23-2148176206.jpg?t=st=1757602319~exp=1757605919~hmac=096260f0bafab81959b33eea1fe64744fb7ad5ab5a9dcfca67bdae0d34c7fe35&w=740"
                    alt="Founder"
                    className="w-64 h-64 object-cover rounded-lg grayscale border-4 border-blue-500 shadow-xl"
                  />
                </div>
                <h2 className="mt-6 text-3xl font-extrabold text-blue-400">
                  NIKHIL <span className="text-white">MITTAL</span>
                </h2>
              </div>

              {/* Right Side: Bio + Tags + Logos */}
              <div className="md:w-1/2">
                <p className="text-blue-100 text-lg leading-relaxed">
                  With extensive onsite experience across the US, Europe, and
                  APAC regions, Nikhil has worked closely with business and IT
                  leaders to foster strong partnerships. His collaborative
                  mindset ensures the delivery of tailored digital solutions
                  that meet global business needs. At AventIQ, Nikhil leads with
                  a mission to drive{" "}
                  <span className="font-semibold text-blue-400">
                    customer success
                  </span>{" "}
                  through digital transformation.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {[
                    "Visionary Thinker",
                    "Tech-Savvy",
                    "Creative Problem-Solver",
                    "Customer-Centric",
                  ].map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-blue-900/40 text-blue-200 text-sm font-medium border border-blue-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Featured Logos */}
                <div className="mt-8">
                  <h3 className="font-semibold text-blue-300 mb-4">
                    Featured In:
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      "https://via.placeholder.com/150x60?text=Adient",
                      "https://via.placeholder.com/150x60?text=Martin+Brower",
                      "https://via.placeholder.com/150x60?text=CooperStandard",
                      "https://via.placeholder.com/150x60?text=Stellum",
                      "https://via.placeholder.com/150x60?text=Emirates",
                      "https://via.placeholder.com/150x60?text=GGG",
                    ].map((logo, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-center bg-blue-900/30 rounded-lg p-3 border border-blue-700"
                      >
                        <img
                          src={logo}
                          alt={`Logo ${i}`}
                          className="max-h-12 opacity-90"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ContainerScrollCard>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutFounder;
