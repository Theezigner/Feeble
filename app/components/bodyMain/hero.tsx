"use client";
import { motion } from "framer-motion";
import Navbar from "../navbarComponent/navbar";
import Body from "./body";

export default function HeroBody() {
  return (
    <motion.div
      className="flex flex-col items-center w-full relative"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 1.2, ease: [0, 0.59, 0.44, 0.99] }}
    >
      <div className="absolute top-[-229px] left-[-93px] rounded-full w-[471px] h-[442px] bg-white/70 blur-[121px]"></div>
      {/* navbar */}
      <div className="w-full flex justify-center px-4 md:px-0">
        <Navbar />
      </div>

      <div className="mt-10 md:mt-12 lg:mt-16 w-full">
        <Body />
      </div>
    </motion.div>
  );
}
