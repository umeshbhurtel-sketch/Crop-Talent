import React from "react";
import { motion } from "framer-motion";
import { Award, Shield, TrendingUp, CheckCircle2 } from "lucide-react";

const O  = "hsl(20 96% 54%)";
const N  = "hsl(225 49% 13%)";
const BD = "hsl(210 22% 33%)";

/*
 * TODO (production): Download these logos to /public/clients/ and replace
 * the src values with local paths (e.g. "/clients/arenite.png") to avoid
 * hot-linking from corptalents.ca.
 *
 * URLs to download:
 *   Arenite  → http://corptalents.ca/wp-content/uploads/2018/10/logo-1-1.png
 *   Oliver's → http://corptalents.ca/wp-content/uploads/2019/03/logo.jpg
 *   Iconic   → http://arenite.mdevtech.com/new_mdevtech/wp-content/uploads/2018/12/iconic.jpg
 *   Jumpman  → http://corptalents.ca/wp-content/uploads/2019/03/jumpmangrey.png
 *   BVS      → http://corptalents.ca/wp-content/uploads/2019/03/logobvs.png
 *   Cadillac → http://corptalents.ca/wp-content/uploads/2019/03/cadillac22.png
 */
const trustBadges = [
  { icon: Award,        label: "ISO Certified", description: "Industry-leading compliance standards" },
  { icon: Shield,       label: "Data Secure",   description: "Enterprise-grade security & encryption" },
  { icon: TrendingUp,   label: "98% Success",   description: "98% hiring success rate" },
  { icon: CheckCircle2, label: "24/7 Support",  description: "24/7 dedicated customer support" },
];

const clients = [
  {
    name: "Arenite Group",
    logo: "http://corptalents.ca/wp-content/uploads/2018/10/logo-1-1.png",
  },
  {
    name: "Oliver's",
    logo: "http://corptalents.ca/wp-content/uploads/2019/03/logo.jpg",
  },
  {
    name: "Iconic",
    logo: "http://arenite.mdevtech.com/new_mdevtech/wp-content/uploads/2018/12/iconic.jpg",
  },
  {
    name: "Jumpman",
    logo: "http://corptalents.ca/wp-content/uploads/2019/03/jumpmangrey.png",
  },
  {
    name: "BVS",
    logo: "http://corptalents.ca/wp-content/uploads/2019/03/logobvs.png",
  },
  {
    name: "Cadillac",
    logo: "http://corptalents.ca/wp-content/uploads/2019/03/cadillac22.png",
  },
];

export default function CorpTalentsClients() {
  return (
    <section className="py-24" style={{ backgroundColor: "hsl(20 100% 97%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ backgroundColor: "hsl(0 0% 100%)" }}
          >
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: O }} />
            <span className="text-sm font-semibold" style={{ color: O }}>
              OUR CLIENTS
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: N }}>
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: BD }}>
            From global enterprises to ambitious startups, we deliver exceptional talent to
            companies that demand excellence.
          </p>
        </motion.div>

        {/* Logo grid — 6 columns desktop, 2 columns mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, idx) => (
            <LogoCard key={idx} client={client} delay={idx * 0.1} />
          ))}
        </div>

        {/* Trust indicators */}
        <div
          className="mt-20 pt-16 border-t"
          style={{ borderTopColor: "hsl(220 13% 91%)" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4" style={{ color: N }}>
              Trusted by Global Companies
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: BD }}>
              CorpTalents is backed by industry leaders and certified across compliance standards
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {trustBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={idx}
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center border"
                  style={{ borderColor: "hsl(220 13% 91%)" }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: "hsl(20 100% 97%)" }}
                  >
                    <Icon className="w-6 h-6" style={{ color: O }} />
                  </div>
                  <h3 className="font-bold mb-1" style={{ color: N }}>{badge.label}</h3>
                  <p className="text-sm" style={{ color: BD }}>{badge.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

function LogoCard({ client, delay }: { client: { name: string; logo: string }; delay: number }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -6 }}
      className="relative rounded-2xl bg-white border flex items-center justify-center p-6 overflow-hidden cursor-default"
      style={{
        border: `1px solid ${hovered ? "hsl(20 96% 54% / 0.35)" : "hsl(220 13% 91%)"}`,
        boxShadow: hovered
          ? "0 16px 32px rgba(15,23,42,0.12)"
          : "0 2px 8px rgba(15,23,42,0.06)",
        transition: "border-color 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Orange bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 transition-opacity duration-300"
        style={{ backgroundColor: O, opacity: hovered ? 1 : 0 }}
      />

      <img
        src={client.logo}
        alt={client.name}
        loading="lazy"
        className="h-12 w-full object-contain transition-all duration-300"
        style={{ filter: hovered ? "none" : "grayscale(100%)" }}
      />
    </motion.div>
  );
}
