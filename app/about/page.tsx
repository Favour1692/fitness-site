import Image from "next/image";

const About = () => {
  return (
    <section className="pt-12">
      <h1 className="uppercase">about us</h1>

      {/* our story section */}
      <div className="w-[90%] md:w-[80%] px-4 pt-8 pb-2 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* text */}
          <div className="flex flex-col gap-4">
            <h2 className="capitalize">Our story</h2>
            <p>
              From Day One, It Was Never Just About Reps. We started this gym with a simple belief: fitness should feel like coming home. It should challenge you, uplift you, and bring you into a community that celebrates every drop of effort. What
              began as a small training space with a big dream has grown into a vibrant hub for people of all walks: newbies, heavy lifters, runners, yogis, and everyone in between. We believe strength comes in many forms; persistence, progress, and
              showing up even when it's hard. That's the energy we've built this place on. More than just equipment or classes, we're a space where people show up for themselves—and for each other. This is more than a gym. This is your start line.
              And we can't wait to see how far you'll go.
            </p>
          </div>

          {/* image */}
          <div>
            <Image src="/story.webp" alt="lady in gym" width={500} height={250}></Image>
          </div>
        </div>
      </div>

      {/* our mission */}
      <div className="w-[90%] md:w-[80%] px-4 pt-8 pb-2 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* image section */}
          <div>
            <Image src="/mission.webp" alt="lady in gym" width={500} height={250}></Image>
          </div>

          {/* text section */}
          <div className="flex flex-col gap-4">
            <h2>our mission</h2>
            <p>We're here to make fitness feel less intimidating and more like coming home. With expert coaching, supportive energy, and real results, we help people build strength that lasts inside and out.</p>
          </div>
        </div>
      </div>

      {/* our vision */}
      <div className="w-[90%] md:w-[80%] px-4 pt-8 pb-2 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* text section */}
          <div className="flex flex-col gap-4">
            <h2>our vision</h2>
            <p>We envision a vibrant space where confidence is cultivated, limits are tested, and every win, big or small, is celebrated. From first-timers to long-timers, we're building a culture where progress is personal and everyone belongs.</p>
          </div>

          {/* image section */}
          <div>
            <Image src="/vision.webp" alt="lady in gym" width={500} height={250}></Image>
          </div>
        </div>
      </div>

      {/* our team */}
      <div className="w-[90%] md:w-[80%] px-4 pt-8 pb-2 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* text section */}
          <div className="flex flex-col gap-4">
            <h2>meet our team</h2>
            <p>
              More than trainers, we're your fitness family. Behind every rep and every milestone is a team that lives and breathes this lifestyle. Our coaches don't just guide you through workouts, they bring knowledge, accountability, and
              contagious energy into every session.
            </p>
          </div>

          {/* image section */}
          <div>
            <Image src="/team.webp" alt="3 coaches" width={500} height={250}></Image>
          </div>
        </div>
      </div>

      <div>
        <h2>our space</h2>
        {/* pictures of gym */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <Image src="/space1.webp" alt="our empty gym" width={500} height={250}></Image>
          </div>
          <div>
            <Image src="/space2.webp" alt="our empty gym" width={500} height={250}></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
