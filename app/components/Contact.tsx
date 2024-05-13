import { FormEvent, useState } from "react";
import Tag from "./Tag";


const Contact = () => {



    const [result, setResult] = useState<string>("Send Message");


    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");


    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult("Sending....");
        const formData = new FormData(e.currentTarget);

        const key= process.env.NEXT_PUBLIC_WEB_KEY

        formData.append("access_key", `${key}`);
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
            setResult("Form Submitted Successfully");
            setName("");
            setEmail("");
            setMessage("");


            setTimeout(() => {
                setResult("Send Message");
            },2000)
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
  return (


    <section id="contact" className="w-screen relative flex flex-col lg:flex-row bg-slate-900">


        <section className="flex-1 flex flex-col justify-start items-start p-4 lg:p-24 gap-4">

        <Tag text="Contact" id="contact" />
        <h2 className="text-4xl font-bold text-white">Got a request or a question?</h2>
        <p className="text-white text-opacity-35">Prepare your message for liftoff and together lets create <span className="text-white ">your dream website!</span> and grow your business for the future!</p>

        </section>


        <section className="flex-1 flex flex-col justify-start items-start p-4 lg:py24">

            <form onSubmit={(e) => onSubmit(e)} className="w-full flex flex-col gap-6 items-center justify-center">

                <fieldset className="flex flex-col gap-2 w-full lg:w-8/12">
                    <label htmlFor="name" className="text-2xl text-white text-opacity-30">NAME</label>
                    <input onChange={(e) => setName(e.currentTarget.value)} value={name} className="bg-transparent rounded-md fill-none border-purp border-opacity-30 border-2 py-2 px-4" type="text" name="name" />
                </fieldset>
                <fieldset className="flex flex-col gap-2 w-full lg:w-8/12">
                    <label htmlFor="email"  className="text-2xl text-white text-opacity-30">EMAIL</label>
                    <input onChange={(e) => setEmail(e.currentTarget.value)} value={email} className="bg-transparent rounded-md fill-none border-purp border-opacity-30 border-2 py-2 px-4" type="email" name="email" />
                </fieldset>
                <fieldset className="flex flex-col gap-2 w-full lg:w-8/12">
                    <label className="text-2xl text-white text-opacity-30" htmlFor="message">MESSAGE</label>
                    <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message} className="bg-transparent rounded-md fill-none border-purp min-h-40 border-opacity-30 border-2 py-2 px-4" name="message" id=""></textarea>
                </fieldset>

                <button className="w-8/12 bg-purp py-5 text-2xl rounded-md border-2 border-purp transition-all duration-300 hover:border-white">{result}</button>
            </form>
        </section>


    </section>
  )
}

export default Contact