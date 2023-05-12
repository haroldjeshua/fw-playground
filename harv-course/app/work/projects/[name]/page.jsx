import Link from "next/link";
import Project from "@/app/components/Project";
import ProjectDir from "@/app/components/ProjectDir";

const ProjectPage = ({ params: { name } }) => {
  return (
    <div className="max-w-3xl my-0 mx-auto py-8 px-0">
      <div className="bg-neutral-800 m-4 p-4 rounded-xl">
        <Link
          href="/work/projects/"
          className="inline-flex bg-neutral-900 mb-5 py-2 px-4 border-none rounded text-sm cursor-pointer hover:bg-neutral-950 transition-all "
        >
          Back to Projects
        </Link>
        <Project name={name} />
        <ProjectDir name={name} />
      </div>
    </div>
  );
};

export default ProjectPage;
