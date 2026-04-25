import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, Send, MapPin } from "lucide-react";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import emailjs from "@emailjs/browser";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_d52h21i",
        "template_966hk4t",
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        },
        "eoiKuk7Cjrpv4IEvp",
      )
      .then(
        () => {
          setLoading(false);
          alert("Message sent successfully. I will get back to you soon.");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Failed to send message. Please try again.");
        },
      );
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "modakomkar3@gmail.com",
      href: "mailto:modakomkar3@gmail.com",
      gradient: "from-primary to-blue-400",
    },
    {
      icon: LuLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/omkar-modak",
      href: "https://linkedin.com/in/omkar-modak",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      icon: LuGithub,
      label: "GitHub",
      value: "github.com/omkarmodak",
      href: "https://github.com/omkarmodak",
      gradient: "from-purple-500 to-accent",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Goa, India",
      href: null,
      gradient: "from-accent to-pink-500",
    },
  ];

  return (
    <section id="contact" className="py-32 px-6" ref={ref}>
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
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Open to new opportunities, freelance projects, or just a friendly
            chat about tech
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 glass-strong rounded-3xl p-8 md:p-10 hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
          >
            {/* Decorative gradient */}
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10">
              <h3
                className="text-2xl md:text-3xl mb-2"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Send a Message
              </h3>
              <p className="text-muted-foreground mb-8">
                I'll get back to you within 24 hours
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm mb-2 text-foreground/80"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-5 py-4 glass rounded-2xl border border-white/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground/50"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 text-foreground/80"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-5 py-4 glass rounded-2xl border border-white/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground/50"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm mb-2 text-foreground/80"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={6}
                    className="w-full px-5 py-4 glass rounded-2xl border border-white/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none placeholder:text-muted-foreground/50"
                    placeholder="Tell me about your project or opportunity..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden disabled:opacity-50"
                >
                  <span className="relative z-10 text-black font-semibold">
                    {loading ? "Sending..." : "Send Message"}
                  </span>
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + 0.1 * index }}
                className="group"
              >
                {info.href ? (
                  <a
                    href={info.href}
                    className="flex items-center gap-4 p-6 glass-strong rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,240,255,0.1)] block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                    >
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-muted-foreground mb-1">
                        {info.label}
                      </div>
                      <div
                        className="text-sm group-hover:text-primary transition-colors truncate"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {info.value}
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-6 glass-strong rounded-2xl">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center flex-shrink-0`}
                    >
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-muted-foreground mb-1">
                        {info.label}
                      </div>
                      <div
                        className="text-sm truncate"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {info.value}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="glass-strong rounded-2xl p-6 border-primary/30 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
              <div className="relative z-10">
                <p className="text-foreground/90 leading-relaxed mb-4">
                  <span className="text-primary font-semibold">
                    Currently seeking:
                  </span>{" "}
                  Full-time opportunities in backend development, cloud
                  engineering, or full-stack roles.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-xl text-sm border border-primary/30">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)" }}>
                    Available for hire
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
