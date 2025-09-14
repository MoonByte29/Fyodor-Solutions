import React from "react";
import { Target, Brain, Users, Globe } from "lucide-react";
import GlassIcons from "../../components/GlassIcons";

interface Feature {
  title: string;
  description: string;
  subtitle: string;
}

const Benefits = () => {
  const features: Feature[] = [
    {
      title: "Outcome-Focused Execution",
      description:
        "We measure success by impact, not just effort. Every engagement we take on is tied to clear business KPIs — whether it's reducing processing time, improving fraud detection accuracy, or cutting operational costs. Our teams go beyond code drops; we architect transformation that sticks.",
      subtitle:
        "We define value by results delivered, not hours billed — and that philosophy runs across every pod we deploy.",
    },
    {
      title: "AI + Automation Synergy",
      description:
        "At AventIQ, we don't treat AI and RPA as separate silos — we engineer systems where bots and brains work together.",
      subtitle:
        "Our hybrid approach blends RPA reliability with AI adaptability, enabling workflows that not only execute but also learn and optimize. This synergy powers faster decisions, lower error rates, and automation that evolves with your business.",
    },
    {
      title: "Managed Delivery, Not Freelancers",
      description:
        "We're not a staffing firm. AventIQ delivers AI and automation through curated pods — trained, governed, and accountable to outcomes.",
      subtitle:
        "Each pod comes with built-in delivery leadership, QA, documentation, and playbooks. That means less risk, faster ramp-up, and better execution velocity. No freelance chaos. Just structured, high-quality delivery from day one.",
    },
    {
      title: "Built for Global Scale",
      description:
        "Whether you're a high-growth startup in need of speed or a large enterprise navigating compliance and scale — AventIQ fits.",
      subtitle:
        "Our model supports distributed delivery with built-in localization, cross-border compliance handling, and flexible ramp-up. We've built systems across banking, insurance, auto, and retail — and we scale where and when you need us.",
    },
  ];

  // GlassIcons items (icons + colors + labels)
  const items = [
    { icon: <Target className="w-8 h-8" />, color: "#1e3a8a" },
    { icon: <Brain className="w-8 h-8" />, color: "#5b1d8e" },
    { icon: <Users className="w-8 h-8" />, color: "#064e3b" },
    { icon: <Globe className="w-8 h-8" />, color: "#3b82f6"},
  ];

  return (
    <div className="py-20 px-5 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="min-w-fit border border-white/30 rounded-full px-6 py-2 backdrop-blur-sm bg-white/10 flex items-center gap-2 mb-8">
            <span className="h-2 w-2 animate-pulse bg-violet-500 rounded-full"></span>
            <span className="text-white text-sm font-medium tracking-wider">
              BENEFITS
            </span>
          </div>

          <h2 className="text-center font-bold text-white text-2xl md:text-4xl lg:text-5xl leading-tight mb-6">
            Why Enterprises Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              Fyodor
            </span>
          </h2>

          <p className="text-left text-slate-300 text-lg max-w-2xl">
            Discover how our innovative approach delivers measurable results for
            businesses worldwide
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 border border-slate-700/50 hover:border-blue-500/30 shadow-lg hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Glass Icon (1 per feature) */}
              <div className="relative z-10 mb-6">
                <GlassIcons items={[items[index]]} />
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-xl font-bold text-white mb-4 leading-snug group-hover:text-blue-200 transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-slate-300 leading-relaxed mb-5 text-base">
                {feature.description}
              </p>

              {/* Subtitle */}
              <div className="relative z-10 pt-4 border-t border-slate-700/50 group-hover:border-blue-500/30 transition-colors duration-300">
                <p className="text-slate-400 leading-relaxed text-sm italic">
                  {feature.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Benefits;
