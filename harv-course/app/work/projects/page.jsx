import Link from "next/link";
import { FiStar, FiGitBranch, FiEye } from "react-icons/fi";

async function fetchProjects() {
  const response = await fetch(
    "https://api.github.com/users/haroldjeshua/repos"
  );
  const projects = await response.json();
  return projects;
}

const ProjectsPage = async () => {
  const projects = await fetchProjects();
  console.log(projects);

  return (
    <div className="max-w-3xl my-0 mx-auto py-8 px-0">
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id} className="my-8 mx-0">
            <Link
              href={`/work/projects/${project.name}`}
              className="flex justify-between gap-4 bg-neutral-800 text-white p-8 rounded-xl transition-all ease-in-out duration-150 hover:-translate-y-1 hover:shadow-sm"
            >
              <div className="flex flex-col">
                <h3 className="text-2xl font-medium">{project.name}</h3>
                <p className="text-sm font-light">{project.description}</p>
              </div>
              <div className="w-1/4 flex justify-between gap-4 mt-4 text-neutral-600">
                <span className="flex items-center gap-2">
                  <FiStar /> {project.stargazers_count}
                </span>
                <span className="flex items-center gap-2">
                  <FiGitBranch /> {project.forks_count}
                </span>
                <span className="flex items-center gap-2">
                  <FiEye /> {project.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;
