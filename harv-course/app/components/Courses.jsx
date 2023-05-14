import Link from "next/link";

async function fetchCourses() {
  const response = await fetch("http://localhost:3000/api/courses");
  const courses = await response.json();
  return courses;
}

const Courses = async () => {
  const courses = await fetchCourses();
  return (
    <div>
      {courses.map((course) => (
        <div
          key={course.id}
          className="flex flex-col justify-between gap-4 bg-gradient-to-r from-neutral-800 to-neutral-800/50 text-white m-4 p-8 rounded-xl cursor-pointer transition-all ease-in-out duration-150 hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-800/50"
        >
          <h2 className="text-2xl">{course.title}</h2>
          <small>Level: {course.level}</small>
          <p>{course.description}</p>
          <Link
            href={course.link}
            target="_blank"
            className="max-w-max inline-flex bg-neutral-900 mb-5 py-2 px-4 border-none rounded text-sm cursor-pointer hover:bg-neutral-950 transition-all"
          >
            Go to Course
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;
