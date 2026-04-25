import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Zap, SquareTerminal, Shield, TrendingUp, Award } from "lucide-react";

const highlights = [
  {
    icon: Zap,
    title: "Performance Driven",
    description: "Optimized systems reducing API response times by 60%",
    gradient: "from-primary to-blue-400",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Implemented AWS Cognito & secure authentication flows",
    gradient: "from-blue-400 to-accent",
  },
  {
    icon: SquareTerminal,
    title: "AI Prompt Expertise",
    description: "Zero-shot prompting & other AI tools",
    gradient: "from-accent to-purple-500",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Built systems handling 10k+ daily active users",
    gradient: "from-accent to-purple-500",
  },
  {
    icon: Award,
    title: "Quality Code",
    description: "Maintained 95%+ code coverage with comprehensive testing",
    gradient: "from-purple-500 to-primary",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-7xl mb-6 tracking-tight"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Why Work With Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A problem-solver who transforms complex challenges into elegant,
            scalable solutions
          </p>
        </motion.div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group glass-strong rounded-3xl p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_60px_rgba(0,240,255,0.15)] hover:-translate-y-2"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${highlight.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <highlight.icon className="w-7 h-7 text-white" />
              </div>
              <h3
                className="text-lg mb-2"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {highlight.title}
              </h3>
              <p className="text-sm text-foreground/70">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Main About Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-strong rounded-[2rem] p-8 md:p-12 hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
        >
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />

          <div className="relative z-10 space-y-6 text-foreground/90 text-lg leading-relaxed">
            <p className="text-xl">
              I'm a{" "}
              <span
                className="text-primary font-semibold"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Software Engineer
              </span>{" "}
              with
              <span
                className="text-accent font-semibold"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {" "}
                4+ years of proven experience
              </span>{" "}
              delivering production-ready solutions across backend development,
              cloud infrastructure, and mobile applications.
            </p>

            <p>
              At <span className="text-primary font-semibold">Spintly</span>, I
              evolved from Customer Support Intern to Software Engineer - IT
              Support, gaining deep expertise in{" "}
              <span
                className="text-primary"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Django
              </span>
              ,
              <span
                className="text-primary"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {" "}
                AWS (Lambda, Cognito)
              </span>
              ,
              <span
                className="text-primary"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {" "}
                PostgreSQL
              </span>
              ,
              <span
                className="text-primary"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {" "}
                Network Infrastructure
              </span>
              ,
              <span
                className="text-primary"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {" "}
                Jetpack Compose
              </span>
              , and
              <span
                className="text-primary"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {" "}
                Flutter
              </span>
              . I've architected asset management systems, built diagnostic
              dashboards, and automated critical business workflows.
            </p>

            <div className="grid md:grid-cols-2 gap-6 pt-4">
              <div className="glass rounded-2xl p-6">
                <h4
                  className="text-primary mb-3"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  🎯 Core Strengths
                </h4>
                <ul className="space-y-2 text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    Backend API development with Django & REST
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    Cloud architecture (AWS Lambda, Cognito)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    Database design & optimization (PostgreSQL)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    Cross-platform mobile dev (Flutter, Jetpack Compose)
                  </li>
                </ul>
              </div>

              <div className="glass rounded-2xl p-6">
                <h4
                  className="text-accent mb-3"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  🚀 What I Bring
                </h4>
                <ul className="space-y-2 text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">▹</span>
                    End-to-end project ownership
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">▹</span>
                    Rapid debugging & problem resolution
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">▹</span>
                    Automation mindset (Python scripts for efficiency)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">▹</span>
                    Cross-functional collaboration with sales & support
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <p className="text-center text-xl italic text-foreground/90">
                "I don't just write code—I build systems that solve real
                business problems and scale with your growth."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
