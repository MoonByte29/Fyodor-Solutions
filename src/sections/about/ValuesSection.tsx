import React, { useEffect } from "react";
import {
  motion,
  useAnimation,
  useMotionValue,
  MotionValue,
  Transition,
} from "motion/react";

interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: "slowDown" | "speedUp" | "pause" | "goBonkers";
  className?: string;
}

interface ValuesProps {
  text?: string;
  className?: string;
  outlineColor?: string;
  outlineWidth?: number;
}

const Values: React.FC<ValuesProps> = ({
  text = "YOUR VALUES",
  className = "",
  outlineColor = "white",
  outlineWidth = 2,
}) => {
  const webkitStrokeWidth = outlineWidth * 0.5;

  return (
    <div className={`min-w-fit flex justify-center items-center ${className}`}>
      <h1
        className={`
          font-black
          text-black
          text-left
          tracking-widest
          uppercase
          select-none
        `}
        style={{
          fontSize: "clamp(2rem, 15vw, 15rem)", // responsive font scaling
          WebkitTextStroke: `${webkitStrokeWidth}px ${outlineColor}`,
          textShadow: `0 0 ${outlineWidth}px ${outlineColor}`,
          width: "100%", // ensures text spans container width
          whiteSpace: "nowrap", // keep text in one line
        }}
      >
        {text}
      </h1>
    </div>
  );
};

const getRotationTransition = (
  duration: number,
  from: number,
  loop: boolean = true
) => ({
  from,
  to: from + 360,
  ease: "linear" as const,
  duration,
  type: "tween" as const,
  repeat: loop ? Infinity : 0,
});

const getTransition = (duration: number, from: number) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: "spring" as const,
    damping: 20,
    stiffness: 300,
  },
});

const CircularText: React.FC<CircularTextProps> = ({
  text,
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation: MotionValue<number> = useMotionValue(0);

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    });
  }, [spinDuration, text, onHover, controls]);

  const handleHoverStart = () => {
    const start = rotation.get();

    if (!onHover) return;

    let transitionConfig: ReturnType<typeof getTransition> | Transition;
    let scaleVal = 1;

    if (onHover) {
      transitionConfig = {
        rotate: { type: "spring", damping: 20, stiffness: 300 },
        scale: { type: "spring", damping: 20, stiffness: 300 },
      };
    }

    controls.start({
      rotate: start + 360,
      scale: scaleVal,
      transition: transitionConfig,
    });
  };

  const handleHoverEnd = () => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    });
  };

  return (
    <motion.div
      className={`relative font-black text-white text-center cursor-pointer origin-center ${className}`}
      style={{
        width: "min(80vw, 400px)",
        height: "min(80vw, 400px)",
        rotate: rotation,
      }}
      initial={{ rotate: 0 }}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {letters.map((letter, i) => {
        const rotationDeg = (360 / letters.length) * i;
        const factor = Math.PI / letters.length;
        const x = factor * i;
        const y = factor * i;
        const transform = `rotateZ(${rotationDeg}deg) translate3d(${x}px, ${y}px, 0)`;

        return (
          <span
            key={i}
            className="absolute inline-block inset-0 text-2xl transition-all duration-500 ease-[cubic-bezier(0,0,0,1)]"
            style={{ transform, WebkitTransform: transform }}
          >
            {letter}
          </span>
        );
      })}
    </motion.div>
  );
};

const ValuesSection = () => {
  return (
    <>
      <div className="flex min-w-full justify-around items-center flex-nowrap overflow-hidden px-16 mb-16">
        <Values
          text="VALUES"
          outlineColor="white"
          outlineWidth={5}
          className=""
        />
        <CircularText
          text="INNOVATION • INTEGRITY • COLLABORATION • EXCELLENCE • RELIABILITY • "
          onHover="pause"
          spinDuration={20}
          className="custom-class"
        />
      </div>
    </>
  );
};

export default ValuesSection;
