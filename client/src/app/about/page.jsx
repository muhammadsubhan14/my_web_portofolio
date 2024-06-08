"use client";

import { motion, useInView } from "framer-motion";
import Brain from "@/components/brain";
import { useRef } from "react";

export default function AboutPage() {
  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, { once: true });
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
  const experienceRef = useRef();

  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
  return (
    <motion.div
      className="h-full"
      intial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* containerrrrr */}
      <div className="h-full overflow-scroll lg:flex">
        {/* text container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          <div className="flex flex-col gap-12 justify-center">
            {/* biography title */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* biography desc */}
            <p className="text-lg">
              Hello, I'm Muhammad Subhan. After completing my Bachelor's degree
              in Communication Science from Paramadina University, I began my
              career at Bank Jenius as a KYC Analyst. However, my passion for
              continuous learning led me on a different path. I became intrigued
              by the world of IT, and I have since graduated from a fullstack
              JavaScript bootcamp. My aspiration is to pursue a career as a
              software developer, and I am committed to achieving this goal with
              determination and dedication. I am confident that with a blend of
              strong communication skills and a deep interest in technology, I
              can make a meaningful contribution to a development team. I look
              forward to the opportunity to demonstrate my potential and to join
              a dynamic and innovative team.
            </p>
            <span className="italic">Best Regards, Hans</span>
          </div>
          {/* Skills container*/}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* Skill title */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKIllS
            </motion.h1>
            {/* skill list */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Typescript
              </div>{" "}
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>{" "}
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React Native
              </div>{" "}
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>{" "}
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>{" "}
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>{" "}
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>{" "}
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>{" "}
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>{" "}
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Apollo
              </div>{" "}
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                GraphQl
              </div>{" "}
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                CSS & HTML
              </div>{" "}
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Rest API
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                EJS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Sequelize
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Bootstrap
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                NoSQL
              </div>
            </motion.div>
          </div>
          {/* experience */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* experience title */}
            <motion.h1
              intial={{ x: -300 }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* experience list */}
            <motion.div
              intial={{ x: -300 }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              className=""
            >
              {/*experience  list item */}
              <div className="flex justify-between h-48">
                {/* left */}
                <div className="w-1/3">
                  {/* job title  */}
                  <div className=" bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Fullstack Javascript
                  </div>
                  {/* job desc  */}
                  <div className="p-3 text-sm italic">Joined as Student</div>
                  {/* job date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    Okt 2023 - March 2024
                  </div>
                  {/* company name  */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Hacktiv8
                  </div>
                </div>
                {/* center */}
                <div className="w-1/6">
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3"></div>
              </div>{" "}
              {/*experience  list item */}
              <div className="flex justify-between h-48">
                {/* left */}
                <div className="w-1/3"></div>
                {/* center */}
                <div className="w-1/6">
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3">
                  {" "}
                  {/* job title  */}
                  <div className=" bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    KYC Video Call
                  </div>
                  {/* job desc  */}
                  <div className="p-3 text-sm italic">
                    Includes verifying customer identity via video call,
                    confirming personal data, capturing photos/videos during
                    verification, and detecting suspicious activities.
                  </div>
                  {/* job date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    Okt 2022 - sept 2023
                  </div>
                  {/* company name  */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Bank BTPN (Jenius)
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* svg container */}
        <div className="hidden md:block lg:block w-1/3 sticky top-0 z-30 xl:w-1/2 xl:-ml-28">
          <Brain />
        </div>
      </div>
    </motion.div>
  );
}
