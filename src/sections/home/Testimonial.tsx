import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  image: string;
}

interface Props {
  testimonials: Testimonial[];
  autoplay?: boolean;
  duration?: number;
}

const TestimonialCarousel: React.FC<Props> = ({
  testimonials = [],
  autoplay = false,
  duration = 5000,
}) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      handleNext();
    }, duration);
    return () => clearInterval(interval);
  }, [autoplay, duration, active]);

  const activeTestimonialQuote = useMemo(() => {
    return testimonials[active]?.quote.split(" ") || [];
  }, [active, testimonials]);

  function handleNext() {
    setActive((prev) => (prev + 1) % testimonials.length);
  }

  function handlePrev() {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }

  function isActive(index: number) {
    return active === index;
  }

  function randomRotateY() {
    return Math.floor(Math.random() * 21) - 10;
  }

  if (testimonials.length === 0) return null;

  return (
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased lg:px-12 md:max-w-4xl md:px-8">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        {/* Left Side - Image stack */}
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.image}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.6,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col justify-between py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <h3 className="text-2xl font-bold text-white">
                {testimonials[active].name}
              </h3>
              <p className="text-sm text-blue-300">
                {testimonials[active].designation}
              </p>
              <motion.p className="mt-8 text-lg text-gray-300">
                {activeTestimonialQuote.map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="group flex size-8 items-center justify-center rounded-full bg-blue-900/40 border border-blue-400/50 hover:bg-blue-800/60"
            >
              <ArrowLeft className="size-5 text-blue-200 transition-transform duration-300 group-hover:rotate-12" />
            </button>
            <button
              onClick={handleNext}
              className="group flex size-8 items-center justify-center rounded-full bg-blue-900/40 border border-blue-400/50 hover:bg-blue-800/60"
            >
              <ArrowRight className="size-5 text-blue-200 transition-transform duration-300 group-hover:-rotate-12" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Testimonial() {
  const demoTestimonials: Testimonial[] = [
    {
      quote:
        "Fyodor empowers our team with cutting-edge tools and a seamless experience that truly enhances productivity.",
      name: "Alice Johnson",
      designation: "Product Manager, TechCorp",
      image:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=500&h=500&fit=crop",
    },
    {
      quote:
        "The simplicity and power of Fyodor helps us scale faster without unnecessary complexity.",
      name: "Michael Chen",
      designation: "Founder, StartupX",
      image:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=500&h=500&fit=crop",
    },
    {
      quote:
        "With Fyodor, our operations became more efficient and collaboration feels effortless across teams.",
      name: "Sofia Martinez",
      designation: "Head of Operations, GlobalBiz",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&h=500&fit=crop",
    },
  ];

  return (
    <div className="py-20 px-5 min-h-screen ">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="min-w-fit border border-blue-400/40 rounded-full px-6 py-2 backdrop-blur-sm bg-blue-900/40 flex items-center gap-2 mb-8">
            <span className="h-2 w-2 animate-pulse bg-blue-400 rounded-full"></span>
            <span className="text-blue-200 text-sm font-medium tracking-wider">
              TESTIMONIALS
            </span>
          </div>

          <h2 className="font-bold text-white text-2xl md:text-4xl lg:text-5xl leading-tight mb-6">
            Trusted by enterprises{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              Worldwide
            </span>
          </h2>

          <p className="text-left text-blue-200/80 text-lg max-w-2xl">
            Discover how Fyodor helps organizations accelerate growth, improve
            collaboration, and achieve impactful results.
          </p>
        </div>
      </div>
      <TestimonialCarousel
        testimonials={demoTestimonials}
        autoplay
        duration={4000}
      />
    </div>
  );
}
