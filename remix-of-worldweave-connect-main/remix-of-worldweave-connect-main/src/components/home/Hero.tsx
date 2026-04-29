import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import heroTalentImage from "@/assets/hero-talent-white.jpg";

// Counter animation component
const AnimatedCounter = ({ target, suffix = "" }: { target: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(target.replace(/\D/g, ""));

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [numericValue]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section
      ref={containerRef}
      className="relative isolate min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(201 30% 97%) 50%, hsl(201 40% 95%) 100%)",
      }}
    >
      {/* Soft animated background gradients */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 20%, hsl(201 97% 37% / 0.08) 0%, transparent 60%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 60% 80% at 20% 70%, hsl(201 98% 70% / 0.1) 0%, transparent 50%)",
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 50% 50% at 80% 30%, hsl(201 97% 37% / 0.06) 0%, transparent 50%)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Background Image with smooth fade transition */}
      <motion.div style={{ y: backgroundY, scale: backgroundScale }} className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            backgroundImage: `url(${heroTalentImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center 25%",
          }}
        />
        {/* Smooth gradient overlay for transition */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(0 0% 100% / 0.1) 0%, hsl(0 0% 100% / 0.2) 40%, hsl(0 0% 100% / 0.6) 75%, hsl(201 30% 97%) 100%)",
          }}
        />
        {/* Side fades for smooth horizontal transition */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, hsl(0 0% 100% / 0.6) 0%, transparent 20%, transparent 80%, hsl(0 0% 100% / 0.6) 100%)",
          }}
        />
      </motion.div>

      {/* Subtle animated light sweep */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(105deg, transparent 40%, hsl(201 98% 70% / 0.1) 50%, transparent 60%)",
        }}
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", repeatDelay: 5 }}
      />

      {/* Floating soft shapes */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-[10%] w-64 h-64 rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(201 97% 37% / 0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-[10%] w-80 h-80 rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(201 98% 70% / 0.1) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
          animate={{
            x: [0, -30, 0],
            y: [0, 25, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Subtle floating particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              background: i % 2 === 0 ? "hsl(201 97% 37% / 0.4)" : "hsl(201 98% 60% / 0.3)",
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
              y: [0, -8, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-30 max-w-4xl mx-auto px-6 py-16 text-center"
      >
        <div className="space-y-6 md:space-y-8">
          {/* Headline */}
          <motion.div className="space-y-2">
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              <motion.span
                className="block text-slate-800 drop-shadow-sm"
                initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Global Talent.
              </motion.span>
              <motion.span
                className="block mt-1 drop-shadow-sm text-[rgb(3,106,168)]"
                initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Local Impact.
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Subtext */}
          <motion.p
            className="text-base sm:text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto font-semibold text-black"
            initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Access top-tier IT professionals worldwide fast, compliant, and cost-effective.
          </motion.p>

          {/* Trust indicators with counter animation */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 md:gap-8 pt-6 md:pt-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            {[
              { label: "150", suffix: "+", sublabel: "Countries" },
              { label: "10", suffix: "K+", sublabel: "Professionals" },
              { label: "24", suffix: "/7", sublabel: "Support" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="group text-center"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.15 }}
                whileHover={{ scale: 1.08, y: -8 }}
              >
                <div className="relative inline-block">
                  <motion.div
                    className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(135deg, hsl(201 97% 37% / 0.15) 0%, hsl(201 98% 70% / 0.1) 100%)",
                      filter: "blur(15px)",
                    }}
                  />
                  <div
                    className="relative rounded-2xl px-4 py-3 md:px-8 md:py-6 transition-all duration-500"
                    style={{
                      background: "rgba(255,255,255,0.8)",
                      backdropFilter: "blur(25px)",
                      border: "1px solid rgba(3,106,168,0.15)",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                    }}
                  >
                    <div className="text-2xl md:text-4xl font-bold mb-1 text-[rgb(3,106,168)]">
                      <AnimatedCounter target={stat.label} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs md:text-base font-medium text-slate-600">{stat.sublabel}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 flex justify-center pt-2"
          style={{ borderColor: "hsl(201 50% 60%)" }}
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-3 rounded-full"
            style={{ background: "hsl(201 97% 37%)" }}
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Bottom smooth transition to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-20 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, hsl(201 30% 97%) 100%)",
        }}
      />
    </section>
  );
};
