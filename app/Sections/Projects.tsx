import Projectdisplay from "../components/Projectdisplay";
import Tag from "../components/Tag";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen w-screen relative bg-slate-900 flex py-10 flex-col justify-start items-center"
    >
      <Tag text="Projects" id="Projects" />

      <h1 className="font-bold text-white text-xl pt-4 lg:text-5xl">
        Check out some of my work
      </h1>

      <Projectdisplay />
      
    </section>
  );
};

export default Projects;
