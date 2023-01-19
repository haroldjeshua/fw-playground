import Image from "next/image";
import data from "../data.json";
import { TbBrandTwitter, TbBrandInstagram, TbBrandMedium, TbBrandLinkedin, TbExternalLink } from "react-icons/tb";

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
      className="w-full min-h-[50px] max-w-4xl flex items-center mb-4 p-2 border border-gray-300 rounded-md hover:scale-102 transition-all"
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
        <div
          className="flex justify-center
        "
        >
          <h2 className="font-semibold w-full text-center">{title}</h2>
        </div>
        <div className="flex">
          <TbExternalLink />
        </div>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <main className="text-white h-screen">
      <section className="w-full flex flex-col items-center justify-center py-4 px-8">
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

        <div className="flex justify-center gap-4">
          {data.socials.map((social) => {
            if (social.url.includes("twitter")) {
              return (
                <a
                  href={social.url}
                  className="min-h-[50px] min-w-[50px] flex items-center justify-center"
                >
                  <TbBrandTwitter size={32} />
                </a>
              );
            }
            if (social.url.includes("instagram")) {
              return (
                <a
                  href={social.url}
                  className="min-h-[50px] min-w-[50px] flex items-center justify-center"
                >
                  <TbBrandInstagram size={32} />
                </a>
              );
            }
            if (social.url.includes("medium")) {
              return (
                <a
                  href={social.url}
                  className="min-h-[50px] min-w-[50px] flex items-center justify-center"
                >
                  <TbBrandMedium size={32} />
                </a>
              );
            }
            if (social.url.includes("linkedin")) {
              return (
                <a
                  href={social.url}
                  className="min-h-[50px] min-w-[50px] flex items-center justify-center"
                >
                  <TbBrandLinkedin size={32} />
                </a>
              );
            }
          })}
        </div>
      </section>
    </main>
  );
}
