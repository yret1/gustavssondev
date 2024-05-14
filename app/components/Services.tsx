import Checkbox from "./Checkbox";
import PlaceOrder from "./PlaceOrder";
import Tag from "./Tag";



// I actually opted not to create components out of these cards due to the amount of unique code in each card.

const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen w-screen bg-slate-900 flex flex-col items-center  relative lg:py-24 gap-6"
    >
      <Tag text="Services" id="services" />

      <section className="w-screen flex justify-center items-center flex-col">
        <h1 className="font-bold text-white text-center text-nowrap text-lg lg:text-4xl">
          Projects, Applications or Consultaions
        </h1>
        <p>I got you covered!</p>
      </section>

      <section className="grid w-screen lg:grid-cols-5 gap-8 p-4 md:p-24 place-items-center">
        <a 
        aria-label="Get in touch with me for a custom web application"
        href="#contact" className={`w-full h-full group md:col-span-2`}>
          <article className="flex h-full w-full flex-col border-2 rounded-lg justify-between bg-[#0C1021] p-8">
            <section>
              <h3 className="mb-2 text-balance font-medium text-purp md:text-lg">
                Web Application
              </h3>
              <p className="mb-2 flex text-3xl font-bold md:text-4xl">
                Custom pricing
              </p>
              <p className="mb-8 max-w-prose text-pretty text-sm text-white text-opacity-70">
                Web applications vary in scale, do you want help creating a
                comprehensive application? In that case, send me a message and
                we will get the project rolling together!
              </p>
            </section>
            <section className="w-full h-full flex gap-2 flex-col justify-start items-start">
              <Checkbox text="Custom setup and design" checked={true} />
              <Checkbox text="Responsive for all screensizes" checked={true} />
              <Checkbox text="SEO Optimized" checked={true} />
              <Checkbox text="Scalable applications" checked={true} />
              <Checkbox text="Continued support" checked={true} />
              <Checkbox text="Transparent workflow" checked={true} />
            </section>

            <PlaceOrder />
          </article>
        </a>

        <a 
        aria-label="Get in touch with me for a custom website"
        href="#contact" className={`w-full h-full group md:col-span-3`}>
          <article className="flex h-full w-full flex-col border-2 rounded-lg justify-between bg-[#0C1021] p-8">
            <section>
              <h3 className="mb-2 text-balance font-medium text-purp md:text-lg">
                Website
              </h3>
              <p className="mb-2 flex text-3xl font-bold md:text-4xl">
                $30 / H
              </p>
              <p className="mb-8 max-w-prose text-pretty text-sm text-white text-opacity-70">
                Together we will create a modern and revenue creating website
                for you or you&apos;r company. Helping your business enter the
                modern website age!
              </p>
            </section>
            <section className="w-full h-full flex gap-2 flex-col justify-start items-start">
              <Checkbox text="High converting landingpages" checked={true} />
              <Checkbox text="Responsive for all screensizes" checked={true} />
              <Checkbox text="SEO Optimized" checked={true} />
              <Checkbox text="Payment integration" checked={true} />
              <Checkbox text="Continued support" checked={true} />
              <Checkbox text="Transparent workflow" checked={true} />

              <Checkbox
                text="Hosting (including domain setup)  + $ 100"
                checked={false}
              />

              <Checkbox text="Analytics   + $ 50" checked={false} />
            </section>

            <PlaceOrder />
          </article>
        </a>
        <a
          aria-label="Get in touch with me for a custom website for non-nordic clients, Redirects to Upwork.com"
          href="https://www.upwork.com/freelancers/~016509dc8b3fcee662?mp_source=share"
          referrerPolicy="no-referrer"
          target="_blank"
          className={`w-full h-full group md:col-span-3`}
        >
          <article className="flex h-full w-full flex-col border-2 rounded-lg justify-between bg-[#0C1021] p-8">
            <section>
              <h3 className="mb-2 text-balance font-medium text-purp md:text-lg">
                Non-Nordic Clients
              </h3>
              <p className="mb-2 flex text-3xl font-bold md:text-4xl">
                $30 / H
              </p>
              <p className="mb-8 max-w-prose text-pretty text-sm text-white text-opacity-70">
                For international clients i handle most of the contracts on
                Upwork, a freelance platform. The reason being simpler invoicing
                internationally.{" "}
              </p>
            </section>
            <section className="w-full h-full flex gap-2 flex-col justify-start items-start">
              <Checkbox text="Custom setup and design" checked={true} />
              <Checkbox text="Responsive for all screensizes" checked={true} />
              <Checkbox text="SEO Optimized" checked={true} />
              <Checkbox text="Scalable applications" checked={true} />
              <Checkbox text="Continued support" checked={true} />
              <Checkbox text="Transparent workflow" checked={true} />
              <Checkbox
                text="Hosting (including domain setup)  + $ 100"
                checked={false}
              />

              <Checkbox text="Analytics   + $ 50" checked={false} />
            </section>

            <PlaceOrder />
          </article>
        </a>
        <a
          aria-label="Get in touch with me for a custom web application"
         href="#contact" className={`w-full h-full group md:col-span-2`}>
          <article className="flex h-full w-full flex-col border-2 rounded-lg justify-between bg-[#0C1021] p-8">
            <section>
              <h3 className="mb-2 text-balance font-medium text-purp md:text-lg">
                Custom Request
              </h3>
              <p className="mb-2 flex text-3xl font-bold md:text-4xl">
                Custom pricing
              </p>
              <p className="mb-8 max-w-prose text-pretty text-sm text-white text-opacity-70">
                In the case that your project doesnt fit any of the choices
                provided or you have questions regarding what i can do for you,
                Lets chat and we will figure it out!
              </p>
            </section>
            <section className="w-full h-full flex gap-2 flex-col justify-start items-start">
              <Checkbox text="Custom setup and design" checked={true} />
              <Checkbox text="Responsive for all screensizes" checked={true} />
              <Checkbox text="SEO Optimized" checked={true} />
              <Checkbox text="Scalable applications" checked={true} />
              <Checkbox text="Continued support" checked={true} />
              <Checkbox text="Transparent workflow" checked={true} />
            </section>

            <PlaceOrder />
          </article>
        </a>
      </section>
    </section>
  );
};

export default Services;
