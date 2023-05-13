import { Suspense } from "react";
import Link from "next/link";
import Project from "@/app/components/Project";
import ProjectDirs from "@/app/components/ProjectDirs";

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
        <Suspense fallback={<div>Loading project repo...</div>}>
          <Project name={name} />
        </Suspense>
        <hr className="my-4 border-neutral-600" />
        <Suspense fallback={<div>Loading project directories... </div>}>
          <ProjectDirs name={name} />
        </Suspense>
      </div>
    </div>
  );
};

export default ProjectPage;
