import { motion } from "motion/react";
import { Heart, ArrowUp, Mail, Eye } from "lucide-react";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { RiTwitterXLine } from "react-icons/ri";
import { useState, useEffect } from "react";

const socialLinks = [
  { icon: LuGithub, href: "https://github.com/omkarmodak", label: "GitHub" },
  {
    icon: LuLinkedin,
    href: "https://linkedin.com/in/omkar-modak",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:modakomkar3@gmail.com", label: "Email" },
];

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "AI Expert", href: "#ai-expert" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const [viewers, setViewers] = useState<number | null>(null);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        const isNewSession = !sessionStorage.getItem("visited");
        const endpoint = isNewSession
          ? "https://abacus.jasoncameron.dev/hit/omkarmodak/portfolio"
          : "https://abacus.jasoncameron.dev/get/omkarmodak/portfolio";
          
        const response = await fetch(endpoint);
        const data = await response.json();
        
        if (data && typeof data.value === 'number') {
          setViewers(data.value);
          localStorage.setItem("totalViewers", data.value.toString());
          if (isNewSession) {
            sessionStorage.setItem("visited", "true");
          }
        }
      } catch (error) {
        // Fallback to local storage if API is blocked or fails
        const localViews = localStorage.getItem("totalViewers");
        if (localViews) {
          setViewers(parseInt(localViews, 10));
        } else {
          setViewers(1);
        }
      }
    };

    fetchViews();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 py-12 px-6 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-t from-primary/10 to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-2xl mb-4"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                &lt;OM/&gt;
              </span>
            </h3>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Building scalable systems and innovative solutions. Open to
              exciting opportunities in software engineering.
            </p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span
                className="text-sm text-muted-foreground"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Available for hire
              </span>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4
              className="text-lg mb-4"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Quick Links
            </h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4
              className="text-lg mb-4"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 glass rounded-xl border border-white/10 hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-sm flex items-center gap-2 flex-wrap justify-center"
          >
            <span style={{ fontFamily: "var(--font-mono)" }}>
              © 2026 Omkar Modak
            </span>
            <span className="text-primary hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              Crafted with{" "}
              <Heart className="w-3.5 h-3.5 text-primary fill-primary animate-pulse" />{" "}
              and coffee
            </span>
            <span className="text-primary hidden md:inline">•</span>
            {viewers !== null && (
              <span
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <Eye className="w-3.5 h-3.5 text-accent" />
                <span className="text-accent">
                  {viewers.toLocaleString()}
                </span>{" "}
                viewers
              </span>
            )}
          </motion.div>

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 px-5 py-2.5 glass rounded-xl border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]"
            style={{ fontFamily: "var(--font-mono)" }}
            whileHover={{ y: -2 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-sm text-foreground/70 group-hover:text-primary transition-colors">
              Back to Top
            </span>
            <ArrowUp className="w-4 h-4 text-primary group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
