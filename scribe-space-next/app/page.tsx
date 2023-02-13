import Link from "next/link";
import getPostMetaData from "@/components/getPostMetaData";

const HomePage = () => {
  const postMetaData = getPostMetaData();
  const postPreviews = postMetaData.map((post) => (
    <Link href={`/posts/${post.slug}`}>
      <h2>{post.title}</h2>
      <p>{post.date}</p>
    </Link>
  ));
  return <div>{postPreviews}</div>;
};

export default HomePage;
