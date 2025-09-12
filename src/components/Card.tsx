import React, { useRef, useState } from "react";
import { cn } from "../lib/utils";

interface CardProps {
  name: string;
  title: string;
  contactText: string;
  avatarUrl: string;
  linkedinUrl: string; // ✅ New prop
  className?: string;
}

const Card: React.FC<CardProps> = ({
  name,
  title,
  contactText,
  avatarUrl,
  linkedinUrl,
  className,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    setIsHovered(false);
    cardRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleContactClick = () => {
    if (linkedinUrl) {
      window.open(linkedinUrl, "_blank");
    }
  };

  return (
    <div
      className={cn(
        "min-h-[500px] flex items-center justify-between relative",
        className
      )}
    >
      <div className="relative z-10 min-w-full">
        <div
          ref={cardRef}
          className="relative w-[400px] h-[440px] bg-gradient-to-b from-blue-800/10 to-blue-900/40 
             backdrop-blur-xl rounded-3xl p-8 border border-blue-600 
             shadow-2xl shadow-blue-400/20 transition-all duration-300 ease-out"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          style={{
            transformStyle: "preserve-3d",
            boxShadow: isHovered
              ? "0 25px 50px -12px rgba(6, 182, 212, 0.4), 0 0 0 1px rgba(6, 182, 212, 0.5)"
              : "0 25px 50px -12px rgba(6, 182, 212, 0.2), 0 0 0 1px rgba(6, 182, 212, 0.3)",
          }}
        >
          {/* Header */}
          <div
            className="relative text-center mb-8"
            style={{ transform: "translateZ(20px)" }}
          >
            <h1 className="text-3xl font-light text-white mb-2 tracking-wide">
              {title}
            </h1>
          </div>

          {/* Avatar */}
          <div
            className="relative flex justify-center mb-8"
            style={{ transform: "translateZ(40px)" }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-2xl blur-lg" />
              <img
                src={avatarUrl}
                alt={`${name}'s avatar`}
                className="relative w-48 h-48 rounded-2xl object-cover shadow-2xl border border-blue-400/30"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/10 via-transparent to-purple-400/10 rounded-2xl" />
            </div>
          </div>

          {/* Bottom Section */}
          <div
            className="relative bg-slate-800/60 rounded-2xl p-4 backdrop-blur-sm border border-slate-700/50"
            style={{ transform: "translateZ(30px)" }}
          >
            <div className="flex items-center justify-between">
              {/* Name */}
              <div className="flex items-center space-x-3">
                <div>
                  <p className="text-white font-medium">{name}</p>
                </div>
              </div>

              {/* Contact Button */}
              <button
                onClick={handleContactClick}
                className="relative bg-slate-600/80 hover:bg-slate-500/80 text-white px-6 py-2 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 border border-slate-500/50 hover:border-blue-400/50 backdrop-blur-sm"
                style={{ transform: "translateZ(10px)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">{contactText}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
