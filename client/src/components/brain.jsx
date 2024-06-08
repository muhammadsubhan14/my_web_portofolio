"use client";

import { motion } from "framer-motion";
import Image from "next/image";
const Brain = () => {
  return (
    <div className="h-full w-full">
      <Image src={"/brain.png"} alt="brain" fill className="object-contain" />
    </div>
  );
};

export default Brain;
