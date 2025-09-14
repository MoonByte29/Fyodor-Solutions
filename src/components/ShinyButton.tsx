import React from "react";
import { motion } from "framer-motion";

interface ShinyButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyButton: React.FC<ShinyButtonProps> = ({
  text,
  onClick,
  disabled = false,
  speed = 3,
  className = "",
}) => {
  const animationDuration = `${speed}s`;

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`relative px-8 py-4 rounded-full border border-white/20 overflow-hidden 
        text-white font-semibold transition-all duration-300 interactive-element
        ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
      whileHover={disabled ? {} : { 
        scale: 1.05, 
        y: -2,
        boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
      }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-violet-600/20 to-blue-600/20 rounded-full" />
      
      {/* Shine Layer */}
      <motion.span
        className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
          ${disabled ? "" : "animate-shine"}`}
        style={{
          backgroundSize: "200% 100%",
          animationDuration,
        }}
        initial={{ x: "-100%" }}
        animate={disabled ? {} : { x: "100%" }}
        transition={{ 
          duration: speed, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />

      {/* Button Text */}
      <span className="relative z-10">{text}</span>
    </motion.button>
  );
};

export default ShinyButton;

