import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Box, Gamepad2, Cpu } from "lucide-react";

const hobbies = [
  {
    icon: Box,
    title: "3D Printing & Making",
    description:
      "Hardware meets creativity—designing and printing functional prototypes and creative projects",
    gradient: "from-primary via-blue-400 to-accent",
    skills: ["CAD Design", "Prototyping", "Hardware"],
  },
  {
    icon: Gamepad2,
    title: "Strategic Gaming",
    description:
      "Sharpening problem-solving through complex strategy games and competitive challenges",
    gradient: "from-accent via-purple-500 to-pink-500",
    skills: ["Strategy", "Analysis", "Quick Thinking"],
  },
  {
    icon: Cpu,
    title: "Tech Innovation",
    description:
      "Constantly exploring emerging technologies, new frameworks, and cutting-edge development practices",
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    skills: ["Learning", "Research", "Experimentation"],
  },
];

export function Hobbies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="hobbies" className="py-32 px-6" ref={ref}>
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
              Beyond Code
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passions that fuel creativity and problem-solving
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="group glass-strong rounded-3xl p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_80px_rgba(0,240,255,0.15)] hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Decorative gradient orb */}
              <div
                className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${hobby.gradient} opacity-20 rounded-full blur-3xl group-hover:opacity-30 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${hobby.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-[0_0_30px_rgba(0,240,255,0.3)]`}
                >
                  <hobby.icon className="w-10 h-10 text-white" />
                </div>

                {/* Title */}
                <h3
                  className="text-xl mb-4 text-center group-hover:text-primary transition-colors"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {hobby.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 leading-relaxed text-center mb-6">
                  {hobby.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2 justify-center pt-4 border-t border-white/10">
                  {hobby.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 glass rounded-lg text-xs border border-white/10"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional note */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground italic">
            "The best solutions come from diverse experiences—whether it's
            debugging code, designing a 3D model, or strategizing in a game."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
