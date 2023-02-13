import Link from "next/link";
import getPostMetaData from "@/components/getPostMetaData";
import PostPreview from "@/components/PostPreview";

const HomePage = () => {
  const postMetaData = getPostMetaData();
  const postPreviews = postMetaData.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return (
    <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {postPreviews}
    </section>
  );
};

export default HomePage;
