"use client";

import { motion } from "framer-motion";
import About from "./Sections/About";
import Hero from "./Sections/Hero";
import Image from "next/image";
import Projects from "./Sections/Projects";
import UserStories from "./Sections/UserStories";
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col items-center justify-between">
      <motion.section
        initial={{ opacity: 1, display: "flex", y: 0 }}
        animate={{ y: "-100vh", opacity: 1, display: "none" }}
        transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
        className="absolute w-screen bg-slate-950 z-50 h-screen top-0 left-0 flex justify-center items-center"
      >
        <motion.section>
          <Image
            src="/Logowhite.svg"
            width={100}
            height={100}
            alt="Gustavsson Logo"
          />
        </motion.section>
      </motion.section>

      <Hero />
      <About />
      <Projects />
      <UserStories />
      <Services />
      <Contact />
    </main>
  );
}
