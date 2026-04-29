import { motion } from "framer-motion";

interface LogictiveLogoProps {
  className?: string;
  size?: number;
  animated?: boolean;
}

export const LogictiveLogo = ({ className = "", size = 40, animated = true }: LogictiveLogoProps) => {
  const LogoSvg = (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Back face - darker shade */}
      <path 
        d="M24 4L42 14V34L24 44L6 34V14L24 4Z" 
        fill="hsl(201 97% 30%)"
        opacity="0.3"
      />
      
      {/* Left face */}
      <path 
        d="M6 14L24 24V44L6 34V14Z" 
        fill="hsl(201 97% 37%)"
      />
      
      {/* Right face */}
      <path 
        d="M42 14L24 24V44L42 34V14Z" 
        fill="hsl(201 80% 45%)"
      />
      
      {/* Top face */}
      <path 
        d="M6 14L24 4L42 14L24 24L6 14Z" 
        fill="hsl(201 98% 70%)"
      />
      
      {/* Arrow overlay - pointing right */}
      <path 
        d="M18 19L30 24L18 29V19Z" 
        fill="white"
        opacity="0.9"
      />
      
      {/* Inner arrow detail */}
      <path 
        d="M20 21L26 24L20 27V21Z" 
        fill="hsl(201 97% 37%)"
        opacity="0.6"
      />
    </svg>
  );

  if (!animated) {
    return LogoSvg;
  }

  return (
    <motion.div
      whileHover={{ 
        rotateY: 15,
        rotateX: -10,
        scale: 1.05,
      }}
      transition={{ 
        duration: 0.3,
        ease: "easeOut"
      }}
      style={{ 
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
    >
      {LogoSvg}
    </motion.div>
  );
};