import { anton } from "@/fonts";
import { Button } from "@/components/ui/button";
import { landingBg, benefits } from "@/constants";
import { FaCheck } from "react-icons/fa";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
// import { Card, CardContent } from "@/components/ui/card";

{
  /* <div className="flex gap-4">
              <FaClock className="text-xl md:text-2xl text-crimson" />
              <h3 className="">open early, close late</h3>
            </div> */
}

const Home = () => {
  return (
    <section className="">
      <div className="w-full h-screen" style={landingBg}>
        <div className="h-full bg-steelgray/50 dark:bg-charcoal/70 flex flex-col justify-center items-center">
          <div className="w-[90%] md:w-[80%] mx-auto flex flex-col gap-3 p-4">
            <h2 className="text-lg md:text-xl">Welcome to ifitness gym. No limits, no excuses, just results!</h2>
            <h1 className={`${anton.className} antialiased uppercase text-4xl md:text-5xl xl:text-7xl text-burntblue`}>Move better. Feel Stronger. Live Healthier.</h1>
            <p className="text-lg md:text-xl">Join a community that pushes limits, builds confidence and transforms lives. Starting fresh or leveling up, whatever level of fitness you're at, your journey begins here.</p>
            <div className="flex gap-4 mx-auto">
              <Button variant="outline" className="bg-crimson hover:bg-creamy transition-all duration-500 text-semibold mx-auto">
                Join Now
              </Button>
              <Button variant="outline" className=" bg-crimson dark:bg-crimson hover:bg-fog dark:hover:bg-fog transition-all duration-500 text-semibold mx-auto">
                View our programs
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* about section */}
      <div className="w-[90%] md:w-[80%] px-4 pt-8 pb-2 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mx-auto">
          {/* text section */}
          <div className="flex flex-col gap-4">
            <h2>who we are</h2>
            <p>
              We're not just a gym, we're a community. Our mission is to help you train with purpose, push your limits, and become your strongest self inside and out. Come sweat with us, grow with us and become the strongest, fittest and best version
              of yourself
            </p>
            <div className="text-left">
              <Button variant="outline" className=" bg-crimson dark:bg-crimson hover:bg-fog dark:hover:bg-fog transition-all duration-500 text-semibold mx-auto">
                learn more about us
              </Button>
            </div>
          </div>

          {/* image section */}
          <div className="">
            <Image src="/about.webp" alt="lady in gym" width={500} height={333} className="w-[90%] xl:w-[80%] h-auto"></Image>
          </div>
        </div>
      </div>

      {/* Quick Benefits */}
      <div className="w-[90%] md:w-[80%] px-4 pt-8 pb-2 mx-auto">
        <h2 className="capitalize mb-4 text-center md:text-left">why choose us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 items-center mx-auto">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="flex flex-col justify-center items-center gap-2 p-4 w-auto h-auto sm:h-[200px] border border-charcoal dark:border-fog rounded-xl">
              <div className="text-xl md:text-2xl text-crimson">{benefit.icon}</div>
              <h3 className="">{benefit.title}</h3>
              <p className="text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* our programs section */}
      <div className="w-[90%] md:w-[80%] px-4 pt-8 pb-2 mx-auto">
        <h2 className="capitalize">our programs</h2>
        <p>We offer different programs tailored to all fitness levels</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:place-items-center text-left">
          {/* text section */}
          <div className="flex flex-col gap-2">
            <div className="flex gap-4">
              <p className="capitalize">Strength and conditioning</p>
              <IoIosCheckmarkCircle />
            </div>
            <div className="flex gap-4">
              <p className="capitalize">functional mobility and flexibility</p>
              <IoIosCheckmarkCircle />
            </div>
            <div className="flex gap-4">
              <p className="capitalize">HIIT and cardio burnouts</p>
              <IoIosCheckmarkCircle />
            </div>
            <div className="flex gap-4">
              <p className="capitalize">personal training and coaching</p>
              <IoIosCheckmarkCircle />
            </div>
            <div className="flex gap-4">
              <p className="capitalize">nutrition and wellness coaching</p>
              <IoIosCheckmarkCircle />
            </div>
            <div className="flex gap-4">
              <p className="capitalize">group fitness classes</p>
              <IoIosCheckmarkCircle />
            </div>
            <div className="flex gap-4">
              <p className="capitalize">yoga and flexibility</p>
              <IoIosCheckmarkCircle />
            </div>
            <Link href={"/programs"} className="text-left">
              <Button variant="outline" className="bg-crimson dark:bg-crimson hover:bg-fog dark:hover:bg-fog transition-all duration-500 uppercase font-semibold mx-auto">
                Learn more
              </Button>
            </Link>
          </div>

          {/* image section */}
          <div className="">
            <Image src="/program.webp" alt="people working out" width={500} height={250}></Image>
          </div>
        </div>
      </div>
      {/* stats section */}
      <Stats />

      {/* testimonials section */}
      <Testimonials />

      {/* Limited offer section */}
      <div className="w-[90%] md:w-[80%] px-4 pt-8 pb-2 mx-auto">
        <h2 className="capitalize">new member offer</h2>
        <div className="flex flex-col gap-2 justify-center items-center">
          <p>
            Level up for less. Commit to ifitness gym today at a discounted price. We're not just offering a membership, we're starting a movement. Enjoy exclusive access to our programs, expert coaching, and next-level community. For new members, we
            offer these at a fraction of the price. This isn't your someday. This is your now.
          </p>
          <div>
            <h3>Join now and enjoy:</h3>
            <div className="flex gap-4">
              <p className="">A reduced monthly rate during your first 3 months</p>
              <FaCheck />
            </div>
            <div className="flex gap-4">
              <p className="">A complimentary personal training intro session</p>
              <FaCheck />
            </div>
            <div className="flex gap-4">
              <p className="">Special access to a members-only beginner bootcamp</p>
              <FaCheck />
            </div>
            <div className="flex gap-4">
              <p className="">Free entry to one of our signature group classes</p>
              <FaCheck />
            </div>
            <div className="flex gap-4">
              <p className="">A post-workout smoothie on us</p>
              <FaCheck />
            </div>
          </div>
        </div>
      </div>

      {/* schedule section */}
      <div className="w-[90%] md:w-[80%] px-4 pt-8 pb-2 mx-auto flex flex-col justify-center items-center">
        <div className="flex flex-col gap-2">
          <h2 className="capitalize text-center">our gym classes schedule</h2>
          <div className="mx-auto">
            <Image src="/schedule.png" alt="training schedule table" width={500} height={250}></Image>
          </div>
        </div>
      </div>

      {/* newsletter */}
      <div className="w-[90%] md:w-[80%] px-4 pt-8 pb-2 mx-auto">
        <h2 className="capitalize">Subscribe to our newsletter</h2>
        <p>Fuel your fitness journey with expert tips, exclusive offers, class updates, and community events—delivered straight to your inbox, no spam.</p>
        <div className="flex py-4">
          <input type="email" placeholder="enter your email" id="email" autoComplete="true" className="w-[40%] p-2 text-crimson border-1 border-creamy" />
          <button type="submit" className="p-2 bg-crimson border-1 border-creamy">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

// bg-[url('/shattered-dark.png')] dark:bg-[url(/shattered.png)] bg-repeat

export default Home;
