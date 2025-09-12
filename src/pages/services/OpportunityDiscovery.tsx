import React from "react";
import GlassIcons from "../../components/GlassIcons";
import {
  Settings,
  FileBarChart2,
  Layers3,
  Target,
  Bot,
  Users,
} from "lucide-react";

const OpportunityDiscovery = () => {
  const services = [
    {
      title: "Process Discovery & Mapping",
      description:
        "Identify high-friction workflows through interviews, digital observation, and workflow analytics.",
    },
    {
      title: "Process Mining & Task Mining",
      description:
        "Leverage leading platforms to extract insights from system logs and user behavior for precise process visibility.",
    },
    {
      title: "Opportunity Assessment",
      description:
        "Score automation potential across RPA, AI, and hybrid approaches based on volume, complexity, and business value.",
    },
    {
      title: "Optimization Strategy",
      description:
        "Recommend not just what to automate — but how to simplify first, reduce handoffs, and maximize ROI post-deployment.",
    },
    {
      title: "Use Case Pipeline Design",
      description:
        "Deliver a clear, prioritized backlog of automation-ready use cases with supporting business cases.",
    },
  ];

  const benefits = [
    {
      icon: <Target className="w-8 h-8" />,
      color: "#f97316",
      title: "Proven Track Record",
      subtitle:
        "We have built a reputation as a trusted and reliable partner in achieving business success.",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      color: "#3b82f6",
      title: "Tailored Solutions",
      subtitle:
        "We offer personalized solutions linked to your specific goals, audience, and industry.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      color: "#10b981",
      title: "Client-Centric Focus",
      subtitle:
        "Your success is our priority. We prioritize understanding your business goals.",
    },
    {
      icon: <FileBarChart2 className="w-8 h-8" />,
      color: "#8b5cf6",
      title: "Transparent Communication",
      subtitle:
        "We believe in open and honest communication every step of the way.",
    },
    {
      icon: <Bot className="w-8 h-8" />,
      color: "#ef4444",
      title: "Dedicated Support",
      subtitle:
        "Our team is reliable and ready to support your business goals end-to-end.",
    },
    {
      icon: <Layers3 className="w-8 h-8" />,
      color: "#0ea5e9",
      title: "Expertise Across Industries",
      subtitle:
        "Our team has deep experience across finance, healthcare, retail, and logistics.",
    },
  ];

  return (
    <div className="py-20 px-5 bg-black text-white">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Opportunity{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500">
              Discovery
            </span>
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            We use process intelligence tools and domain expertise to help you identify, analyze, and optimize the workflows that matter most. Whether you're exploring RPA, AI, or hybrid approaches — our methodology ensures every initiative starts with validated insights, not assumptions.
          </p>
          <a
            href="#contact"
            className="inline-block mt-4 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 transition"
          >
            Get Started
          </a>
        </div>

        {/* Why Fyodor Section */}
        <div className="space-y-8">
          <div className="border border-white/20 inline-block px-4 py-1 rounded-full text-sm text-white bg-white/10 backdrop-blur-md mb-4">
            BENEFITS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Why <span className="text-orange-400">Fyodor</span>
          </h2>
          <p className="text-slate-300 max-w-3xl">
            Our approach blends{" "}
            <strong className="text-white">process mining tools + domain understanding + delivery foresight</strong>, ensuring every discovery leads to scalable outcomes. With Fyodor, you're not left with a strategy deck — you're left with a roadmap we’re ready to implement.
          </p>
        </div>

        {/* What We Deliver Section */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-6">
            What We Deliver
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/60 p-6 rounded-xl border border-slate-700 hover:border-orange-400/40 transition"
              >
                <h4 className="text-lg font-semibold mb-2 text-white">
                  {service.title}
                </h4>
                <p className="text-slate-300 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why We're the Best Choice Section */}
        <div className="space-y-6">
          <div className="border border-white/20 inline-block px-4 py-1 rounded-full text-sm text-white bg-white/10 backdrop-blur-md">
            WHY CHOOSE US
          </div>
          <h3 className="text-3xl font-bold">Why we are your best choice</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-orange-400/40 transition relative"
              >
                <div className="mb-4">
                  <GlassIcons items={[{ icon: benefit.icon, color: benefit.color }]} />
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">
                  {benefit.title}
                </h4>
                <p className="text-slate-400 text-sm">{benefit.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Platforms Section */}
        <div className="text-center pt-10 border-t border-slate-800">
          <h3 className="text-2xl font-semibold mb-2">AI and Automation Platforms</h3>
          <p className="text-slate-400 text-sm">
            We work with leading tools across RPA, AI, Process Mining, and Enterprise Integration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OpportunityDiscovery;
