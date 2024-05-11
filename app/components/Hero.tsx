'use client'
import Button from "./Button"

const Hero = () => {

  return (
    <section className="h-screen w-screen herobg flex justify-center items-center sticky z-5 inset-0">


        <article className="lg:w-5/12 flex justify-center flex-col gap-4 items-center ">
            <h1 className="font-bold font-sans text-4xl lg:text-8xl text-center ">Bringing Ideas To Life And Turning Dreams To Reality</h1>

            <section className="flex flex-col lg:flex-row gap-5 justify-center items-center">
            <Button text="Enter the matrix" reverse={true} className="px-5 w-full py-5 text-xl rounded-sm" to="" />
            <Button text="See services" className="px-5 py-5 w-full text-xl rounded-sm" to="" />
            </section>
        </article>
    </section>
  )
}

export default Hero