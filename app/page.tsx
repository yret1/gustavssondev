import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col items-center justify-between">
      <Hero />
      <About />
     

    
    </main>
  );
}
