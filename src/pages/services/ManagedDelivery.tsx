import React from "react";
import GlassIcons from "../../components/GlassIcons";
import { Users, Settings, ClipboardList, ShieldCheck, BadgeCheck, Timer } from "lucide-react";

const ManagedDelivery = () => {
  const offerings = [
    {
      title: "Dedicated Pods, Not Freelancers",
      description:
        "Fyodor delivers AI and automation through curated pods — trained, governed, and accountable to outcomes. No freelance chaos — just structured, consistent results.",
    },
    {
      title: "Embedded Delivery Leadership",
      description:
        "Every pod comes with built-in leadership, ensuring strategic alignment, performance governance, and real-time accountability.",
    },
    {
      title: "Documentation & QA Included",
      description:
        "From SOPs to test coverage, our pods embed documentation, QA workflows, and audit-readiness from the start.",
    },
    {
      title: "Rapid Ramp-Up & Scale",
      description:
        "Launch in weeks, not months. Our modular model supports rapid deployment of pods across regions, business units, or initiatives.",
    },
    {
      title: "Transparent Metrics & Reporting",
      description:
        "Access real-time dashboards and delivery reports so you always know where your automation effort stands.",
    },
    {
      title: "Risk-Reduced Execution Model",
      description:
        "We take delivery ownership — minimizing handoffs, de-risking dependencies, and accelerating value realization.",
    },
  ];

  const icons = [
    { icon: <Users className="w-8 h-8" />, color: "#2563eb" },
    { icon: <Settings className="w-8 h-8" />, color: "#7c3aed" },
    { icon: <ClipboardList className="w-8 h-8" />, color: "#0ea5e9" },
    { icon: <Timer className="w-8 h-8" />, color: "#f59e0b" },
    { icon: <BadgeCheck className="w-8 h-8" />, color: "#10b981" },
    { icon: <ShieldCheck className="w-8 h-8" />, color: "#f43f5e" },
  ];

  return (
    <div className="py-20 px-5 bg-black text-white">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Managed{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">
              Delivery
            </span>
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Say goodbye to unstructured outsourcing. Fyodor’s managed delivery model guarantees outcomes — with pods designed to deliver value, not just effort.
          </p>
          <a
            href="#contact"
            className="inline-block mt-4 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>

        {/* Why Fyodor */}
        <div className="space-y-6">
          <div className="border border-white/20 inline-block px-4 py-1 rounded-full text-sm text-white bg-white/10 backdrop-blur-md mb-4">
            DELIVERY AT SCALE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Why Companies Choose{" "}
            <span className="text-blue-400">Fyodor Pods</span>
          </h2>
          <p className="text-slate-300 max-w-3xl">
            Our pods are fully managed units of delivery — complete with strategy leads, solution architects, developers, QA, and support. This means less friction, faster time to value, and consistent execution velocity.
          </p>
        </div>

        {/* What We Deliver */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-6">
            What We Deliver
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offerings.map((item, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 border border-slate-700/50 hover:border-blue-400/30 shadow-lg hover:shadow-xl hover:shadow-blue-500/10"
              >
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Icon */}
                <div className="relative z-10 mb-4">
                  <GlassIcons items={[icons[index]]} />
                </div>

                {/* Title */}
                <h4 className="relative z-10 text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="relative z-10 text-slate-300 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center pt-16 border-t border-slate-800">
          <h3 className="text-2xl font-semibold mb-2">
            Deploy Smarter, Deliver Faster
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            Fyodor’s managed pods help you scale automation, not overhead. Let’s deliver excellence together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManagedDelivery;
