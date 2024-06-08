"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Home() {
  const handleDownloadCV = () => {
    const cvURL = "/project/Muhammad_Subhan_Tarmedi_CV.pdf";
    window.open(cvURL);
  };

  return (
    <motion.div
      className="h-full"
      intial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINERrrr */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative ">
          <Image
            src="/subhan.png"
            alt="muh subhan"
            fill
            className="object-contain w-52 h-72"
          />
        </div>
        {/* text CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* title */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Software Engineer, Frontend Developer
          </h1>
          {/* description */}
          <p className="md:text-xl">
            I am a highly skilled Fullstack JavaScript Developer with extensive
            experience in both frontend and backend development. I specialize in
            creating dynamic, user-friendly web applications using modern
            technologies. My expertise includes API development and integration,
            database management, and proficiency with popular frameworks such as
            React, Node.js, and Express. I excel in collaborative team
            environments, consistently contributing to innovative solutions, and
            I am adept at quickly adapting to diverse and dynamic work settings.
          </p>
          {/* buttons */}
          <div className="w-full flex gap-4">
            <Link href={"/portfolio"}>
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                View My Project
              </button>
            </Link>

            <button
              className="p-4 rounded-lg ring-1 ring-black"
              onClick={handleDownloadCV}
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
