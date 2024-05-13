import Image from "next/image";
import { useEffect } from "react"


const Footer = () => {



    const currentYear = new Date().getFullYear();




  return (
    <footer className="w-screen bg-slate-900">

         
            <section className="flex justify-center items-center p-4">
                <a href="/#"><Image src={"/Logowhite.svg"} width={80} height={80} alt="Company logo" /></a>
            </section>

            <hr className="mx-auto w-8/12 border-none mt-2 mb-2 h-[1px] bg-gradient-radial from-white bg-opacity-45" />

            <section className="footer__links">

            <ul className="flex justify-center items-center p-8 gap-4">
               <a className="text-white text-opacity-40 hover:text-opacity-100 cursor-pointer transition-all" href="/#about"><li>ABOUT</li></a>
               <a className="text-white text-opacity-40 hover:text-opacity-100 cursor-pointer transition-all" href="/#projects"><li>WORK</li></a>
               <a className="text-white text-opacity-40 hover:text-opacity-100 cursor-pointer transition-all" href="/#reviews"><li>USER REVIEWS</li></a>
               <a className="text-white text-opacity-40 hover:text-opacity-100 cursor-pointer transition-all" href="/#services"><li>SERVICES</li></a>
               <a className="text-white text-opacity-40 hover:text-opacity-100 cursor-pointer transition-all" href="/#contact"><li>CONTACT</li></a>
               <a className="text-white text-opacity-40 hover:text-opacity-100 cursor-pointer transition-all" href="/#contact"><li>BEHIND THE SCENES</li></a>
            
            </ul>
            </section>

            <hr className="mx-auto w-8/12 border-none h-[1px] mt-2 mb-2 bg-gradient-radial from-white bg-opacity-45" />
            <section className="footer__foot">

                <div className="textbox">
                <p>© {currentYear} Simon Gustavsson</p>
                </div>
                <div className="textbox">
                
                </div>
                <div className="textbox">
                    <p>{"Enjoy your stay ;)"}</p>
                </div>
            </section>
    </footer>
  )
}

export default Footer