import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CorpTalentsLogo } from "@/components/ui/CorpTalentsLogo";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  // Reset scroll state on route change to prevent shrink animation bug
  useEffect(() => {
    setIsScrolled(false);
    setIsHidden(false);
    lastScrollY.current = 0;
  }, [location.pathname]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest > lastScrollY.current ? "down" : "up";
    
    // Hide/show based on scroll direction
    if (direction === "down" && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    
    // Shrink after scrolling 100px
    setIsScrolled(latest > 100);
    lastScrollY.current = latest;
  });

  const isActivePath = (path: string) => location.pathname === path;

  // Smooth spring transition
  const smoothTransition = {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
  };

  return (
    <motion.header
      className="fixed top-0 z-50 w-full flex justify-center pointer-events-none"
      initial={{ y: 0 }}
      animate={{ 
        y: isHidden ? -120 : 0,
        paddingTop: isScrolled ? "12px" : "0px",
        paddingLeft: isScrolled ? "16px" : "0px",
        paddingRight: isScrolled ? "16px" : "0px",
      }}
      transition={smoothTransition}
    >
      <motion.nav 
        className={cn(
          "relative overflow-hidden pointer-events-auto transition-[width]",
          isScrolled 
            ? "bg-white/95 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-slate-200/50 w-auto" 
            : "bg-white border-b border-slate-200 w-full"
        )}
        initial={false}
        animate={{
          borderRadius: isScrolled ? "9999px" : "0px",
        }}
        style={{
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        }}
        transition={smoothTransition}
      >
        {/* Subtle inner glow */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 50%)',
            borderRadius: 'inherit',
          }}
        />
        
        <motion.div 
          className="relative z-10 flex items-center justify-between"
          animate={{
            height: isScrolled ? "52px" : "64px",
            paddingLeft: isScrolled ? "20px" : "40px",
            paddingRight: isScrolled ? "6px" : "40px",
            gap: isScrolled ? "24px" : "32px",
          }}
          transition={smoothTransition}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group flex-shrink-0">
            <motion.div 
              animate={{ scale: isScrolled ? 0.85 : 1 }}
              transition={smoothTransition}
            >
              <CorpTalentsLogo size={isScrolled ? 32 : 38} />
            </motion.div>
            <motion.span 
              className="font-bold hidden sm:inline-block text-slate-900"
              animate={{ fontSize: isScrolled ? "16px" : "18px" }}
              transition={smoothTransition}
            >
              CorpTalents
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden lg:flex items-center"
            animate={{ gap: isScrolled ? "2px" : "4px" }}
            transition={smoothTransition}
          >
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/hiring-strategy", label: "Strategy" },
              { path: "/hiring-plans", label: "Plans" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "relative text-sm font-medium px-3 py-1.5 rounded-full group",
                  isActivePath(item.path) 
                    ? "text-slate-900" 
                    : "text-slate-600 hover:text-slate-900"
                )}
              >
                <motion.span
                  initial={false}
                  whileHover={{ y: -1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  {item.label}
                </motion.span>
                {/* Animated underline */}
                <motion.span 
                  className="absolute bottom-0 left-1/2 h-[2px] bg-slate-900 rounded-full"
                  initial={false}
                  animate={{ 
                    width: isActivePath(item.path) ? "60%" : "0%",
                    x: "-50%"
                  }}
                  whileHover={{ width: "60%" }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                />
              </Link>
            ))}
          </motion.div>

          {/* CTA Button with water droplet arrow effect */}
          <motion.div 
            className="hidden lg:flex items-center"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <Link to="/hire-talent" className="relative flex items-center">
              <motion.div
                className={cn(
                  "relative flex items-center font-semibold text-white",
                  "bg-[rgb(3,106,168)]",
                  "shadow-[0_2px_12px_rgba(3,106,168,0.4)]",
                  isScrolled ? "rounded-full px-5 py-2 text-sm pr-10" : "rounded-full px-6 py-2.5 text-sm pr-12"
                )}
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.02 }
                }}
                transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
              >
                Hire Talent
              </motion.div>
              
              {/* Arrow circle - attached to button, pops out on hover */}
              <motion.div
                className={cn(
                  "absolute top-1/2 flex items-center justify-center rounded-full bg-white text-[rgb(3,106,168)] shadow-[0_2px_10px_rgba(0,0,0,0.15)]",
                  isScrolled ? "w-7 h-7 right-1.5" : "w-8 h-8 right-2"
                )}
                style={{ y: "-50%" }}
                variants={{
                  rest: { 
                    x: 0,
                    scale: 1,
                  },
                  hover: { 
                    x: 16,
                    scale: 1.1,
                  }
                }}
                transition={{ 
                  type: "spring" as const, 
                  stiffness: 500, 
                  damping: 22,
                  mass: 0.5
                }}
              >
                <motion.div
                  variants={{
                    rest: { x: 0 },
                    hover: { x: 1 }
                  }}
                  transition={{ type: "spring" as const, stiffness: 400, damping: 20 }}
                >
                  <ArrowRight className={isScrolled ? "w-3.5 h-3.5" : "w-4 h-4"} />
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-full hover:bg-slate-100"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5 text-slate-800" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5 text-slate-800" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu - Separate floating panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="lg:hidden fixed top-20 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.15)] border border-slate-200/50 overflow-hidden z-40 pointer-events-auto"
          >
            <div className="flex flex-col space-y-1 p-4">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About Us" },
                { path: "/hiring-strategy", label: "Our Hiring Strategy" },
                { path: "/hiring-plans", label: "Hiring Plans" },
              ].map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, type: "spring", stiffness: 300, damping: 25 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block px-4 py-3 text-sm font-medium rounded-2xl transition-colors",
                      isActivePath(item.path) 
                        ? "bg-slate-100 text-slate-900" 
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile CTAs */}
              <motion.div 
                className="pt-3 mt-2 border-t border-slate-100 space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
              >
                <Button 
                  className="w-full bg-[rgb(3,106,168)] hover:bg-[rgb(2,85,135)] text-white rounded-2xl font-semibold shadow-[0_2px_12px_rgba(3,106,168,0.4)]" 
                  asChild
                >
                  <Link to="/hire-talent" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center gap-2">
                    Hire Talent
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button 
                  variant="outline"
                  className="w-full rounded-2xl border-slate-200 text-slate-700 hover:bg-slate-50" 
                  asChild
                >
                  <Link to="/work-with-us" onClick={() => setIsMobileMenuOpen(false)}>
                    Work With Us
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
