import fs from "fs";
import Link from "next/link";

const getPostMetaData = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const mdPosts = files.filter((file) => file.endsWith(".md"));
  const slugs = mdPosts.map((file) => file.replace(".md", ""));
  return slugs;
};

const HomePage = () => {
  const postMetaData = getPostMetaData();
  const postPreviews = postMetaData.map((slug) => (
    <Link href={`/blog/${slug}`}>
      <h2>{slug}</h2>
    </Link>
  ));
  return <div>{postPreviews}</div>;
};

export default HomePage;
