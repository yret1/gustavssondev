import { ReactTyped, Typed } from "react-typed"
import Tag from "./Tag"


const About = () => {
  return (
    <section className="min-h-screen z-10 bg-slate-900 relative w-screen flex justify-center items-center">



        <section className="flex-1 h-screen bg-center bg-cover py-24" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1576110598658-096ae24cdb97?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'}}></section>


        <section className="flex-1 flex flex-col gap-4 justify-center items-start lg:w-10/12 p-10">


            <Tag text="ABOUT" id="about" />

            <ReactTyped fadeOutClass="" className="p-2 text-4xl" loop backSpeed={40} typeSpeed={50} backDelay={1000} showCursor={true} strings={["Frontend Developer", "Adventurer", "Globetrotter", "Snowboarder", "Diver"]} />

            <p className="p-2 text-white text-xl text-opacity-55">Hi! Im Simon, a driven freelancer from Malmö Sweden and the founder of <span className="text-purp">GUSTAVSSON DEV</span>. Making highly efficent <span className="text-white">development and integration available for everyone.</span> My speciality is creating pixel perfect web-applications and turning ideas into reality. </p>
        </section>


    </section>
  )
}

export default About