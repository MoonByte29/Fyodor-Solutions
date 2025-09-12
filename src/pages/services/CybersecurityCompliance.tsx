import React from "react";
import ShinyButton from "../../components/ShinyButton";
import GlassIcons from "../../components/GlassIcons";
import { Laptop, Palette, Zap, Cloud, Headphones } from "lucide-react";

const CybersecurityCompliance = () => {
  const services = [
    {
      title: "Product Development & Engineering",
      description:
        "End-to-end design and development of scalable web, mobile, and cloud solutions. Agile, modern architectures tailored to your business.",
      icon: Laptop,
      color: "#3b82f6",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "UI/UX & Frontend Excellence",
      description:
        "Intuitive, responsive, and engaging digital interfaces. Focus on user-centered design and seamless experiences.",
      icon: Palette,
      color: "#8b5cf6",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      title: "Enterprise Integration & Automation",
      description:
        "API-driven connectivity for cross-platform systems. Smart automation to reduce complexity and increase efficiency.",
      icon: Zap,
      color: "#06b6d4",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Data & Cloud Solutions",
      description:
        "Secure cloud migration, storage, and management. Data-driven insights and AI alignment.",
      icon: Cloud,
      color: "#3b82f6",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      title: "Support & Managed Services",
      description:
        "Continuous monitoring, maintenance, and scaling. Reliable support for ongoing business growth.",
      icon: Headphones,
      color: "#8b5cf6",
      gradient: "from-purple-500 to-violet-500",
    },
  ];

  const advantages = [
    {
      title: "Proven Expertise",
      description:
        "Years of experience in delivering impactful digital products.",
      icon: "🏆",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      title: "Tailored Solutions",
      description: "Every solution is designed around your specific goals.",
      icon: "🎯",
      gradient: "from-red-400 to-pink-500",
    },
    {
      title: "Client-First Approach",
      description: "We prioritize your needs and long-term success.",
      icon: "👥",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      title: "Transparent Process",
      description: "Clear communication at every step.",
      icon: "💬",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      title: "Dedicated Support",
      description: "A team that stays with you beyond delivery.",
      icon: "✅",
      gradient: "from-emerald-400 to-teal-500",
    },
    {
      title: "Cross-Industry Knowledge",
      description: "Experience across tech, education, finance, and more.",
      icon: "🌍",
      gradient: "from-indigo-400 to-purple-500",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900"></div>
      </div>

      {/* Hero Section */}
      <div className="relative py-24 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            <div className="inline-block mb-6">
              <div className="border border-white/30 rounded-full px-8 py-3 backdrop-blur-sm bg-white/5 flex items-center gap-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <div
                    className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
                <span className="text-white text-sm font-medium tracking-wider">
                  DIGITAL TRANSFORMATION EXPERTS
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="inline-block hover:scale-105 transition-transform duration-300">
                Digital
              </span>{" "}
              <span className="inline-block hover:scale-105 transition-transform duration-300">
                Solutions
              </span>{" "}
              <span className="inline-block hover:scale-105 transition-transform duration-300">
                &
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 animate-pulse inline-block hover:scale-105 transition-transform duration-300">
                Innovation
              </span>{" "}
              <br />
              <span className="inline-block hover:scale-105 transition-transform duration-300 text-4xl md:text-5xl lg:text-6xl text-slate-300">
                for Modern Enterprises
              </span>
            </h1>

            <p className="text-slate-300 max-w-4xl mx-auto text-xl leading-relaxed">
              AI, automation, and digital experiences bring new opportunities —
              but also demand reliability and scale.
              <span className="text-blue-400 font-semibold">
                {" "}
                Fyodor delivers next-generation solutions
              </span>{" "}
              with innovation and trust at the core of every deployment. Whether
              you're launching a digital platform or scaling operations, we
              ensure your systems are smart, seamless, and future-ready.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <ShinyButton
                text="Schedule a Consultation"
                disabled={false}
                speed={3}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why Fyodor Section */}
      <div className="relative py-24 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-start mb-20">
            <div className="min-w-fit border border-white/30 rounded-full px-8 py-3 backdrop-blur-sm bg-white/10 flex items-center gap-3 mb-10 hover:bg-white/15 transition-colors duration-300">
              <div className="flex gap-1">
                <span className="h-2 w-2 animate-pulse bg-violet-500 rounded-full"></span>
              </div>
              <span className="text-white text-sm font-medium tracking-wider">
                WHY FYODOR
              </span>
            </div>

            <h2 className="font-bold text-white text-3xl md:text-5xl lg:text-6xl leading-tight mb-8 max-w-4xl">
              Why Enterprises Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 relative">
                <span className="hover:scale-105 inline-block transition-transform duration-300">
                  Fyodor
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </span>
            </h2>

            <div className="relative">
              <p className="text-slate-300 text-xl max-w-4xl leading-relaxed">
                We don't just build solutions —{" "}
                <strong className="text-blue-400">we craft experiences.</strong>{" "}
                At Fyodor, our experts work alongside your teams to integrate
                technology with strategy, ensuring everything we deliver is
                scalable, user-friendly, and built to last. Unlike
                one-size-fits-all firms, our approach is{" "}
                <strong className="text-violet-400">
                  customized, collaborative, and impact-driven.
                </strong>
              </p>

              {/* Decorative line */}
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-400 via-violet-400 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Deliver Section */}
      <div className="relative py-24 px-5" id="services">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-start mb-20">
            <div className="min-w-fit border border-white/30 rounded-full px-8 py-3 backdrop-blur-sm bg-white/10 flex items-center gap-3 mb-10 hover:bg-white/15 transition-colors duration-300">
              <div className="flex gap-1">
                <span className="h-2 w-2 animate-pulse bg-blue-500 rounded-full"></span>
                <span
                  className="h-2 w-2 animate-pulse bg-cyan-500 rounded-full"
                  style={{ animationDelay: "0.3s" }}
                ></span>
              </div>
              <span className="text-white text-sm font-medium tracking-wider">
                OUR SERVICES
              </span>
            </div>

            <h2 className="font-bold text-white text-3xl md:text-5xl lg:text-6xl leading-tight mb-8">
              What We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 hover:scale-105 inline-block transition-transform duration-300">
                Deliver
              </span>
            </h2>

            <p className="text-slate-300 text-xl max-w-3xl leading-relaxed">
              We help enterprises accelerate their digital journey with{" "}
              <strong className="text-blue-400">
                powerful, adaptable, and innovative solutions.
              </strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 border border-slate-700/50 hover:border-blue-400/40 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-sm overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Animated background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                ></div>

                {/* Subtle border glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/0 via-violet-500/20 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                {/* Glass Icon */}
                <div className="relative z-10 mb-6">
                  {/* <GlassIcons icon={service.icon} color={service.color} /> */}
                </div>

                {/* Title */}
                <h4 className="relative z-10 text-2xl font-bold text-white mb-4 leading-tight group-hover:text-blue-200 transition-colors duration-300">
                  {service.title}
                </h4>

                {/* Description */}
                <p className="relative z-10 text-slate-300 leading-relaxed text-lg group-hover:text-slate-200 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Decorative corner element */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-white/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why We Are Your Best Choice Section */}
      <div className="relative py-24 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-start mb-20">
            <div className="min-w-fit border border-white/30 rounded-full px-8 py-3 backdrop-blur-sm bg-white/10 flex items-center gap-3 mb-10 hover:bg-white/15 transition-colors duration-300">
              <div className="flex gap-1">
                <span className="h-2 w-2 animate-pulse bg-violet-500 rounded-full"></span>
                <span
                  className="h-2 w-2 animate-pulse bg-purple-500 rounded-full"
                  style={{ animationDelay: "0.3s" }}
                ></span>
              </div>
              <span className="text-white text-sm font-medium tracking-wider">
                OUR ADVANTAGES
              </span>
            </div>

            <h2 className="font-bold text-white text-3xl md:text-5xl lg:text-6xl leading-tight mb-8">
              Why We Are Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 hover:scale-105 inline-block transition-transform duration-300">
                Best Choice
              </span>
            </h2>

            <p className="text-slate-300 text-xl max-w-3xl leading-relaxed">
              Discover how our{" "}
              <strong className="text-violet-400">innovative approach</strong>{" "}
              delivers measurable results for businesses worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-2xl p-8 border border-slate-700/30 hover:border-blue-400/40 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm relative overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Background gradient effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${advantage.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
                ></div>

                <div className="flex items-start gap-5 relative z-10">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${advantage.gradient} bg-opacity-20 border border-blue-400/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300 text-xl shadow-lg`}
                  >
                    <span className="group-hover:scale-110 transition-transform duration-300">
                      {advantage.icon}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-bold text-lg mb-3 group-hover:text-blue-200 transition-colors duration-300">
                      {advantage.title}
                    </h4>
                    <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                      {advantage.description}
                    </p>
                  </div>
                </div>

                {/* Subtle corner decoration */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-24">
          <div className="inline-block p-12 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl border border-slate-700/50 backdrop-blur-sm relative overflow-hidden group hover:border-blue-400/40 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
              Ready to Transform Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                Digital Future?
              </span>
            </h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto relative z-10">
              Let's discuss how Fyodor can accelerate your digital
              transformation with cutting-edge solutions tailored to your needs.
            </p>
            <a
              href="#contact"
              className="inline-block px-12 py-5 rounded-full bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-600 hover:from-blue-700 hover:via-violet-700 hover:to-cyan-700 transition-all duration-300 font-semibold text-lg shadow-2xl hover:shadow-blue-500/40 hover:scale-105 transform relative z-10"
            >
              Start Your Journey
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CybersecurityCompliance;
