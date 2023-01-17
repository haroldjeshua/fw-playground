import Image from 'next/image'
import data from "../data.json"

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center mt-32 w-full">
      <Image
        className="rounded-full"
        alt={data.name}
        src={data.avatar}
        width={80}
        height={80}
      />
      <h1 className="font-semibold">{data.name}</h1>
    </section>
  )
}
