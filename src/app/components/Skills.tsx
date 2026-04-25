import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: 90, color: "from-blue-400 to-blue-600" },
      { name: "JavaScript", level: 80, color: "from-yellow-400 to-yellow-600" },
      { name: "Kotlin", level: 80, color: "from-purple-400 to-purple-600" },
      { name: "Go", level: 50, color: "from-cyan-400 to-cyan-600" },
    ],
  },
  {
    title: "Backend & Cloud",
    skills: [
      { name: "Django", level: 80, color: "from-green-400 to-green-600" },
      { name: "AWS Lambda", level: 80, color: "from-orange-400 to-orange-600" },
      { name: "PostgreSQL", level: 80, color: "from-blue-400 to-indigo-600" },
      { name: "REST APIs", level: 90, color: "from-primary to-accent" },
    ],
  },
  {
    title: "Mobile & Frontend",
    skills: [
      { name: "Flutter", level: 80, color: "from-blue-400 to-blue-600" },
      {
        name: "Jetpack Compose",
        level: 80,
        color: "from-green-400 to-teal-600",
      },
      { name: "React", level: 60, color: "from-cyan-400 to-blue-600" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git", level: 90, color: "from-red-400 to-orange-600" },
      { name: "Jira", level: 60, color: "from-blue-400 to-blue-600" },
      { name: "AWS Cognito", level: 80, color: "from-orange-400 to-red-600" },
      { name: "CI/CD", level: 70, color: "from-primary to-purple-600" },
    ],
  },
];

const expertise = [
  "System Design & Architecture",
  "Database Optimization",
  "API Development",
  "Cloud Solutions",
  "Debugging & Troubleshooting",
  "Automation & Scripting",
  "Performance Optimization",
  "Security Best Practices",
  "Version Control",
  "Networking & Routing",
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6" ref={ref}>
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
              Technical Arsenal
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A versatile tech stack honed through real-world production
            environments
          </p>
        </motion.div>

        {/* Skills with proficiency bars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * categoryIndex }}
              className="glass-strong rounded-3xl p-8 hover:border-primary/30 transition-all duration-500"
            >
              <h3
                className="text-2xl mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.1 * categoryIndex + 0.05 * skillIndex,
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className="text-sm"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.1 * categoryIndex + 0.05 * skillIndex,
                          ease: "easeOut",
                        }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expertise Tags */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-strong rounded-3xl p-8 md:p-12"
        >
          <h3
            className="text-2xl mb-8 text-center"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Areas of Expertise
            </span>
          </h3>

          <div className="flex flex-wrap gap-4 justify-center">
            {expertise.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + 0.05 * index }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="relative px-6 py-3 glass rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 cursor-default">
                  <span
                    className="text-sm"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {item}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
