'use client'


import {AnimatePresence, motion} from 'framer-motion'

import About from "../components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Image from 'next/image';
import Projects from '../components/Projects';
import UserStories from '../components/UserStories';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Pagewrapper from '../components/Pagewrapper';


export default function Home() {
  return (
    <AnimatePresence mode='wait'>
    <Pagewrapper className="z-50 overflow-hidden">
    <main className="flex min-h-screen  flex-col items-center justify-between">


      <motion.section
        initial={{ opacity: 1, display: 'flex', y: 0 }}
        animate={{ y: "-100vh", opacity: 1, display: 'none'}}
        transition={{ duration: 1, delay: 0.3, ease: 'easeInOut' }}
       className='absolute w-screen bg-slate-950 z-50 h-screen top-0 left-0 flex justify-center items-center'>

       <motion.section>
       <Image src="/Logowhite.svg" width={100} height={100} alt='Gustavsson Logo'/>
       </motion.section>

      </motion.section>



      <Hero />
      <About />
      <Projects />
      <UserStories />
      <Services />
      <Contact />
     

    
    </main>
    </Pagewrapper>
    </AnimatePresence>
  );
}
