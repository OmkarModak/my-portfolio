import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Hobbies } from "./components/Hobbies";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "../styles/glitch.css";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div className="min-h-screen relative">
      <Toaster position="top-right" />

      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      {/* Content */}
      <div className="page-glitch relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Hobbies />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
