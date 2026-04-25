import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, TrendingUp } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Enterprise Asset Management System",
    description:
      "Full-stack asset tracking platform with real-time inventory management, role-based access control, and comprehensive analytics dashboard.",
    impact: "Reduced asset tracking time by 80% • Serving 200+ users",
    tech: [
      "AWS Cognito",
      "Jetpack Compose",
      "PostgreSQL",
      "Kotlin",
      "REST API",
    ],
    featured: true,
  },
  {
    title: "Support Diagnostics Platform",
    description:
      "Real-time monitoring and troubleshooting web dashboard for IoT access control devices with device updates and real-time alerts.",
    impact: "Decreased support tickets by 35% • 10k+ devices monitored",
    tech: ["Chalice", "PostgreSQL", "HTML/CSS/JS", "REST API", "Chart.js"],
    featured: true,
  },
  {
    title: "Test Analytics Dashboard",
    description:
      "Interactive QA dashboard with advanced filtering, pagination, and export capabilities for viewing test execution data and generating reports.",
    impact: "Improved QA efficiency by 45% • Processing 1M+ test records",
    tech: ["Vanilla JS", "Python", "PostgreSQL", "REST API"],
    featured: false,
  },
  {
    title: "Mobile Site Survey Application",
    description:
      "Offline-first mobile app for conducting on-site surveys with custom database design, photo capture, and seamless cloud synchronization.",
    impact: "Enabled offline operations • 200+ surveys completed",
    tech: ["Flutter", "SQLite", "Firebase", "Google Maps API"],
    featured: false,
  },
  {
    title: "Automated MIS Reporting Suite",
    description:
      "Python automation framework generating daily sales reports, data analysis, and workflow automation reducing manual effort.",
    impact: "Saved 20+ hours/week • Automated 15+ reports",
    tech: ["Python", "Pandas", "PostgreSQL", "CRON", "Email API"],
    featured: false,
  },
  {
    title: "AWS Lambda Access Control Integration",
    description:
      "Serverless backend integration for smart access control with real-time event processing, logging, and notification systems.",
    impact: "99.9% uptime • Processing 50k+ events daily",
    tech: ["AWS Lambda", "Python", "DynamoDB", "API Gateway", "CloudWatch"],
    featured: true,
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6" ref={ref}>
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
              Featured Work
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Production-ready solutions delivering measurable business impact
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Featured Projects - Large Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects
              .filter((p) => p.featured)
              .slice(0, 2)
              .map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="group glass-strong rounded-3xl p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_80px_rgba(0,240,255,0.2)] hover:-translate-y-2 flex flex-col relative overflow-hidden"
                >
                  {/* Featured badge */}
                  <div className="absolute top-4 right-4 px-4 py-1.5 bg-gradient-to-r from-primary to-accent rounded-full text-xs font-semibold text-black">
                    FEATURED
                  </div>

                  {/* Decorative gradient */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />

                  <div className="relative z-10 flex-1">
                    <h3
                      className="text-2xl mb-4 group-hover:text-primary transition-colors"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {project.title}
                    </h3>

                    <p className="text-foreground/80 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Impact metrics */}
                    <div className="flex items-center gap-2 mb-6 px-4 py-3 glass rounded-xl border border-primary/20">
                      <TrendingUp className="w-4 h-4 text-primary flex-shrink-0" />
                      <p
                        className="text-sm text-primary"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {project.impact}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 glass rounded-lg text-xs border border-white/10"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Other Projects - Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((p) => !p.featured || projects.indexOf(p) >= 2)
              .map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + 0.1 * index }}
                  className="group glass-strong rounded-3xl p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_60px_rgba(0,240,255,0.15)] hover:-translate-y-2 flex flex-col"
                >
                  <div className="flex-1">
                    <h3
                      className="text-lg mb-3 group-hover:text-primary transition-colors"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {project.title}
                    </h3>

                    <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Impact metrics */}
                    {project.impact && (
                      <div className="flex items-start gap-2 mb-4 px-3 py-2 glass rounded-lg border border-primary/20">
                        <TrendingUp className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                        <p
                          className="text-xs text-primary"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          {project.impact}
                        </p>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2.5 py-1 glass rounded-lg text-xs border border-white/10"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2.5 py-1 text-xs text-muted-foreground">
                          +{project.tech.length - 3}
                        </span>
                      )}
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
