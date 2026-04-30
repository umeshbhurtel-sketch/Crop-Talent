import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import cropLogoFull from "@/assets/icons/Crop_logo_2.png";

const O  = "hsl(20 96% 54%)";   // orange
const N  = "hsl(225 49% 13%)";  // navy
const BD = "hsl(210 22% 33%)";  // body text
const OT = "hsl(20 100% 97%)";  // orange tint
const BR = "hsl(220 13% 91%)";  // border

const NAV = [
  { label: "Services",      href: "/services" },
  { label: "About",         href: "/about" },
  { label: "How It Works",  href: "/how-it-works" },
  { label: "Contact",       href: "/contact" },
];

export default function CorpTalentsHeader() {
  const [isOpen,     setIsOpen]     = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile drawer on navigation
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const active = (href: string) => location.pathname === href;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">

          {/* ── Logo ──────────────────────────────────────────────── */}
          <Link to="/" className="flex items-center group">
            <img
              src={cropLogoFull}
              alt="CorpTalents"
              className="h-16 w-auto transition-opacity group-hover:opacity-90"
            />
          </Link>

          {/* ── Desktop Nav ───────────────────────────────────────── */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {NAV.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="relative px-4 py-2 text-sm font-medium rounded-lg transition-colors"
                style={{ color: active(item.href) ? O : BD }}
              >
                {item.label}
                {active(item.href) && (
                  <motion.span
                    layoutId="navUnderline"
                    className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-5 rounded-full"
                    style={{ backgroundColor: O }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* ── Desktop CTA ───────────────────────────────────────── */}
          <div className="hidden md:block">
            <Link
              to="/hire-talent-intake"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
              style={{ backgroundColor: O }}
            >
              Hire Talent
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* ── Mobile Toggle ─────────────────────────────────────── */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div key="x"
                  initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}
                >
                  <X className="w-6 h-6" style={{ color: N }} />
                </motion.div>
              ) : (
                <motion.div key="menu"
                  initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}
                >
                  <Menu className="w-6 h-6" style={{ color: N }} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* ── Mobile Drawer ─────────────────────────────────────────── */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              id="mobile-nav"
              key="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
              aria-label="Mobile navigation"
            >
              <div className="pt-4 pb-2 space-y-1 border-t mt-4" style={{ borderColor: BR }}>
                {NAV.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                  >
                    <Link
                      to={item.href}
                      className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors"
                      style={{
                        color: active(item.href) ? O : BD,
                        backgroundColor: active(item.href) ? OT : "transparent",
                      }}
                    >
                      {item.label}
                      {active(item.href) && (
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: O }} />
                      )}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: NAV.length * 0.05, duration: 0.2 }}
                  className="pt-2"
                >
                  <Link
                    to="/hire-talent-intake"
                    className="flex items-center justify-center gap-2 w-full py-3 text-sm text-white font-semibold rounded-xl transition-opacity hover:opacity-90"
                    style={{ backgroundColor: O }}
                  >
                    Hire Talent
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
