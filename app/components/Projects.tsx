import Projectdisplay from "./Projectdisplay"
import Tag from "./Tag"


const Projects = () => {






  return (
   <section className="min-h-screen w-screen relative bg-slate-900 flex py-10 flex-col justify-start items-center">

    <Tag text="Projects" id="Projects" />

    <h1 className="font-bold text-white text-xl pt-4 lg:text-5xl">Check out some of my work</h1>

    <select name="projectselect" className="w-40 bg-transparent rounded-full px-2 py-1 border-[1px] border-purp border-opacity-30 m-6 outline-none">

        <option value="">K</option>
        <option value="">Y</option>
        <option value="">S</option>
    </select>


    <Projectdisplay />

   </section>
  )
}

export default Projects