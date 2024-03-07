"use client";
import Link from "next/link";
import { use, useState } from "react";
import {
  Menu,
  DeveloperMode,
  Person,
  Description,
  Note,
  Close,
} from "@mui/icons-material";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <header className="w-full py-1 md:py-3 flex flex-col justify-center fixed top-0 z-50 bg-transparent items-center backdrop-blur-lg">
      <nav className="w-[90%] md:w-[80%] lg:w-[75%] flex justify-between items-center mb-3 md:mb-0">
        <Link href="/" className="text-3xl text-green-500 font-bold">
          Jw.
        </Link>
        <div className="md:hidden">
          <button
            className="text-2xl font-semibold p-3 rounded-md border border-green-900 "
            type="button"
            onClick={() => setOpenMenu((prevValue) => !prevValue)}
          >
            {!openMenu ? (
              <Menu className="text-green-900 font-bold" />
            ) : (
              <Close />
            )}
          </button>
        </div>
        <ul className="hidden md:flex gap-4 lg:gap-8">
          <li>
            <Link href="/about" className="flex">
              <span>
                {/* <Person /> */}
              </span>
              <span className="text-xl md:text-lg lg:text-base font-medium ">
                About
              </span>
            </Link>
          </li>
          <li>
            <Link href="/projects" className="flex">
              <span>
                {/* <DeveloperMode /> */}
              </span>
              <span className="text-xl md:text-lg lg:text-base font-medium ">
                Projects
              </span>
            </Link>
          </li>
          <li>
            <Link href="/resume" className="flex">
              <span>
                {/* <Description /> */}
              </span>
              <span className="text-xl md:text-lg lg:text-base font-medium ">
                Resume
              </span>
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="flex">
              <span>
                {/* <Note /> */}
              </span>
              <span className="text-xl md:text-lg lg:text-base font-medium ">
                Blogs
              </span>
            </Link>
          </li>
          <li>
            <Link href="/github" className="flex">
              <span>
                {/* <Note /> */}
              </span>
              <span className="text-xl md:text-lg lg:text-base font-medium ">
                Github
              </span>
            </Link>
          </li>
        </ul>
      </nav>
      {openMenu && (
        <ul className={`flex md:hidden flex-col gap-3 text-green-900`}>
          <li>
            <Link href="/about" className="flex gap-6">
              <span>
                <Person />
              </span>
              <span className="text-xl font-medium ">About</span>
            </Link>
          </li>
          <li>
            <Link href="/projects" className="flex gap-6">
              <span>
                <DeveloperMode />
              </span>
              <span className="text-xl font-medium ">Projects</span>
            </Link>
          </li>
          <li>
            <Link href="/resume" className="flex gap-6">
              <span>
                <Description />
              </span>
              <span className="text-xl font-medium ">Resume</span>
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="flex gap-6">
              <span>
                <Note />
              </span>
              <span className="text-xl font-medium ">Blogs</span>
            </Link>
          </li>
          <li>
            <Link href="/github" className="flex gap-6">
              <span>
                <Note />
              </span>
              <span className="text-xl font-medium ">Github</span>
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
