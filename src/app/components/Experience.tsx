import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Briefcase, TrendingUp } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Luxon Business Services Processing LLP",
    period: "2026 - Present",
    location: "Pune, India",
    type: "Full-time",
    achievements: [
      {
        text: "Gowello Mobile App development using Flutter",
        impact: "Seamless consulting and medical experience",
      },
    ],
  },
  {
    role: "Software Engineer - IT Support",
    company: "Spintly",
    period: "2023 - 2026",
    location: "Goa, India",
    type: "Full-time",
    achievements: [
      {
        text: "Architected enterprise asset management system serving 200+ users with AWS Cognito authentication",
        impact: "80% reduction in asset tracking time",
      },
      {
        text: "Developed Python automation suite for MIS reporting and sales operations",
        impact: "Saved 20+ hours/week of manual work",
      },
      {
        text: "Optimized PostgreSQL queries and database schemas for high-traffic applications",
        impact: "60% improvement in query performance",
      },
      {
        text: "Built diagnostic web dashboards and internal tools using Django",
        impact: "50% decrease in support tickets",
      },
    ],
  },
  {
    role: "Software Engineer",
    company: "Spintly",
    period: "2022 - 2023",
    location: "Goa, India",
    type: "Full-time",
    achievements: [
      {
        text: "Designed and implemented REST APIs using Django framework for smart access control systems",
        impact: "Supporting 10k+ daily active users",
      },
      {
        text: "Developed mobile application with Jetpack Compose for Android",
        impact: null,
      },
      {
        text: "Implemented serverless AWS Lambda functions for real-time event processing",
        impact: "99.9% uptime, 50k+ events/day",
      },
    ],
  },
  {
    role: "Customer Support Intern",
    company: "Spintly",
    period: "2021 - 2022",
    location: "Goa, India",
    type: "Internship",
    achievements: [
      {
        text: "Provided technical support for smart access control systems, analyzing system logs",
        impact: null,
      },
      {
        text: "Identified and documented recurring issues, collaborated with engineering for fixes",
        impact: null,
      },
      {
        text: "Created comprehensive troubleshooting documentation and knowledge base",
        impact: "Improved resolution time by 30%",
      },
      {
        text: "Assisted in testing new features and reporting bugs during development cycles",
        impact: null,
      },
    ],
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
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
              Career Journey
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From intern to engineer—a track record of continuous growth and
            measurable impact
          </p>
        </motion.div>

        <div className="relative">
          {/* Gradient timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-purple-500 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="relative md:pl-24"
              >
                {/* Timeline dot with glow */}
                <div className="absolute left-5 top-8 hidden md:block">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.6)]">
                    <Briefcase className="w-4 h-4 text-black" />
                  </div>
                </div>

                <div className="glass-strong rounded-3xl p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_80px_rgba(0,240,255,0.15)] relative overflow-hidden">
                  {/* Decorative gradient */}
                  <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <h3
                          className="text-2xl md:text-3xl mb-2"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
                          <span className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4 text-primary" />
                            <span className="text-foreground">
                              {exp.company}
                            </span>
                          </span>
                          <span className="text-primary">•</span>
                          <span>{exp.location}</span>
                          <span className="text-primary">•</span>
                          <span className="px-3 py-1 glass rounded-lg text-xs border border-white/10">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                      <div
                        className="px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-xl text-sm"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {exp.period}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-4">
                      {exp.achievements.map((achievement, aIndex) => (
                        <motion.div
                          key={aIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.4,
                            delay: 0.2 * index + 0.1 * aIndex,
                          }}
                          className="flex items-start gap-3"
                        >
                          <span
                            className="text-primary mt-1.5 text-lg flex-shrink-0"
                            style={{ fontFamily: "var(--font-mono)" }}
                          >
                            ▹
                          </span>
                          <div className="flex-1">
                            <p className="text-foreground/90 leading-relaxed">
                              {achievement.text}
                            </p>
                            {achievement.impact && (
                              <div className="flex items-center gap-2 mt-2">
                                <TrendingUp className="w-3.5 h-3.5 text-accent" />
                                <span
                                  className="text-sm text-accent"
                                  style={{ fontFamily: "var(--font-mono)" }}
                                >
                                  {achievement.impact}
                                </span>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
