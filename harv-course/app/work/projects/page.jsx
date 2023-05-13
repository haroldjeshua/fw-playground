import Link from "next/link";
import { FiStar, FiGitBranch, FiEye } from "react-icons/fi";

async function fetchProjects() {
  const response = await fetch(
    "https://api.github.com/users/haroldjeshua/repos"
  );

  await new Promise((resolve) => setTimeout(resolve, 1000)); // wait 1s

  const projects = await response.json();
  return projects;
}

const ProjectsPage = async () => {
  const projects = await fetchProjects();
  console.log(projects);

  return (
    <section className="max-w-3xl my-0 mx-auto py-8 px-0">
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id} className="my-8 mx-0">
            <Link
              href={`/work/projects/${project.name}`}
              className="flex justify-between gap-4 bg-gradient-to-r from-neutral-800 to-neutral-800/50 text-white p-8 rounded-xl transition-all ease-in-out duration-150 hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-800/50"
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
    </section>
  );
};

export default ProjectsPage;
