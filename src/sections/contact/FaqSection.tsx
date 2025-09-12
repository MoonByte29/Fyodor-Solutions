import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does AventIQ offer?",
    answer:
      "AventIQ offers a wide range of services including digital transformation, cloud solutions, AI integration, data analytics, and IT consulting tailored for enterprise needs.",
  },
  {
    question: "Which industries does AventIQ serve?",
    answer:
      "We serve a variety of industries including finance, healthcare, manufacturing, retail, and government sectors, offering specialized solutions for each.",
  },
  {
    question:
      "What makes AventIQ different from other technology consulting firms?",
    answer:
      "Our unique approach blends deep industry expertise, innovative technologies, and a client-first mindset. We focus on measurable outcomes and long-term partnerships.",
  },
  {
    question: "What measurable outcomes can AventIQ deliver?",
    answer:
      "We help businesses achieve 150% improvement in operational efficiency, reduce costs, and drive new revenue streams through data-driven decision-making.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Absolutely. We offer continuous support, performance monitoring, optimization, and managed services to ensure sustained success beyond project delivery.",
  },
  {
    question: "How do I know if AventIQ is the right partner for my business?",
    answer:
      "Schedule a free consultation with our experts. We'll assess your goals and help you determine if our capabilities align with your needs.",
  },
  {
    question: "How can I get started with AventIQ?",
    answer:
      "Getting started is easy—just reach out via our contact form, and our team will schedule a discovery session to understand your business objectives.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [heights, setHeights] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className=" py-16 px-6 md:px-20" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <div className="min-w-fit border border-white/30 rounded-full px-6 py-2 backdrop-blur-sm bg-white/10 flex items-center gap-2 mb-8">
            <span className="h-2 w-2 animate-pulse bg-violet-500 rounded-full"></span>
            <span className="text-white text-sm font-medium tracking-wider">
              FAQ
            </span>
          </div>

          <h2 className="text-center font-bold text-white text-2xl md:text-4xl lg:text-5xl leading-tight mb-6">
            Questions around{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              Fyodor
            </span>
          </h2>

          <p className="text-left text-slate-300 text-lg max-w-2xl">
            Clear insights to help you understand Fyodor better
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-700 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center bg-[#101223] hover:bg-[#161828] transition-colors"
              >
                <span className="text-lg font-medium pr-4">{faq.question}</span>
                <span
                  className={`flex-shrink-0 transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown size={20} />
                </span>
              </button>

              <div
                className="overflow-hidden transition-all duration-300 ease-out"
                style={{
                  maxHeight: activeIndex === index ? "500px" : "0px",
                  opacity: activeIndex === index ? 1 : 0,
                }}
              >
                <div className="px-6 py-4 text-sm text-gray-300 bg-[#0f111f]">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
