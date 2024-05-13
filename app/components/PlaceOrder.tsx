import Image from "next/image"


const PlaceOrder = () => {
  return (
    <section className="w-full flex justify-end gap-4 group-hover:scale-110 origin-right transition-all duration-300 items-center">
        <p>Send a request</p>
        <Image src={"/arrow.svg"} width={25} height={25} alt="Arrow indicating a package choice" />
    </section>
  )
}

export default PlaceOrder