import { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { useSelector } from "react-redux";

const Projectdisplay = () => {
  const ulRef = useRef<HTMLUListElement>(null);
  const cardRef = useRef<HTMLLIElement>(null);

  const [scrollProgress, setScrollProgress] = useState(0);

  const projectData = useSelector((state: any) => state.data.data);

  const handleScroll = () => {
    if (ulRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = ulRef.current;
      const scrollProgress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(scrollProgress);
    }
  };

  const handleLeftButtonClick = () => {
    if (cardRef.current)
      ulRef.current?.scrollBy({
        left: -cardRef.current.getBoundingClientRect().width - 24,
        behavior: "smooth",
      });
  };

  const handleRightButtonClick = () => {
    if (cardRef.current)
      ulRef.current?.scrollBy({
        left: cardRef.current.getBoundingClientRect().width + 24,
        behavior: "smooth",
      });
  };

  return (
    <section className="relative py-8 w-screen overflow-hidden">
      <section className="h-[calc(clamp(18rem,42vmin,26rem)*3/2)] touch-none select-none overflow-hidden">
        <ul
          ref={ulRef}
          onScroll={handleScroll}
          className="grid auto-cols-min grid-flow-col scrollbar-hide gap-x-6 overflow-x-auto place-items-center pe-[calc(50vw-(clamp(18rem,42vmin,26rem)+1.5rem)/2)] ps-[calc(50vw-clamp(18rem,42vmin,26rem)/2-7px)]"
        >
          {projectData &&
            projectData.length > 0 &&
            projectData.map((project: any, index: number) => {
              return (
                <ProjectCard
                  key={index}
                  cardRef={cardRef}
                  project={project}
                  ulRef={ulRef}
                />
              );
            })}
        </ul>
      </section>

      <div className="pointer-events-none absolute top-1/2 z-10 flex w-full -translate-y-1/2 justify-between px-4 lg:px-8">
        <button
          aria-label="Scroll left"
          aria-controls="Previous Project"
          onClick={handleLeftButtonClick}
          className="pointer-events-auto aspect-square h-fit rounded-full border border-neutrals-600 bg-neutrals-900/90 p-4 text-neutrals-100 drop-shadow-md backdrop-blur-md disabled:cursor-not-allowed disabled:opacity-50 supports-[backdrop-filter]:bg-neutrals-900/50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        <button
          aria-label="Scroll right"
          aria-controls="Next Project"
          onClick={handleRightButtonClick}
          className="pointer-events-auto aspect-square h-fit rounded-full border border-neutrals-600 bg-neutrals-900/90 p-4 text-neutrals-100 drop-shadow-md backdrop-blur-md disabled:cursor-not-allowed disabled:opacity-50 supports-[backdrop-filter]:bg-neutrals-900/50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      <section className="relative h-[2px] overflow-hidden bg-white mt-6 mx-auto bg-opacity-20 w-10/12">
        <div
          aria-label="Custom Scrollbar"
          className="bg-gradient-radial from-white h-full absolute left-0"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </section>
    </section>
  );
};

export default Projectdisplay;
