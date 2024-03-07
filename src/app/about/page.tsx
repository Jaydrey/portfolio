import HeroAnimation from "@/components/HeroAnimation";
import Technologies from "@/components/Technologies";
import GitHubCalendar from "react-github-calendar";

const About = () => {
  return (
    <div className="w-[90%] md:w-[80%] lg:w-[75%]  flex flex-col py-5">
      <section className="w-full py-8 flex flex-col md:flex-row md:justify-center md:gap-10 md:items-center">
        <div className="w-full md:w-auto md:min-w-[200px] flex flex-col ">
          <h3 className="text-3xl font-semibold">About Me!</h3>
          <div className=" mt-5">
            <div className="mt-5 flex flex-col gap-4">
              <p>
                <span>Hello! I&apos;m </span>
                <span className="text-green-800 font-semibold">
                  Jarib Wetshi,{" "}
                </span>
                <span> a passionate</span>
                <span className="text-green-800 font-semibold">
                  {" "}
                  Full stack developer
                </span>
                <span>
                  with a knack for building innovative and user-friendly
                </span>
                <span className="text-green-800 font-semibold">
                  {" "}
                  web and mobile applications.
                </span>
              </p>
              <p>
                <span>With a solid background in </span>
                <span className="text-green-800 font-semibold">
                  Computer Science{" "}
                </span>
                <span>and </span>
                <span className="text-green-800 font-semibold">
                  4+ years experience in software development,
                </span>
                <span> I&apos;m dedicated to crafting </span>
                <span className="text-green-800 font-semibold">
                  high-quality software solutions{" "}
                </span>
                <span>that solve </span>
                <span className="text-green-800 font-semibold">
                  real-world problems.
                </span>
              </p>
              <p>
                <span>I&apos;ve had the privilege of working for both </span>
                <span className="text-green-800 font-semibold">start-ups </span>
                <span>and </span>
                <span className="text-green-800 font-semibold">
                  medium sized{" "}
                </span>
                <span>corporations.</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-80 md:60 md:w-70 lg:h-70 f">
          <HeroAnimation lottie_path="about_hero.json" />
        </div>
      </section>

      <section className="w-full">
        <div className="flex flex-col">
          <div className="w-full min-h-16">
            <h3 className="text-3xl text-green-800 font-semibold">
              Technologies
            </h3>
          </div>
          <div className="w-full">
            <p>Here are some few technologies I&apos;ve worked with:</p>
            <div className="mt-8 flex flex-col md:flex-row gap-8 justify-center">
              <Technologies />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="flex flex-col">
          <div className="w-full min-h-20 flex items-center">
            <h3 className="text-3xl font-semibold">
              Days <span className="text-green-800">I code</span>
            </h3>
          </div>
          <div className="w-full mt-5">
            <GitHubCalendar username="jaydrey" blockSize={9} blockMargin={5} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
