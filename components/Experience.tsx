import Image from "next/image";
import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h2 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl ">
        <div className="md:flex md:flex-row md:justify-between pt-5">
          <div className="flex items-center gap-3">
            <Image
              src={"/WebHR.svg"}
              height={30}
              width={30}
              alt={"Ibrahim Memon - UX Experience"}
            />
            <p className="text-gray-300 ">
              <span className="font-semibold">Video Editor and Designer /</span> Digital Design and Video Producer
            </p>
          </div>
          </div>
        </div>
          <p className="text-gray-300 md:pt-0 pt-3">
            March 2025 - Present, United States
          </p>
        </div>

        <p className="text-gray-300 pt-5">
          Currently, I am working on Youtube projects for other people,
          most are small but soon I will be working with a big youtuber to 
          get my brand going! I also do commisions on the side for graphics
          and video productions for other people and charging a small fee.
          <br />
          <br />
          My experience with Premier Pro and Photoshop is so great I am even certified!
          I use many platforms (mostly Adobe) to greatly improve the speed of my editing,
          while maintaining the great quality my clients cherish! 
        </p>
        <div className="flex-col flex sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Photoshop
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Lightroom
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Premier Pro
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            After Effects
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
