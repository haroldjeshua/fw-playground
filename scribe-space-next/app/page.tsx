import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";
import { PostMetadata } from "@/components/PostMetadata";

const getPostMetaData = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const mdPosts = files.filter((file) => file.endsWith(".md"));

  const posts = mdPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};

const HomePage = () => {
  const postMetaData = getPostMetaData();
  const postPreviews = postMetaData.map((post) => (
    <Link href={`/blog/${post.slug}`}>
      <h2>{post.title}</h2>
      <p>{post.date}</p>
    </Link>
  ));
  return <div>{postPreviews}</div>;
};

export default HomePage;
