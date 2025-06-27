import { anton } from "@/fonts";
import { Button } from "@/components/ui/button";
import { landingBg } from "@/constants";
import { FaClock, FaCalendarAlt, FaBolt, FaUser, FaHome, FaAppleAlt, FaHeart, FaCheck } from "react-icons/fa";
import { LuDumbbell } from "react-icons/lu";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import { IoIosCheckmarkCircle } from "react-icons/io";
// import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  return (
    <section className="bg-creamy dark:bg-charcoal">
      <div className="w-full h-screen" style={landingBg}>
        <div className="h-full bg-steelgray/50 dark:bg-charcoal/70 flex flex-col justify-center items-center">
          <div className="w-[90%] md:w-[80%] mx-auto flex flex-col gap-3 p-4">
            <h2 className="text-lg md:text-xl text-amber dark:text-burnt">Welcome to ifitness gym. No limits, no excuses, just results!</h2>
            <h1 className={`${anton.className} antialiased uppercase text-4xl md:text-5xl xl:text-7xl`}>Move better. Feel Stronger. Live Healthier.</h1>
            <p className="text-lg md:text-xl">Join a community that pushes limits, builds confidence and transforms lives. Whether you're starting fresh or leveling up, your journey begins here.</p>
            <div className="flex gap-4 mx-auto">
              <Button variant="outline" className="bg-crimson dark:bg-crimson hover:bg-creamy transition-all duration-500 text-semibold mx-auto">
                Join Now
              </Button>
              <Button variant="outline" className=" bg-creamy hover:bg-crimson dark:hover:bg-crimson transition-all duration-500 text-semibold mx-auto">
                View our programs
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Quick Benefits */}
      <div className="w-[90%] md:w-[80%] px-4 pt-8 pb-2 mx-auto">
        <h2 className="capitalize mb-4 text-center md:text-left">why choose us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:place-items-center">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <FaClock className="text-xl md:text-2xl text-crimson" />
              <h3 className="">open early, close late</h3>
            </div>
            <div className="flex gap-4">
              <LuDumbbell className="text-xl md:text-2xl text-crimson" />
              <h3 className="">expert trainers</h3>
            </div>
            <div className="flex gap-4">
              <FaCalendarAlt className="text-xl md:text-2xl text-crimson" />
              <h3 className="">flexible memberships</h3>
            </div>
            <div className="flex gap-4">
              <FaBolt className="text-xl md:text-2xl text-crimson" />
              <h3 className="">Results-driven programs</h3>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <FaUser className="text-xl md:text-2xl text-crimson" />
              <h3 className="">Group and solo options</h3>
            </div>
            <div className="flex gap-4">
              <FaHome className="text-xl md:text-2xl text-crimson" />
              <h3 className="">clean and spacious facility</h3>
            </div>
            <div className="flex gap-4">
              <FaAppleAlt className="text-xl md:text-2xl text-crimson" />
              <h3 className="">nutritional coaching available</h3>
            </div>
            <div className="flex gap-4">
              <FaHeart className="text-xl md:text-2xl text-crimson" />
              <h3 className="">supportive community</h3>
            </div>
          </div>
        </div>
      </div>
      {/* our programs section */}
      <div className="w-[90%] md:w-[80%] px-4 pt-8 pb-2 mx-auto">
        <h2 className="capitalize">our programs</h2>
        <p>We offer different programs tailored to all fitness levels</p>
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
      </div>
      {/* stats section */}
      <Stats />

      {/* testimonials section */}
      <Testimonials />

      {/* Limited offer section */}
      <div className="w-[90%] md:w-[80%] px-4 pt-8 pb-2 mx-auto">
        <h2 className="capitalize">new member offer</h2>
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

      {/* newsletter */}
      <div className="w-[90%] md:w-[80%] px-4 pt-8 pb-2 mx-auto">
        <h2 className="capitalize">Subscribe to our newsletter</h2>
        <p>Fuel your fitness journey with expert tips, exclusive offers, class updates, and community events—delivered straight to your inbox, no spam.</p>
        <div className="flex">
          <input type="email" placeholder="enter your email" id="email" autoComplete="true" />
          <button type="submit">Submit</button>
        </div>
      </div>
    </section>
  );
};

// bg-[url('/shattered-dark.png')] dark:bg-[url(/shattered.png)] bg-repeat

export default Home;
