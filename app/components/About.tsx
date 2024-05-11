import Tag from "./Tag"


const About = () => {
  return (
    <section className="min-h-screen z-10 bg-slate-900 relative w-screen flex justify-center items-center">



        <section className="flex-1 h-screen bg-center bg-cover" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1576110598658-096ae24cdb97?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'}}></section>


        <section className="flex-1 flex flex-col justify-center items-start p-10">


            <Tag text="ABOUT" id="about" />

            <p className="p-2 w-8/12 text-white text-xl text-opacity-55">Hi! Im Simon, a driven freelancer from Malmö Sweden and the founder of <span className="text-purp">GUSTAVSSON DEV</span>. Making highly efficent <span className="text-white">development and integration available for everyone.</span> My speciality is creating pixel perfect web-applications and turning ideas into reality. </p>
        </section>


    </section>
  )
}

export default About