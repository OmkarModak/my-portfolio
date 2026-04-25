import { motion } from "motion/react";
import { ArrowRight, Download, MapPin, Briefcase } from "lucide-react";
import { Code2 } from "lucide-react";

export function Hero() {
  const stats = [
    { label: "Years Experience", value: "4+" },
    { label: "Core Projects Delivered", value: "6+" },
    { label: "Technologies", value: "10+" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20">
      {/* Animated gradient orbs - more dynamic */}
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-float" />
      <div
        className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-6 py-3 glass-strong rounded-full mb-8 border border-primary/30"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          <span className="text-sm" style={{ fontFamily: "var(--font-mono)" }}>
            Open to Opportunities
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1
            className="text-6xl md:text-8xl lg:text-9xl mb-6 tracking-tight"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <span className="bg-gradient-to-r from-primary via-blue-400 to-accent bg-clip-text text-transparent">
              Omkaar Modak
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4"
        >
          <p
            className="text-2xl md:text-3xl mb-3"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Software Engineer{" "}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-primary" />
              Backend • Mobile • Cloud • Automation
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-accent" />
              {stats[0].value} Years Experience
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-400" />
              Available for Remote
            </span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-2xl text-foreground/80 mb-4 max-w-3xl mx-auto leading-relaxed"
        >
          Built{" "}
          <span className="text-primary font-semibold">
            scalable backend systems
          </span>
          , <span className="text-accent font-semibold">automation tools</span>,
          and
          <span className="text-blue-400 font-semibold">
            {" "}
            modern mobile applications
          </span>{" "}
          that solve real-world problems.
        </motion.p>

        <p className="text-sm text-muted-foreground mb-12">
          AWS • PostgreSQL • REST APIs • System Design
        </p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-strong rounded-2xl px-8 py-4 hover:border-primary/50 transition-all duration-300"
            >
              <div
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-2xl hover:shadow-[0_0_50px_rgba(0,240,255,0.5)] transition-all duration-300 flex items-center gap-2 overflow-hidden"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <span className="relative z-10 text-black font-semibold">
              Let's Talk
            </span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10 text-black" />
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 glass-strong rounded-2xl hover:border-primary/50 transition-all duration-300 flex items-center gap-2"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            View Projects
          </button>

          <button
            onClick={() => window.open("/resume.pdf", "_blank")}
            className="px-8 py-4 glass rounded-2xl hover:border-accent/50 transition-all duration-300 flex items-center gap-2"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <Download className="w-5 h-5" />
            Resume
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24"
        >
          <div className="inline-flex flex-col items-center gap-2">
            <span
              className="text-xs text-muted-foreground"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Scroll to explore
            </span>
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2 animate-bounce">
              <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
