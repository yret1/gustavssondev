import Checkbox from "./Checkbox";
import PlaceOrder from "./PlaceOrder";



interface ServiceCardProps {
    title: string;
    service: string;
    description: string;
    colSpan: number;

}

const ServiceCard : React.FC<ServiceCardProps> = ({title,  colSpan, description, service}) => {
  return (
    <a href="#contact" className={`w-full min-h-96 lg:h-[500px] group col-span-${colSpan}`}>
       
        <article className="flex h-full w-full flex-col border-2 rounded-lg justify-between bg-[#0C1021] p-8">
            <section>
                <h3 className="mb-2 text-balance font-medium text-purp md:text-lg">{service}</h3>
                <p className="mb-2 flex text-3xl font-bold md:text-4xl">{title}</p>
                <p className="mb-8 max-w-prose text-pretty text-sm text-white text-opacity-70">{description}</p>
               
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
  )
}

export default ServiceCard