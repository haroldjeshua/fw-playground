import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 h-16 w-full flex justify-between items-center border-b border-neutral-600 p-4 bg-[#333] z-10">
      <div className="flex row">
        <Link href="/" className="text-xl font-semibold">
          Harv Course
        </Link>
      </div>
      <div className="flex gap-12">
        <Link href="/about">About</Link>
        <Link href="/about/stack">Stack</Link>
        <Link href="/work/projects">Work</Link>
      </div>
    </header>
  );
};

export default Header;
