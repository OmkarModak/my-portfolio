import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "AI Expert", href: "#ai-expert" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-strong shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-2xl hover:text-primary transition-colors relative group"
              style={{ fontFamily: "var(--font-mono)" }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                &lt;OM/&gt;
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-2 text-sm text-foreground/80 hover:text-primary transition-all duration-300 rounded-xl hover:bg-white/5 relative group"
                  style={{ fontFamily: "var(--font-mono)" }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.label}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </motion.button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {/* Hire Me Button */}
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#contact");
                }}
                className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary to-accent rounded-xl hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all duration-300 relative group overflow-hidden"
                style={{ fontFamily: "var(--font-mono)" }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="relative z-10 text-black font-semibold">
                  Hire Me
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 hover:bg-white/5 rounded-xl transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-[72px] left-0 right-0 z-40 md:hidden glass-strong border-b border-white/10 shadow-2xl"
        >
          <div className="px-6 py-6 space-y-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="w-full text-left px-4 py-3 text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-300 rounded-xl"
                style={{ fontFamily: "var(--font-mono)" }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#contact");
              }}
              className="block w-full text-center px-4 py-3 bg-gradient-to-r from-primary to-accent rounded-xl text-black font-semibold mt-4"
              style={{ fontFamily: "var(--font-mono)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              Hire Me
            </motion.a>
          </div>
        </motion.div>
      )}
    </>
  );
}
