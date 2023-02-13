import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <article className="border border-inherit-400 p-4 rounded-lg">
      <Link href={`/posts/${props.slug}`}>
        <h2>{props.title}</h2>
      </Link>
      <p>{props.date}</p>
    </article>
  );
};

export default PostPreview;
