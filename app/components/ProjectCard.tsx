/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useEffect, useRef, useState } from "react";


type Project = {
  _id: string;
  title: string;
  date: string;
  type: string;
  description: string;
  mainImg: string;
  projectImages: [];
  liveLink: string;
  codeLink: string;

}


interface ProjectCardProps {
    ulRef: React.RefObject<HTMLUListElement>;
    cardRef: React.RefObject<HTMLLIElement>;
    project: Project;

}
const ProjectCard : React.FC<ProjectCardProps> = ({ ulRef, cardRef, project}) => {


  const [distanceFromCenter, setDistanceFromCenter] = useState(0);
  const itemRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const updateDistanceFromCenter = () => {
      requestAnimationFrame(() => {
        const rect = itemRef.current?.getBoundingClientRect();
        if (rect) {
          const itemLeft = rect.left;
          const itemWidth = rect.width;
          // Normalize distance to a percentage of the window width
          let normalizedDistance = ((itemLeft + itemWidth + 200) / (window.innerWidth + itemWidth + 200)) * 100;
          normalizedDistance = Math.max(0, Math.min(normalizedDistance, 100));
          setDistanceFromCenter(normalizedDistance);
        }
      });
    };
  
    updateDistanceFromCenter();
  
    const handleScroll = () => {
      updateDistanceFromCenter();
    };
  
    ulRef.current?.addEventListener('scroll', handleScroll);
  
    return () => {
      ulRef.current?.removeEventListener('scroll', handleScroll);
    };
  }, [ulRef,itemRef]);


  const setMultipleRefs = (...refs: (React.MutableRefObject<any> | ((instance: HTMLLIElement | null) => void))[]) => {
    return (value: HTMLLIElement) => {
      refs.forEach(ref => {
        if (typeof ref === 'function') {
          ref(value);
        } else if (ref && 'current' in ref) {
          ref.current = value;
        }
      });
    };
  };


  return (
    <li ref={setMultipleRefs(itemRef, cardRef)} className="relative aspect-[2/3] w-[clamp(18rem,42vmin,26rem)] overflow-hidden rounded-md">

        <Link className="group block h-full w-full rounded-md border border-neutrals-50/30" href={`/projects/${project.title}`}>

        <img className="pointer-events-none absolute inset-0 -z-9 h-full w-full object-cover transition-[transform,opacity,filter] duration-700 group-hover:scale-105 group-focus-visible:scale-105"
            src={project.mainImg}
            alt="image"
            width={3840}
            height={2160}
            loading="lazy"
            decoding="async"
            style={{objectPosition: `${distanceFromCenter}% center`, backgroundColor: "rgb(244, 223, 74)"}} />


            <article className="absolute inset-0 flex flex-col items-center justify-center gap-y-2 bg-neutrals-900/50 p-4 text-center opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">

                <div className="overflow-hidden">
                    <time dateTime={project.date} className="block translate-y-full text-xs uppercase text-neutrals-50/90 transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0">{project.date}</time>
                </div>
                <div className="overflow-hidden">
                  <h3 className="translate-y-full text-2xl font-bold transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0 lg:text-4xl">{project.title}</h3>
                  </div>
                <div className="overflow-hidden">
                  <p className="translate-y-full text-xs text-neutrals-50/90 transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0 lg:text-sm">{project.type}</p>
                </div>
            </article>

           
        </Link>

    </li>
  )
}

export default ProjectCard