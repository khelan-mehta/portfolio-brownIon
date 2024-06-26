"use client";
import { motion, useAnimation, useScroll, useSpring } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Icons } from "@/components/Icons";
import Web1 from "../../public/Web1.png";
import Web2 from "../../public/Web2.png";
import Web3 from "../../public/Web3.png";
import Web4 from "../../public/Web4.png";
import Web5 from "../../public/Web5.png";
import "./style.css";
import { useScrollYPosition } from "react-use-scroll-position";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

ChartJS.register(ArcElement, Tooltip, ChartDataLabels, Legend);

const dataValues = [
  {
    id: "1",
    description:
      "Project 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla laborum possimus ipsa praesentium vel unde, porro molestiae fuga minus aspernatur?",
    data: {
      labels: ["Frontend", "Backend", "UI/UX"],
      datasets: [
        {
          label: "Contribution",
          data: [40, 35, 25],
          backgroundColor: ["black", "gray", "lightGray"],
          hoverBackgroundColor: ["black", "gray", "lightGray"],
          borderWidth: 1,
        },
      ],
    },
    imageSrc: "Web1",
    client: <Icons.logo />,
  },
  {
    id: "2",
    description:
      "Project 2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla laborum possimus ipsa praesentium vel unde, porro molestiae fuga minus aspernatur?",
    data: {
      labels: ["Frontend", "Backend", "UI/UX"],
      datasets: [
        {
          label: "Contribution",
          data: [20, 55, 25],
          backgroundColor: ["black", "gray", "lightGray"],
          hoverBackgroundColor: ["black", "gray", "lightGray"],
          borderWidth: 1,
        },
      ],
    },
    imageSrc: "Web2",
    client: <Icons.logo />,
  },
  {
    id: "3",
    description:
      "Project 3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla laborum possimus ipsa praesentium vel unde, porro molestiae fuga minus aspernatur?",
    data: {
      labels: ["Frontend", "Backend", "UI/UX"],
      datasets: [
        {
          label: "Contribution",
          data: [40, 0, 60],
          backgroundColor: ["black", "gray", "lightGray"],
          hoverBackgroundColor: ["black", "gray", "lightGray"],
          borderWidth: 1,
        },
      ],
    },
    imageSrc: "Web3",
    client: <Icons.logo />,
  },
  {
    id: "4",
    description:
      "Project 4 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla laborum possimus ipsa praesentium vel unde, porro molestiae fuga minus aspernatur?",
    data: {
      labels: ["Frontend", "Backend", "UI/UX"],
      datasets: [
        {
          label: "Contribution",
          data: [10, 35, 55],
          backgroundColor: ["black", "gray", "lightGray"],
          hoverBackgroundColor: ["black", "gray", "lightGray"],
          borderWidth: 1,
        },
      ],
    },
    imageSrc: "Web4",
    client: <Icons.logo />,
  },
  {
    id: "5",
    description:
      "Project 5 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla laborum possimus ipsa praesentium vel unde, porro molestiae fuga minus aspernatur?",
    data: {
      labels: ["Frontend", "Backend", "UI/UX"],
      datasets: [
        {
          label: "Contribution",
          data: [40, 15, 35],
          backgroundColor: ["black", "gray", "lightGray"],
          hoverBackgroundColor: ["black", "gray", "lightGray"],
          borderWidth: 1,
        },
      ],
    },
    imageSrc: "Web5",
    client: <Icons.logo />,
  },
];

const options = {
  rotation: -90,
  circumference: 180,
  cutout: "50%",
};

interface scrollY {
  scrollTop: number;
}

const divisions = [0, 200, 400, 560, 780];

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  const { scrollYProgress } = useScroll();
  const [currentProject, setCurrentProject] = useState(0);
  const scaleX = useSpring(scrollYProgress);
  const scrollY = useScrollYPosition();
  const [imageSrc, setImageSrc] = useState("");
  useEffect(() => {
    function getCurrentProject(scrollY: number, divisions: number[]) {
      const projectIndex = divisions.reduce(
        (prevIndex, division, currentIndex) => {
          return scrollY >= division ? currentIndex : prevIndex;
        },
        -1
      ); // -1 as initial value for handling edge cases
      setCurrentProject(projectIndex >= 0 ? projectIndex : 4);
    }
    getCurrentProject(scrollY, divisions);
  }, [scrollY]);

  return (
    <div className=" mt-[90px] overflow-x-hidden customScrollBar w-[99vw] h-[2000px] sm:h-[200vh]">
      <div className="flex flex-col sm:flex-row  gap-11  justify-center fixed left-[6vw] customScrollBar">
        <div className=" mt-[00px] sm:mt-[0px]">
          <div className="w-[22vw] flex flex-col gap-4">
            {isLoading && (
              <div className="ml-2 mt-2 z-[1] absolute">
                <div className="flex flex-col space-y-3">
                  <Skeleton className="h-[180px] bg-gray-500  w-[21vw] rounded-xl" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 bg-gray-500 w-[21vw]" />
                    <Skeleton className="h-4 bg-gray-500 w-[19vw]" />
                  </div>
                </div>
              </div>
            )}
            <motion.div
              initial={{
                width: 0,

                borderRadius: "10px",
              }}
              animate={{
                width: "22vw",

                borderRadius: "10px",
              }}
              transition={{
                duration: 1.5,
                ease: "anticipate",
              }}
              className="w-[70vw] p-6  shadow-lg flex flex-col gap-3 sm:w-[22vw] bg-white  h-[250px]  "
            >
              <div className="flex gap-3">
                <motion.div
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: "40px",
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "anticipate",
                  }}
                  className="w-10 h-10 bg-black rounded-[50%]"
                ></motion.div>
                <motion.div
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: "8vw",
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "anticipate",
                  }}
                  className="flex w-[250px] overflow-hidden self-center"
                >
                  <p>Khelan Mehta</p>
                </motion.div>
              </div>
              <motion.div
                initial={{
                  width: 0,
                }}
                animate={{
                  width: "18vw",
                }}
                transition={{
                  duration: 1.5,
                  ease: "anticipate",
                }}
                className="flex w-[250px] overflow-hidden"
              >
                <p>{dataValues[currentProject].description}</p>
              </motion.div>
            </motion.div>

            {isLoading && (
              <div
                className="ml-2 mt-[278px] z-[100] absolute"
                style={{ zIndex: 100 }}
              >
                <div className="flex flex-col space-y-3">
                  <Skeleton
                    style={{ zIndex: 100 }}
                    className="h-[180px] bg-gray-500  w-[21vw] rounded-xl"
                  />
                  <div className="space-y-2">
                    <Skeleton className="h-4 bg-gray-500 w-[21vw]" />
                    <Skeleton className="h-4 bg-gray-500 w-[19vw]" />
                  </div>
                </div>
              </div>
            )}
            <motion.div
              initial={{
                width: "18vw",

                borderRadius: "10px",
              }}
              animate={{
                width: "22vw",

                borderRadius: "10px",
              }}
              transition={{
                duration: 1.5,
                ease: "anticipate",
              }}
              className="w-[70vw] shadow-lg py-2 justify-center items-center px-8 flex flex-col gap-3 sm:w-[22vw] bg-white text-black h-[250px]  "
            >
              {!isLoading && (
                <p className="text-[24px] font-semibold self-center text-center mt-[30px] ">
                  My Inputs
                </p>
              )}
              {!isLoading && (
                <Doughnut
                  className="mt-[-10px]"
                  data={dataValues[currentProject].data}
                  options={options}
                />
              )}
            </motion.div>
          </div>
        </div>
        <div className="w-[40vw] ">
          {isLoading && (
            <div className="ml-2 mt-2 z-[-1] absolute">
              <div className="flex flex-col space-y-3">
                <Skeleton className="h-[380px] bg-gray-500  w-[37vw] rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 bg-gray-500 w-[21vw]" />
                  <Skeleton className="h-4 bg-gray-500 w-[19vw]" />
                </div>
              </div>
            </div>
          )}
          <motion.div
            initial={{
              width: 0,
              zIndex: 100,
              borderRadius: "10px",
              height: "516px",
            }}
            animate={{
              width: "40vw",
              zIndex: 100,
              borderRadius: "10px",
              height: "516px",
            }}
            transition={{
              duration: 1.5,
              ease: "anticipate",
            }}
            className="w-[70vw]  z-[100] sm:w-[22vw]   "
          >
            {!isLoading && (
              <>
                <motion.div
                  className="flex fixed max-w-[42vw] ml-[-1vw]  flex-col gap-4 p-4 mt-[-15px] bg-gray-300 overflow-y-scroll h-[495px] rounded-[10px]  customScrollBar "
                  style={{
                    scaleY: scaleX,
                    transformOrigin: "bottom",

                    width: "100%",
                    zIndex: -1,
                  }}
                ></motion.div>
                <div className="flex flex-col gap-4 overflow-y-scroll h-[470px] mt-8  customScrollBar">
                  <div>
                    {scrollY >= divisions[0] && scrollY < divisions[1] ? (
                      <motion.img
                        initial={{ scale: 0.5, opacity: 0.5 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ opacity: 0, y: -100 }}
                        className="rounded-[10px]"
                        transition={{ duration: 0.7 }}
                        src={`/${dataValues[currentProject].imageSrc}.png`}
                        alt="Image 1"
                      />
                    ) : null}

                    {scrollY >= divisions[1] && scrollY < divisions[2] ? (
                      <motion.img
                        initial={{ scale: 0.5, opacity: 0.5 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ opacity: 0, y: -100 }}
                        className="rounded-[10px]"
                        transition={{ duration: 0.7 }}
                        src={`/${dataValues[currentProject].imageSrc}.png`}
                        alt="Image 2"
                      />
                    ) : null}

                    {scrollY >= divisions[2] && scrollY < divisions[3] ? (
                      <motion.img
                        initial={{ scale: 0.5, opacity: 0.5 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ opacity: 0, y: -100 }}
                        className="rounded-[10px]"
                        transition={{ duration: 0.7 }}
                        src={`/${dataValues[currentProject].imageSrc}.png`}
                        alt="Image 3"
                      />
                    ) : null}

                    {scrollY >= divisions[3] && scrollY < divisions[4] ? (
                      <motion.img
                        initial={{ scale: 0.5, opacity: 0.5 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ opacity: 0, y: -100 }}
                        className="rounded-[10px]"
                        transition={{ duration: 0.7 }}
                        src={`/${dataValues[currentProject].imageSrc}.png`}
                        alt="Image 4"
                      />
                    ) : null}

                    {scrollY >= divisions[4] ? (
                      <motion.img
                        initial={{ scale: 0.5, opacity: 0.5 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ opacity: 0, y: -100 }}
                        className="rounded-[10px]"
                        transition={{ duration: 0.7 }}
                        src={`/${dataValues[currentProject].imageSrc}.png`}
                        alt="Image 5"
                      />
                    ) : null}
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </div>
        <div className=" mt-[00px] sm:mt-[0px]">
          <div className="w-[22vw] flex flex-col gap-4">
            {isLoading && (
              <div className="ml-2 mt-2 z-[0] absolute">
                <div className="flex flex-col space-y-3">
                  <Skeleton className="h-[180px] bg-gray-500  w-[21vw] rounded-xl" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 bg-gray-500 w-[21vw]" />
                    <Skeleton className="h-4 bg-gray-500 w-[19vw]" />
                  </div>
                </div>
              </div>
            )}
            <motion.div
              initial={{
                width: 0,
                zIndex: 100,
                borderRadius: "10px",
              }}
              animate={{
                width: "22vw",
                zIndex: 100,
                borderRadius: "10px",
              }}
              transition={{
                duration: 1.5,
                ease: "anticipate",
              }}
              className="w-[70vw] p-4 z-[100] sm:w-[22vw] shadow-lg h-[250px]  "
            >
              {!isLoading && (
                <p className="text-[18px] font-semibold self-center text-center  ">
                  Scroll To See Projects
                  <iframe src="https://lottie.host/embed/5c8a1acc-ea41-4180-b2b6-416ac98a41dd/Pl5mPouO9M.json"></iframe>
                </p>
              )}
            </motion.div>

            {isLoading && (
              <div className="ml-2 mt-[278px] z-[0] absolute">
                <div className="flex flex-col space-y-3">
                  <Skeleton className="h-[180px] bg-gray-500  w-[21vw] rounded-xl" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 bg-gray-500 w-[21vw]" />
                    <Skeleton className="h-4 bg-gray-500 w-[19vw]" />
                  </div>
                </div>
              </div>
            )}
            <motion.div
              initial={{
                width: 0,
                zIndex: 100,
                borderRadius: "10px",
              }}
              animate={{
                width: "22vw",
                zIndex: 100,
                borderRadius: "10px",
              }}
              transition={{
                duration: 1.5,
                ease: "anticipate",
              }}
              className="w-[70vw] flex flex-col gap-12 justify-center items-center z-[100] sm:w-[22vw] shadow-lg h-[250px]  "
            >
              {!isLoading && (
                <p className="text-[18px] font-bold">Worked With</p>
              )}
              {!isLoading && <Icons.logo />}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
