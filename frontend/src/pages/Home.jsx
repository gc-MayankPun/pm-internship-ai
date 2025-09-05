import { useState } from "react";
import { aboutSectionData } from "../api/aboutSectionData";
import CardWrapper from "../components/CardWrapper";
import useHomePageAnimation from "../../animations/useHomePageAnimation";

const Home = () => {
  const [showAbout, setShowAbout] = useState(false);
  useHomePageAnimation();

  const handleButtonClick = () => {
    setShowAbout((v) => !v);
    return;
  };

  return (
    <div className="min-h-screen bg-[#171C1C] text-white">
      <IntroSection onAboutClick={handleButtonClick} showAbout={showAbout} />
      {/* {showAbout && <AboutSection />} */}
    </div>
  );
};

const IntroSection = ({ onAboutClick, showAbout }) => (
  <section
    // id="about-section"
    className="min-h-screen w-full py-6 text-center flex justify-center items-center"
  >
    <div>
      <h1 className="text-2xl lg:text-5xl font-bold text-[#E9CD5F] m-auto w-full max-w-3xl">
        Empower Your Future with AI Internships
      </h1>
      <p className="mt-4 mb-8 w-[80%] lg:w-full m-auto text-sm lg:text-lg text-gray-200">
        Unlock government internships tailored to your skills and ambitions.
        <br />
        Powered by AI, built for students.
      </p>
      <CardWrapper />
      {/* <button
        className="mt-8 px-6 py-2 rounded bg-[#E9CD5F] text-[#171C1C] font-semibold hover:bg-yellow-300 transition text-base"
        onClick={onAboutClick}
      >
        {showAbout ? "Hide Details" : "Why Choose Us?"}
      </button> */}
    </div>
  </section>
);

const AboutSection = () => {
  return (
    <section className="py-10 px-4 bg-[#222626]">
      <h2 className="text-2xl lg:text-4xl font-bold text-[#E9CD5F] text-center mb-10">
        Why Choose Us?
      </h2>
      <AboutSectionWrapper />
    </section>
  );
};

const AboutSectionWrapper = () => (
  <div className="flex flex-col gap-6 max-w-3xl mx-auto">
    {aboutSectionData.map((content, id) => (
      <div key={id} className="bg-[#171C1C] rounded-lg p-6 shadow text-left">
        <h3 className="text-xl font-semibold text-yellow-300 mb-2">
          {content.heading}
        </h3>
        <p className="text-gray-300">{content.body}</p>
      </div>
    ))}
  </div>
);

export default Home;
