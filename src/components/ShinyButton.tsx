import React from "react";

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
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative px-6 py-3 rounded-full border border-white/30 overflow-hidden 
        text-white/80 font-semibold transition-all duration-300
        ${disabled ? "opacity-50 cursor-not-allowed" : "hover:scale-105"} ${className}`}
    >
      {/* Shine Layer */}
      <span
        className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
          ${disabled ? "" : "animate-shine"}`}
        style={{
          backgroundSize: "200% 100%",
          animationDuration,
        }}
      />

      {/* Button Text */}
      <span className="relative z-10">{text}</span>
    </button>
  );
};

export default ShinyButton;
