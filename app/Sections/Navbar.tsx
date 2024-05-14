"use client";


import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import Link from "next/link";
const Navbar = () => {

  const [open, setOpen] = useState<boolean>(false);

  const [navbg, setNavbg] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setNavbg(true);
      } else {
        setNavbg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <section aria-label="Navbar" className="w-screen flex fixed top-0 z-50 justify-center items-center h-20">
      <AnimatePresence>
        {open && (
          <motion.section
            className="fixed inset-0 top-10 -z-10 bg-stone-900/90 flex flex-col justify-center backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0, backgroundColor: "rgba(0,0,0,0)" }}
            animate={{ opacity: 1, backgroundColor: "rgba(0,0,0,0.5)" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="border-slate-600 pt-4 bg-stone-900/90 lg:hidden">
              <div className="mx-auto w-11/12 pt-10 max-w-7xl 2xl:w-4/5">
                <nav aria-controls="Mobile Navbar"  className="flex flex-col justify-center divide-y-0.5 divide-slate-600">
                  <Link
                    onClick={handleClick}
                    href="/#about"
                    className="py-4 ps-2 uppercase text-slate-200 transition-[letter-spacing,color] hover:tracking-wider hover:text-slate-50 focus-visible:tracking-wider focus-visible:text-slate-50 font-bold"
                  >
                    ABOUT
                  </Link>

                  <Link
                    onClick={handleClick}
                    href="/#projects"
                    className="py-4 ps-2 uppercase text-slate-200 transition-[letter-spacing,color] hover:tracking-wider hover:text-slate-50 focus-visible:tracking-wider focus-visible:text-slate-50  font-bold"
                  >
                    WORK
                  </Link>

                  <Link
                    onClick={handleClick}
                    href="/#services"
                    className="py-4 ps-2 uppercase text-slate-200 transition-[letter-spacing,color] hover:tracking-wider hover:text-slate-50 focus-visible:tracking-wider focus-visible:text-slate-50  font-bold"
                  >
                    SERVICES
                  </Link>

                  <Link
                    onClick={handleClick}
                    href="/#contact"
                    className="py-4 ps-2 uppercase text-slate-200 transition-[letter-spacing,color] hover:tracking-wider hover:text-slate-50 focus-visible:tracking-wider focus-visible:text-slate-50  font-bold"
                  >
                    CONTACT
                  </Link>
                </nav>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <nav
        aria-label="Navbar"
        className={`flex justify-center backdrop-blur-md items-center px-4 lg:px-8 lg:py-4 py-2 rounded-full w-11/12 transition-all duration-500 lg:w-8/12 ${
          navbg ? "bg-black bg-opacity-45" : "bg-transparent"
        }   `}
      >
        <section
          aria-label="Menu"
          onClick={handleClick}
          className={`w-4/12 flex justify-start h-full items-center gap-2`}
        >
          <section
            onClick={handleClick}
            className={`${
              navbg ? "bg-black bg-opacity-35" : "bg-transparent"
            } h-full flex flex-col justify-center items-center gap-[6px] p-3 rounded-full lg:hidden`}
          >
            <span className="bg-white w-5 h-[1px]"></span>
            <span className="bg-white w-5 h-[1px]"></span>
            <span className="bg-white w-5 h-[1px]"></span>
          </section>

          <section className="hidden lg:flex justify-start items-center gap-4 flex-wrap">
            <a
              className=" border-transparent flex flex-col justify-end items-end h-full group transition-all"
              href="/#about"
            >
              ABOUT
              <hr className="h-[2px] w-full group-hover:bg-gradient-radial from-white bg-transparent border-0" />
            </a>
            <a
              className=" border-transparent flex flex-col justify-end items-end h-full group transition-all"
              href="/#projects"
            >
              WORK
              <hr className="h-[2px] w-full group-hover:bg-gradient-radial from-white bg-transparent border-0" />
            </a>
            <a
              className=" border-transparent flex flex-col justify-end items-end h-full group transition-all"
              href="/#services"
            >
              SERVICES
              <hr className="h-[2px] w-full group-hover:bg-gradient-radial from-white bg-transparent border-0" />
            </a>
          </section>
        </section>

        <section
          aria-label="Gustavsson Development Studio"
          className="w-4/12 flex justify-center font-sans items-center"
        >
          <Link href="/">
            <p className="text-white text-sm text-nowrap md:text-lg">
              <span className="font-bold">GUSTAVSSON</span> DEV
            </p>
          </Link>
        </section>
        <section
          aria-label="Contact button"
          className="w-4/12 flex justify-end items-center"
        >
          <Button
            text="Get In Touch"
            className="rounded-full text-[10px] lg:text-sm px-2 py-1"
            to="/#contact"
          />
        </section>
      </nav>
    </section>
  );
};

export default Navbar;
