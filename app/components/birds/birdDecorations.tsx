"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Bird from "./bird";

const birdPositions = [
  {
    type: "small",
    src: "/assets/birds/bird3.svg",
    alt: "Flying bird",
    className:
      "absolute top-[180px] left-2 md:top-[240px] md:left-8 lg:top-[291px] lg:left-13",
    imageClassName:
      "w-[28px] h-[9px] md:w-[35px] md:h-[12px] lg:w-[42px] lg:h-[14px]",
    animated: true,
    hasDuplicate: false,
  },
  {
    type: "small",
    src: "/assets/birds/bird3.svg",
    alt: "Flying bird",
    className:
      "hidden md:block absolute top-[210px] left-16 md:top-[270px] md:left-40 lg:top-[329.02px] lg:left-62",
    imageClassName:
      "w-[28px] h-[9px] md:w-[35px] md:h-[12px] lg:w-[42px] lg:h-[14px]",
    animated: true,
    hasDuplicate: true,
  },
  {
    type: "small",
    src: "/assets/birds/bird3.svg",
    alt: "Flying bird",
    className:
      "hidden md:block absolute top-[190px] right-16 md:top-[250px] md:right-36 lg:top-[305px] lg:right-56",
    imageClassName:
      "w-[28px] h-[9px] md:w-[35px] md:h-[12px] lg:w-[42px] lg:h-[14px]",
    animated: true,
    hasDuplicate: false,
  },
  {
    type: "small",
    src: "/assets/birds/bird3.svg",
    alt: "Flying bird",
    className:
      "absolute top-[280px] right-8 md:top-[360px] md:right-28 lg:top-[465px] lg:right-46",
    imageClassName:
      "w-[28px] h-[9px] md:w-[35px] md:h-[12px] lg:w-[42px] lg:h-[14px]",
    animated: true,
    hasDuplicate: true,
  },
];

const largeBirdPositions = [
  {
    src: "/assets/birds/bird1.svg",
    containerClassName:
      "hidden md:block absolute md:top-[1200px] md:left-4 lg:top-[925.39px] lg:left-30",
    className: "md:w-[60px] md:h-[36px] lg:w-[103.38px] lg:h-[61.65px] z-5",
    iconClassName:
      "md:bottom-0 md:right-0.5 md:rotate-140 md:scale-75 lg:bottom-0 lg:right-1 lg:rotate-140 lg:scale-110",
  },
  {
    src: "/assets/birds/bird2.svg",
    containerClassName:
      "hidden md:block absolute md:top-[1100px] md:left-32 lg:top-[881px] lg:left-100",
    className: "md:w-[55px] md:h-[35px] lg:w-[88px] lg:h-[57px] z-5",
    iconClassName: "md:bottom-4 md:right-1.5 md:rotate-24 md:scale-50 lg:bottom-8 lg:right-3 lg:rotate-24 lg:scale-65",
  },
  {
    src: "/assets/birds/bird3.svg",
    containerClassName:
      "hidden md:block absolute md:top-[1100px] md:right-32 lg:top-[958px] lg:left-227",
    className: "md:w-[65px] md:h-[21px] lg:w-[127px] lg:h-[42px] z-5",
    iconClassName:
      "md:bottom-0 md:right-11 md:rotate-170 md:scale-90 lg:bottom-0 lg:right-22 lg:rotate-170 lg:scale-140",
  },
  {
    src: "/assets/birds/bird4.svg",
    containerClassName:
      "hidden md:block absolute md:top-[1100px] md:right-4 lg:top-[882px] lg:left-305",
    className: "md:w-[58px] md:h-[52px] lg:w-[113px] lg:h-[102px] z-5",
    iconClassName:
      "md:bottom-9 md:left-11 md:rotate-140 md:scale-80 lg:bottom-18 lg:left-22 lg:rotate-140 lg:scale-120",
  },
];

const flyingBirds = [
  {
    src: "/assets/birds/bird3.svg",
    startPosition: "left",
    className:
      "w-[70px] h-[40px] md:w-[100px] md:h-[56px] lg:w-[133px] lg:h-[74px]",
    iconClassName: "bottom-4 right-4 rotate-140 scale-110",
    yPosition: "top-[405px]",
    flip: false,
  },
  {
    src: "/assets/birds/bird3.svg",
    startPosition: "right",
    className:
      "w-[70px] h-[40px] md:w-[100px] md:h-[56px] lg:w-[133px] lg:h-[74px]",
    iconClassName: "bottom-4 right-5 rotate-140 scale-110",
    yPosition: "top-[352.5px]",
    flip: true,
  },
];

export default function BirdDecorations() {
  return (
    <>
      {/* Small flying birds */}
      {birdPositions.map((bird, index) => (
        <div key={`small-bird-${index}`} className={bird.className}>
          {/* Static base layer for birds with duplicates */}
          {bird.hasDuplicate && (
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8,
                duration: 0.6,
                ease: [0, 0.59, 0.44, 0.99],
              }}
            >
              <Image
                src={bird.src}
                alt={bird.alt}
                width={42}
                height={14}
                className={bird.imageClassName}
              />
            </motion.div>
          )}

          {/* Animated layer */}
          <motion.div
            className={bird.hasDuplicate ? "absolute top-0 left-0" : ""}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 0.3,
              ease: [0, 0.59, 0.44, 0.99] as [number, number, number, number],
            }}
          >
            <Image
              src={bird.src}
              alt={bird.alt}
              width={42}
              height={14}
              className={bird.imageClassName}
            />
          </motion.div>
        </div>
      ))}

      {/* Large birds */}
      {largeBirdPositions.map((bird, index) => (
        <div key={`large-bird-${index}`} className={bird.containerClassName}>
          <Bird
            src={bird.src}
            className={bird.className}
            iconClassName={bird.iconClassName}
          />
        </div>
      ))}

      {/* Flying birds across screen */}
      {flyingBirds.map((bird, index) => (
        <motion.div
          key={`flying-bird-${index}`}
          className={`fixed bottom-0 left-0 z-50 pointer-events-none`}
          initial={{
            x: bird.startPosition === "left" ? "-20vw" : "120vw",
            y: "-10vh",
            scaleX: bird.flip ? -1 : 1,
            opacity: 1,
          }}
          animate={{
            x: bird.startPosition === "left" ? "120vw" : "-20vw",
            y: "-70vh",
          }}
          transition={{
            duration: 3.5,
            delay: 0.8,
            ease: [0.73, 0, 0.8, 0.83],
            repeat: 0,
          }}
        >
          <Bird
            src={bird.src}
            className={bird.className}
            iconClassName={bird.iconClassName}
          />
        </motion.div>
      ))}
    </>
  );
}
