"use client";

import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface MoreProjectCardProps {
  project: any;
}

const MoreProjectCard: React.FC<MoreProjectCardProps> = ({ project }) => {
  const dispatch = useDispatch();

  const router = useRouter();

  const handleProjectClick = (currentProject: any) => {
    dispatch({ type: "SET_SELECTED_PROJECT", payload: currentProject });
  };

  return (
    <>
      {project && (
        <Link
          onClick={() => handleProjectClick(project)}
          href={`/projects/${project.title}`}
          aria-label={`Show ${project.title}`}
          className="relative flex-1 flex-grow rounded-lg border border-slate-200/20 bg-radial-highlight p-4 transition-[transform,filter] duration-300 focus-visible:-translate-y-2 focus-visible:scale-[1.01] focus-visible:drop-shadow-lg md:p-8 md:hover:-translate-y-2 md:hover:scale-[1.01] md:hover:drop-shadow-lg"
        >
          <Image
            src={project.mainImg}
            alt={project.title + "Landing Image"}
            width={3840}
            height={2160}
            className="aspect-video w-full rounded-md object-cover object-center"
          />

          <article className="mt-4 flex flex-col items-center gap-y-2 text-center">
            <time
              className="text-xs uppercase text-slate-200"
              dateTime={project.date}
            >
              {project.date}
            </time>
            <h3 className="text-2xl font-bold md:text-3xl">{project.title}</h3>
            <p className="mb-2 text-xs text-slate-300">{project.type}</p>
            <p className="max-w-prose text-pretty text-base/relaxed text-slate-200">
              {project.description}
            </p>
          </article>
        </Link>
      )}
    </>
  );
};

export default MoreProjectCard;
