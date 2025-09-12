import React from "react";
import GlassIcons from "../../components/GlassIcons";
import { Target, Settings, FileText, Users, Layers3, Bot } from "lucide-react";
import ShinyButton from "../../components/ShinyButton";
import ContactForm from "../../sections/contact/ContactForm";

const AIAutomation = () => {
  const services = [
    {
      title: "Readiness Assessments",
      description:
        "Evaluate your current automation maturity, identify quick wins, and build alignment across business and tech.",
    },
    {
      title: "Use Case Discovery",
      description:
        "Prioritize high-impact automation and AI opportunities using value vs. effort matrices tailored to your context.",
    },
    {
      title: "AI Roadmap Design",
      description:
        "Define how Agentic AI teams can support your roadmap — from PoC to full-scale deployment.",
    },
    {
      title: "Architecture & Tool Strategy",
      description:
        "Recommend the right platforms (e.g., RPA, ML, LLM APIs) and governance models suited to your scale and complexity.",
    },
    {
      title: "Org Design & Change Management",
      description:
        "Help you set up AI CoEs, reskill internal teams, and drive stakeholder buy-in.",
    },
  ];

  const benefits = [
    {
      icon: <Target className="w-8 h-8" />,
      color: "#f59e0b",
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
        "We prioritize understanding your business goals and success criteria.",
    },
    {
      icon: <FileText className="w-8 h-8" />,
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
        "Our team is available and eager to support you at every phase of delivery.",
    },
    {
      icon: <Layers3 className="w-8 h-8" />,
      color: "#0ea5e9",
      title: "Expertise Across Industries",
      subtitle:
        "Our team has extensive experience working across verticals like BFSI, Retail, and Manufacturing.",
    },
  ];

  return (
    <div className="py-20 px-5 bg-black text-white">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            AI & Automation{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500">
              Consulting
            </span>
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            We help organizations build future-ready AI and automation programs
            — from defining a clear roadmap to ensuring measurable ROI. Whether
            you're scaling RPA, adopting generative AI, or integrating
            intelligent workflows, our services ensure every initiative is
            grounded in business value.
          </p>
          <ShinyButton text="Get Started" />
        </div>

        {/* Why AventIQ Section */}
        <div className="space-y-8">
          <div className="border border-white/20 inline-block px-4 py-1 rounded-full text-sm text-white bg-white/10 backdrop-blur-md mb-4">
            BENEFITS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Why <span className="text-orange-400">AventIQ</span>
          </h2>
          <p className="text-slate-300 max-w-3xl">
            Unlike pure-play consultants, we don’t just deliver strategy decks.
            Our advisory is backed by real-world delivery across RPA and AI — so
            every recommendation is actionable. We design your roadmap with one
            goal in mind:{" "}
            <strong className="text-white">
              to execute at scale without bloated CapEx.
            </strong>
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
                className="bg-slate-800/60 p-6 rounded-xl border border-slate-700 hover:border-blue-400/40 transition"
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
                  <GlassIcons
                    items={[{ icon: benefit.icon, color: benefit.color }]}
                  />
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">
                  {benefit.title}
                </h4>
                <p className="text-slate-400 text-sm">{benefit.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default AIAutomation;
