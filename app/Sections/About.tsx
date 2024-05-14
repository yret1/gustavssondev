"use client";
import { ReactTyped } from "react-typed";
import Tag from "../components/Tag";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="relative z-10 w-full flex flex-col lg:flex-row bg-slate-900"
    >
      <section className="">
        <Image
          src="/Profile.png"
          loading="lazy"
          className="h-full w-full max-h-screen bg-slate-900 flex-1 object-cover object-center lg:col-start-1 lg:col-end-3"
          alt="Image of Simon Gustavsson, the founder of Gustavsson Dev"
          width={1328}
          height={1770}
          decoding="async"
        />
      </section>

      <section className="w-full flex-1 flex flex-col justify-center items-start py-28 max-lg:mx-auto max-lg:w-11/12 max-lg:max-w-7xl lg:ps-10 xl:ps-20">
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