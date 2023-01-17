import Image from "next/image";
import data from "../data.json";
import { FiExternalLink } from "react-icons/fi";

function LinkCard({
  url,
  title,
  image,
}: {
  url: string;
  title: string;
  image?: string;
}) {
  return (
    <a
      href={url}
      className="w-full flex items-center mb-4 p-3 border border-gray-300 rounded-md hover:scale-102 transition-all"
    >
      <div className="flex justify-between items-center gap-1 w-full">
        <div className="flex">
          {image && (
            <Image
              className="rounded-sm"
              alt={title}
              src={image}
              width={32}
              height={32}
            />
          )}
        </div>
        <div className="flex justify-center
        ">
          <h2 className="font-semibold w-full text-center">{title}</h2>
        </div>
        <div className="flex">
            <FiExternalLink/>
        </div>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <section className="w-full flex flex-col items-center justify-center mt-16 px-8">
      <Image
        className="rounded-full"
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
      />
      <h1 className="font-bold mt-4 mb-8 text-2xl">{data.name}</h1>
      {data.links.map((link) => (
        <LinkCard key={link.url} {...link} />
      ))}
    </section>
  );
}
