import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard"

const Projectdisplay = () => {

    const [cardsCenterX, setCardsCenterX] = useState(0);

    useEffect(() => {
      const updateCardsCenterX = () => {
        const cardsContainer = document.querySelector('.grid');
        const rect = cardsContainer?.getBoundingClientRect();
        if(rect) {
            const cardsContainerCenterX = rect.left + rect.width / 2;
            setCardsCenterX(cardsContainerCenterX);
        }
      };

      updateCardsCenterX();

      const handleResize = () => {
        updateCardsCenterX();
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);




  return (

    <section className="relative py-8 w-screen">

        <section className="h-[calc(clamp(18rem,42vmin,26rem)*3/2)] touch-none select-none overflow-hidden">

            <ul className="grid auto-cols-min grid-flow-col gap-x-6 overflow-x-auto place-items-center pe-[calc(50vw-(clamp(18rem,42vmin,26rem)+1.5rem)/2)] ps-[calc(50vw-clamp(18rem,42vmin,26rem)/2-7px)]">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </ul>

        </section>


        <div className="pointer-events-none absolute top-1/2 z-10 flex w-full -translate-y-1/2 justify-between px-4 lg:px-8">
            <button className="pointer-events-auto aspect-square h-fit rounded-full border border-neutrals-600 bg-neutrals-900/90 p-4 text-neutrals-100 drop-shadow-md backdrop-blur-md disabled:cursor-not-allowed disabled:opacity-50 supports-[backdrop-filter]:bg-neutrals-900/50">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="size-5"><path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clip-rule="evenodd"></path></svg>
            </button>
            <button className="pointer-events-auto aspect-square h-fit rounded-full border border-neutrals-600 bg-neutrals-900/90 p-4 text-neutrals-100 drop-shadow-md backdrop-blur-md disabled:cursor-not-allowed disabled:opacity-50 supports-[backdrop-filter]:bg-neutrals-900/50">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="size-5"><path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd"></path></svg>
            </button>
        </div>

        <hr className="border-0 h-[1px] bg-gradient-radial from-white w-screen mt-5" />
    </section>
  )
}

export default Projectdisplay