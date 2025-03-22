import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center ">
          I am a passionate and experienced professional video editor and graphic designer with a deep understanding of visual storytelling. 
          Over the years, I’ve honed my skills in creating captivating and polished content that resonates with audiences across various platforms. 
          Whether it’s editing dynamic videos or designing visually compelling graphics, I am committed to delivering high-quality work that exceeds expectations.
          <br />
          <br />
          My expertise spans across Adobe Photoshop and Adobe Premiere Pro, tools that I use daily to bring ideas to life. 
          These certifications have equipped me with advanced techniques in photo manipulation, video editing, motion graphics, and overall design principles.
          I hold official certifications in both Photoshop and Premiere Pro, which reflect my proficiency and dedication to mastering these industry-standard tools.
        </p>
      </div>
    </section>
  );
};

export default About;

