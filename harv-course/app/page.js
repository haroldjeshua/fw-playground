import Courses from "./components/Courses";

const HomePage = () => {
  return (
    <section className="max-w-3xl flex flex-col justify-center items-center mx-auto">
      <h1 className="text-display font-bold text-neutral-100">Harv Course</h1>
      <Courses />
    </section>
  );
};

export default HomePage;
