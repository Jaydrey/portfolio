import Image from "next/image";
import HeroAnimation from "@/components/HeroAnimation";
import { LinkedIn, Twitter, GitHub } from "@mui/icons-material";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-[90%] md:w-[80%] lg:w-[75%]  flex flex-col">
      {/* hero section */}
      <section className="w-full py-12 flex flex-col items-center md:flex-row justify-center md:gap-20">
        <div className="w-full md:w-auto md:flex-1 min-h-[200px] flex flex-col justify-end items-center">
          <div className="max-w-[90%] md:max-w-full">
            <p className="text-4xl font-medium flex flex-col gap-6 mb-8">
              <span>Hello there!👏🏽</span>
              <span className="flex gap-2">
                <span>I&apos;m</span>
                <span className="text-green-700">Jarib Wetshi</span>
              </span>
            </p>
            <p className="text-green-700">Full Stack Developer</p>
            <div className="mt-6">
              <button className="text-xl text-white bg-green-900 py-2 px-4 rounded-md">
                Download CV
              </button>
            </div>
          </div>
        </div>
        <div className="h-2/3 md:flex-1 md:h-auto">
          <HeroAnimation lottie_path="hero_animation.json"/>
        </div>
      </section>
      {/* who I am */}
      <section className="w-full pb-12">
        <div className="w-full md:hidden h-[150px] flex justify-center items-center">
          <h3 className="text-3xl font-semibold">
            <span>Who</span>
            <span className="text-green-700"> Am I?</span>
          </h3>
        </div>
        <div className="w-full flex flex-col md:flex-row-reverse md:items-center md:gap-8">
          <div className="w-full min-h-[250px] flex justify-center">
            <div className="relative md:w-64">
              <div className="rounded-full overflow-hidden w-52 h-52 border-2 border-green-600 flex justify-center items-center md:absolute md:rounded-md md:top-0 md:left-0 md:z-20">
                <Image
                  src="/jarib's photo.png"
                  alt="jarib's avatar"
                  width="120"
                  height="100"
                  objectPosition="center"
                  layout="responsive"
                />
              </div>
              <div className="hidden md:inline-block md:w-52 md:h-52 md:absolute md:left-4 md:top-4 md:border-2 md:border-green-700 md:rounded-md md:z-19 md:bg-transparent"></div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <div className="hidden w-full h-[150px] md:flex justify-center items-center">
              <h3 className="text-3xl font-semibold">
                <span>Who</span>
                <span className="text-green-700"> Am I?</span>
              </h3>
            </div>
            <p className="">
              <span>In a world driven by </span>
              <span className="text-green-800 font-semibold">bytes</span>{" "}
              <span>and </span>
              <span className="text-green-800 font-semibold">binary,</span>
              <span> I find my purpose at the intersection of </span>
              <span className="text-green-800 font-semibold">
                Flutter&apos;s{" "}
              </span>
              <span>vibrant UI,🎨 </span>
              <span className="text-green-800 font-semibold">Python&apos;s </span>
              <span>logical elegance🌟, and </span>
              <span className="text-green-800 font-semibold">React&apos;s </span>
              <span>
                out of the box and dynamic capabilities of efficient and highly
                performant web systems🚀.
              </span>
            </p>
            <p className="">
              <span>Beyond this, my proficiency extends to </span>
              <span className="text-green-800 font-semibold">Python </span>
              <span>Backend framework like;</span>
            </p>
            <ul className="text-orange-600 font-semibold">
              <li>🟠 Django</li>
              <li>🟠 Flask</li>
            </ul>
            <p className="">
              <span className="text-green-800 font-semibold">Javascript </span>
              <span>library and frameworks like; </span>
            </p>
            <ul className="text-yellow-600 font-semibold">
              <li>🟡 React.js</li>
              <li>🟡 Next.js</li>
              <li>🟡 Angular</li>
            </ul>
            <p>
              <span>When I am not coding, I love to </span>
              <span>
                hike 🎒 🥾 ⛺ 🏔️, meet new friends 🤝 and learning new things 📚
                🧠.
              </span>
            </p>
          </div>
        </div>
      </section>
      {/* contacts */}
      <section className="w-full py-8 flex flex-col items-center gap-8">
        <div>
          <h3 className="text-4xl font-semibold">
            <span className="text-green-700">Find </span>me on
          </h3>
        </div>
        <div className="w-full flex gap-5 justify-center">
          <div className="p-4 rounded-full bg-slate-200">
            <Link
              href="https://www.linkedin.com/in/jarib-wetshi-8030a11b5"
              target="_blank"
            >
              <LinkedIn className="text-green-800 text-3xl" />
            </Link>
          </div>
          <div className="p-4 rounded-full bg-slate-200">
            <Link href="https://twitter.com/wetshi_jarib" target="_blank">
              <Twitter className="text-green-800 text-3xl" />
            </Link>
          </div>
          <div className="p-4 rounded-full bg-slate-200">
            <Link href="https://github.com/Jaydrey" target="_blank">
              <GitHub className="text-green-800 text-3xl" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
