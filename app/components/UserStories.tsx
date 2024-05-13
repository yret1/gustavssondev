import Tag from "./Tag"
import { InfiniteMovingCards } from "./ui/MovingCards"
import { Vortex } from "./ui/Vortex"

const UserStories = () => {
  return (
    <section
    id="reviews" 
    className="min-h-screen w-screen overflow-hidden bg-slate-900 relative">
        <Vortex
        rangeY={400}
        particleCount={200}
        baseSpeed={0.2}
        baseHue={240}
        baseRadius={1}
        containerClassName="h-full w-full bg-slate-900"
        className="w-screen flex flex-col gap-10 h-screen justify-center p-24 items-center">

            <Tag text="User Stories" id="UserStories" />

            <h1 className="font-bold text-white text-center text-nowrap text-lg lg:text-4xl">Check out these reviews</h1>

            <InfiniteMovingCards
            pauseOnHover={true}
            items={[
                {
                    name: "Jakob Kerren",
                    title: "Freelance Journalist",
                    quote: "You're making a mistake if you're not hiring this guy. He is incredibly hard-working, noticeably intelligent, but most importantly very friendly and easy to work with. I was very happy with the result of the project I assigned to him.",
                },
                {
                    name: "Leo Tamburini",
                    title: "CEO",
                    quote: "Amazing guy and amazing work. Could not ask for more. Always listened to my feedback and made improvements. Explained me how things were going all along the process. Very skillful."
                },
                {
                    name: "Jakob",
                    title: "Freelance Journalist",
                    quote: "I was very happy to work with Simon again. His very skilled and I was very happy with the result of this project."
                }
            ]} />

        </Vortex>
    </section>
  )
}

export default UserStories