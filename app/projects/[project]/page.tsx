/* eslint-disable @next/next/no-img-element */

// This page renders dynamicaly depending on what project the user has selected. Projects are grabbed from MongoDB.

"use client";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

import { AnimatePresence, motion } from "framer-motion";
import Tag from "@/components/Tag";
import { useEffect, useState } from "react";
import MoreProjectCard from "@/components/MoreProjectCard";
import Pagewrapper from "@/components/Pagewrapper";

const ProjectPage = () => {
  // Get the selected project from the redux store
  const currentProject = useSelector(
    (state: any) => state.data.selectedProject
  );

  // Get all projects from the redux store
  const allProjects = useSelector((state: any) => state.data.data);

  // Used to find the index of the current project in the allProjects array
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);

  // Used to get more recommended projects at the bottom of the page
  const [firstReco, setFirstReco] = useState<number>(0);
  const [secondReco, setSecondReco] = useState<number>(0);

  // Used to format the date
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    //Update indexies when the current project changes

    if (currentProject) {
      const index = allProjects.findIndex(
        (project: any) => project._id === currentProject._id
      );
      setCurrentProjectIndex(index);

      if (index === allProjects.length - 2) {
        setFirstReco(0);
        setSecondReco(1);
      } else if (index === allProjects.length - 1) {
        setFirstReco(1);
        setSecondReco(2);
      } else {
        setFirstReco(index + 1);
        setSecondReco(index + 2);
      }
    } else {
      setCurrentProjectIndex(0);
    }
  }, [currentProject, allProjects]);

  useEffect(() => {
    // Turn date from string to a readable format ex 2022-01-01 to January 2022

    const date = new Date(currentProject.date);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
    };
    setDate(date.toLocaleDateString("en-US", options));
  }, [currentProject.date]);

  return (
    //Might remove, Idea was to create fading exitanimations. Doesnt work as of now... //
    <AnimatePresence mode="wait">
      <Pagewrapper className="z-50">
        {currentProject && (
          <section className="bg-slate-900 w-screen min-h-screen">
            {/* 

        Motion from framer motion, adding animation powers to normal elements.
        This one is a loadingcover when the user goes to the project page.
        
        */}

            <motion.section
              initial={{ opacity: 1, display: "flex", y: 0 }}
              animate={{ y: "-100vh", opacity: 1, display: "none" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-screen h-screen absolute z-50 bg-slate-950 flex justify-center items-center"
            >
              <Image
                src="/Logowhite.svg"
                width={100}
                height={100}
                alt="Gustavsson Logo"
              />
            </motion.section>

            <section className="relative flex min-h-screen w-full bg-slate-900 py-[14vh] after:absolute after:inset-0 after:h-full after:w-full after:bg-gradient-to-t after:from-slate-900 after:to-slate-900/60 object-cover ">
              <Image
                src={currentProject.mainImg}
                className="absolute inset-0 h-full w-full object-cover object-top"
                alt={currentProject.titel + " main image"}
                loading="eager"
                layout="fill"
              />

              {/*Details of the project, Could i have turned this into a compononent? yes. Did i? no :) */}

              <div className="mx-auto w-11/12 max-w-7xl 2xl:w-4/5">
                <div className="relative z-10 flex h-full flex-col justify-end">
                  <Link
                    href="/#projects"
                    className="group absolute start-0 top-0 flex items-center justify-center transition-opacity hover:opacity-80 focus-visible:opacity-80"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="me-2 size-6 transition-transform duration-300 group-hover:-translate-x-1 group-focus-visible:-translate-x-1 lg:h-7 lg:w-7"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Back to projects
                  </Link>

                  <time dateTime={currentProject.date}>{date}</time>
                  <h1 className="mb-4 text-balance text-4xl font-bold lg:text-6xl">
                    {currentProject.title}
                  </h1>
                  <p className="mb-8 max-w-prose text-pretty text-sm/relaxed text-slate-50/90 md:text-base/relaxed">
                    {currentProject.description}
                  </p>
                  <p className="text-xs text-slate-50/90 lg:text-sm">
                    {currentProject.type}
                  </p>
                  <hr className="mb-8 mt-4 h-px border-0 bg-gradient-to-r from-slate-50/40 to-transparent" />
                  <div className="flex gap-x-4">
                    <a
                      href={currentProject.liveLink}
                      className="relative isolate flex justify-center items-center select-none overflow-hidden rounded-sm border align-middle transition-all duration-500 before:absolute before:-start-3 before:top-0 before:-z-10 before:h-full before:w-[calc(100%+1.5rem)] before:origin-left before:-skew-x-[16deg] before:scale-x-0 before:transition-transform before:duration-500 hover:[&:not(:disabled)]:before:scale-x-100 focus-visible:[&:not(:disabled)]:before:scale-x-100 active:[&:not(:disabled)]:scale-[1.01] disabled:opacity-70 border-slate-50 px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base bg-slate-50 hover:[&:not(:disabled)]:text-slate-50 focus-visible:text-slate-50 text-slate-900 before:bg-slate-900"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                        className="size-5 me-2"
                      >
                        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                        <path
                          fillRule="evenodd"
                          d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      View Project
                    </a>
                  </div>
                </div>

                <a
                  href="#project_display"
                  className="absolute inset-x-0 bottom-[3vh] z-10 mx-auto w-fit animate-bounce"
                  title="Project details"
                  aria-label="Project Details"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="size-9"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </section>

            <section id="project_display" className="bg-slate-900">
              {/*Loop Images from database*/}

              <section className="mx-auto max-w-7xl">
                {currentProject.projectImages &&
                  currentProject.projectImages.length > 0 &&
                  currentProject.projectImages.map(
                    (image: any, index: number) => {
                      return (
                        <Image
                          key={index + 64}
                          className="w-full bg-slate-950"
                          width={1280}
                          height={890}
                          loading="lazy"
                          src={image}
                          alt="Project Roadmap image"
                        />
                      );
                    }
                  )}
              </section>
            </section>

            <section className="relative z-10 w-full bg-slate-900 py-32 flex flex-col justify-center after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:mx-auto after:h-full after:w-full after:max-w-7xl after:bg-[radial-gradient(40%_36%_at_50%_0%,rgba(105,25,255,0.04)_0%,rgba(105,25,255,0)_100%,rgba(105,25,255,0)_100%),radial-gradient(32%_20%_at_50%_32%,rgba(105,25,255,0.08)_0%,rgba(105,25,255,0)_100%)] min-h-full">
              {/*Render two other projects*/}

              <section className="mx-auto w-11/12 max-w-7xl 2xl:w-4/5">
                <section className="flex flex-col items-center justify-center text-center">
                  <Tag text="Similar Creations" id="Similar" />
                  <h2 className="mb-4 text-balance text-3xl/tight font-bold text-slate-50 md:text-5xl/tight">
                    Check out more of my work
                  </h2>

                  <section className="mt-4 flex gap-4 max-md:flex-col">
                    <MoreProjectCard project={allProjects[firstReco]} />
                    <MoreProjectCard project={allProjects[secondReco]} />
                  </section>
                </section>
              </section>
            </section>

            <Link
              className="group mt-8 inline-flex items-center justify-center text-lg transition-colors duration-300 hover:text-purp focus-visible:text-purp"
              href={"/#projects"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="me-2 size-6 transition-transform duration-300 group-hover:-translate-x-1 group-focus-visible:-translate-x-1 lg:h-7 lg:w-7"
              >
                <path
                  fillRule="evenodd"
                  d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Back to projects
            </Link>
          </section>
        )}
      </Pagewrapper>
    </AnimatePresence>
  );
};

export default ProjectPage;
