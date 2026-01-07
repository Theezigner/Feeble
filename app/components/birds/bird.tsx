"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import MessageIcon from "../iconAndSvg/messageIcon";

interface BirdProps {
  src: string;
  className?: string;
  iconClassName?: string;
}

export default function Bird({ src, className, iconClassName }: BirdProps) {
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 1,
        duration: 0.3,
        ease: [0, 0.59, 0.44, 0.99],
      }}
    >
      {/* Bird Image */}
      <Image
        src={src}
        alt="Bird"
        width={88}
        height={56}
        className="w-full h-full"
      />

      {/* Message Icon */}
      <div className={`absolute ${iconClassName || "bottom-0 right-2"}`}>
        <MessageIcon />
      </div>
    </motion.div>
  );
}
