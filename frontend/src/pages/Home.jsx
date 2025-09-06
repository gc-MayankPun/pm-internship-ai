import CardWrapper from "../components/CardWrapper";

const Home = () => {
  return (
    <div className="min-h-[90vh] bg-[#171C1C] text-white">
      <IntroSection />
    </div>
  );
};

const IntroSection = () => (
  <section className="min-h-screen w-full py-6 text-center flex justify-center items-center">
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
    </div>
  </section>
);
export default Home;
