import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <article className="flex flex-col gap-2 border-2 border-inherit p-4 rounded-lg cursor-pointer hover:border-[currentColor] transition-all ease-linear">
      <Link href={`/posts/${props.slug}`}>
        <h2 className="text-xl font-medium leading-6">{props.title}</h2>
      </Link>
      <p className="text-sm font-light mt-auto">{props.date}</p>
    </article>
  );
};

export default PostPreview;
