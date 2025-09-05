import { aboutSectionData } from "../api/aboutSectionData";
import CardWrapper from "../components/CardWrapper";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#171C1C] text-white">
      <IntroSection />
      <AboutSection />
    </div>
  );
};

const IntroSection = () => {
  return (
    <section className="min-h-screen w-full py-6 text-center flex justify-center items-center">
      <div>
        <h1 className="text-2xl lg:w-[60%] lg:text-5xl font-bold text-[#E9CD5F] m-auto">
          Empower Your Future with AI Internships
        </h1>
        <p className="mt-4 w-[90%] m-auto text-sm lg:text-lg">
          Unlock government internships tailored to your skills and ambitions.
          Powered by AI, built for students.
        </p>
        <CardWrapper />
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="min-h-screen py-6 px-4">
      <h2 className="text-4xl lg:text-5xl font-bold text-[#E9CD5F] text-center">Why choose us?</h2>
      <AboutSectionWrapper />
    </section>
  );
};

const AboutSectionWrapper = () => {
  return (
    <div className="flex flex-col gap-4 mt-5 lg:mt-10 ml-5">
      {aboutSectionData.map((content) => {
        return (
          <div className="">
            <h3 className="text-lg font-bold">{content.heading}</h3>
            <p className="text-sm">{content.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
