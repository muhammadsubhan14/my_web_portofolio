"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  const text = "Hi There";

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* KONTENER TEKSsss */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>
        {/* KONTENER FORM */}
        <form
          action={"https://formsubmit.co/muhammadsubhantarmedi@gmail.com"}
          method="POST"
          className="h-1/2 lg:h-full lg:w-1/2 bg-blue-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <span>Dear Muhammad Subhan,</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="user_message"
          ></textarea>
          <span>My Email Address Is:</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none "
          />
          <span>Regards</span>
          <button className="bg-black text-white rounded font-semibold p-4">
            Send
          </button>
        </form>
      </div>
    </motion.div>
  );
}