import Link from "next/link";

async function fetchProjectContents(name) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(
    `https://api.github.com/repos/haroldjeshua/${name}/contents`
  );

  const contents = await response.json();
  return contents;
}

const ProjectDirs = async ({ name }) => {
  const contents = await fetchProjectContents(name);
  const dirs = contents.filter((content) => content.type === "dir");

  return (
    <div>
      <h3 className="text-2xl mb-4">Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path} className="mb-2">
            <Link href={`/work/projects/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDirs;
