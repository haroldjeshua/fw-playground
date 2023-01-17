import Image from "next/image";
import data from "../data.json";

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
      className="flex items-center p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="font-bold text-lg">
        <div className="flex flex-col">
          <h1 className="font-bold text-lg">{title}</h1>
        </div>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center mt-16 w-full">
      <Image
        className="rounded-full"
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
      />
      <h1 className="font-bold mt-4 text-2xl">{data.name}</h1>
      {data.links.map((link) => (
        <LinkCard key={link.url} {...link} />
      ))}
    </section>
  );
}
