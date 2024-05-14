import { ReactTyped } from "react-typed"
import Tag from "./Tag"


const About = () => {
  return (
    <section id="about" className="min-h-screen md:flex-row z-10 bg-slate-900 relative w-screen flex flex-col justify-center items-center border-b-[1px] border-opacity-15 border-white">



        <section className="flex-1 w-full min-h-[60vh] md:h-screen bg-bottom bg-contain bg-no-repeat py-24" style={{backgroundImage: 'url("/Profile.png")'}}></section>


        <section className="flex-1 flex flex-col gap-4 justify-center min-h-96 items-start lg:w-10/12 p-10">


            <Tag text="ABOUT" id="about" />

            <ReactTyped fadeOutClass="" className="p-2 text-4xl font-sans font-bold" loop backSpeed={40} typeSpeed={50} backDelay={1000} showCursor={true} strings={["Frontend Developer", "Adventurer", "Globetrotter", "Snowboarder", "Diver"]} />

            <p className="p-2 text-white text-xl text-opacity-55">Hi! Im Simon, a driven freelancer from Malmö Sweden and the founder of <span className="text-purp">GUSTAVSSON DEV</span>. Making highly efficent <span className="text-white">development and integration available for everyone.</span> My speciality is creating pixel perfect web-applications and turning ideas into reality. </p>
        </section>


    </section>
  )
}

export default About