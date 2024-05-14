"use client";
import { ReactTyped } from "react-typed";
import Tag from "../components/Tag";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen md:flex-row z-10 bg-slate-900 relative w-screen flex flex-col justify-center items-center border-b-[1px] border-opacity-15 border-white"
    >
      <section className="flex min-h-screen w-full items-center max-lg:flex-col lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,min(91.666667%/2,40rem))_minmax(0,min(91.666667%/2,40rem))_minmax(0,1fr)] xl:grid-cols-[minmax(0,1fr)_minmax(0,min(80%/2,40rem))_minmax(0,min(80%/2,40rem))_minmax(0,1fr)]">
        <Image
          src="/Profile.png"
          loading="lazy"
          className="h-full w-full max-h-screen bg-neutrals-800 object-cover object-center lg:col-start-1 lg:col-end-3"
          alt="Image of Simon Gustavsson, the founder of Gustavsson Dev"
          width={1328}
          height={1770}
          decoding="async"
        />
      </section>

      <section className="w-full flex flex-col justify-start items-start py-28 max-lg:mx-auto max-lg:w-11/12 max-lg:max-w-7xl lg:ps-10 xl:ps-20">
        <Tag text="ABOUT" id="about" />

        <ReactTyped
          fadeOutClass=""
          className="p-2 text-4xl font-sans font-bold"
          loop
          backSpeed={40}
          typeSpeed={50}
          backDelay={1000}
          showCursor={true}
          strings={[
            "Frontend Developer",
            "Adventurer",
            "Globetrotter",
            "Snowboarder",
            "Diver",
          ]}
        />

        <p className="p-2 text-white text-xl text-opacity-55">
          Hi! Im Simon, a driven freelancer from Malmö Sweden and the founder of{" "}
          <span className="text-purp">GUSTAVSSON DEV</span>. Making highly
          efficent{" "}
          <span className="text-white">
            development and integration available for everyone.
          </span>{" "}
          My speciality is creating pixel perfect web-applications and turning
          ideas into reality.{" "}
        </p>
      </section>
    </section>
  );
};

export default About;
