import React from "react";
import { Target, Brain, Users, Globe } from "lucide-react";
import GlassIcons from "../../components/GlassIcons";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="section-padding min-h-screen">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div 
          className="flex flex-col items-start mb-20"
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
              WHY CHOOSE US
            </span>
          </motion.div>

          <motion.h2 
            className="font-bold text-white text-3xl md:text-5xl lg:text-6xl leading-tight mb-8 text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Why Enterprises Choose{" "}
            <span className="gradient-text">
              Fyodor
            </span>
          </motion.h2>

          <motion.p 
            className="text-slate-300 text-xl max-w-3xl leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Discover how our innovative approach delivers measurable results for
            businesses worldwide
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative glass-effect rounded-3xl p-10 card-hover border border-slate-700/50 hover:border-blue-500/40 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20"
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Glass Icon (1 per feature) */}
              <div className="relative z-10 mb-8">
                <GlassIcons items={[items[index]]} />
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-2xl font-bold text-white mb-6 leading-tight group-hover:text-blue-200 transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-slate-300 leading-relaxed mb-6 text-lg font-light">
                {feature.description}
              </p>

              {/* Subtitle */}
              <div className="relative z-10 pt-6 border-t border-slate-700/50 group-hover:border-blue-500/40 transition-colors duration-300">
                <p className="text-slate-400 leading-relaxed text-base italic font-light">
                  {feature.subtitle}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-6 right-6 w-3 h-3 bg-gradient-to-br from-blue-400 to-violet-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Benefits;
