/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";


interface ProjectCardProps {
    cardsCenterX: number;
 
}
const ProjectCard : React.FC<ProjectCardProps> = ({cardsCenterX}) => {

    const [distanceFromCenter, setDistanceFromCenter] = useState();

    useEffect(() => {
        const updateDistanceFromCenter = () => {
          const centerX = window.innerWidth / 2;
          const distance = Math.abs(centerX - cardsCenterX);
          setDistanceFromCenter(distance);
        };
    
        updateDistanceFromCenter();
    
        const handleResize = () => {
          updateDistanceFromCenter();
        };

    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [cardsCenterX]);


  return (
    <li className="relative aspect-[2/3] w-[clamp(18rem,42vmin,26rem)] overflow-hidden rounded-md">

        <a className="group block h-full w-full rounded-md border border-neutrals-50/30" href="">

        <img className="pointer-events-none absolute inset-0 -z-9 h-full w-full object-cover transition-[transform,opacity,filter] duration-700 group-hover:scale-105 group-focus-visible:scale-105"
            src={"https://images.unsplash.com/photo-1563299796-b729d0af54a5?q=80&w=3850&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            alt="image"
            width={3840}
            height={2160}
            loading="lazy"
            decoding="async"
            style={{objectPosition: "49% center", backgroundColor: "rgb(244, 223, 74)"}} />


            <article className="absolute inset-0 flex flex-col items-center justify-center gap-y-2 bg-neutrals-900/50 p-4 text-center opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">

                <div className="overflow-hidden">
                    <time dateTime="2023-08-01" className="block translate-y-full text-xs uppercase text-neutrals-50/90 transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0"></time>
                </div>
                <div className="overflow-hidden"></div>
                <div className="overflow-hidden"></div>
            </article>

           
        </a>

    </li>
  )
}

export default ProjectCard