import Link from "next/link";
import { FiStar, FiGitBranch, FiEye } from "react-icons/fi";

async function fetchProject(name) {
  const response = await fetch(
    `https://api.github.com/repos/haroldjeshua/${name}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const project = await response.json();

  return project;
}

const Project = async ({ name }) => {
  const project = await fetchProject(name);

  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className="text-2xl font-medium">{project.name}</h2>
      <p className="text-sm font-light">{project.description}</p>
      <div className="w-1/4 flex justify-between gap-4 mt-4 text-neutral-600">
        <div className="flex items-center gap-2">
          <FiStar />
          <span>{project.stargazers_count}</span>
        </div>
        <div className="flex items-center gap-2">
          <FiGitBranch />
          <span>{project.forks_count}</span>
        </div>
        <div className="flex items-center gap-2">
          <FiEye />
          <span>{project.watchers_count}</span>
        </div>
      </div>
    </div>
  );
};

export default Project;
