import Link from "next/link";

const Header = () => {
  return (
    <header className="h-16 w-full flex justify-between items-center border-b border-neutral-600 p-4">
      <div className="flex row">
        <Link href="/" className="text-xl font-semibold">
          Harv Course
        </Link>
      </div>
      <div className="flex gap-12">
        <Link href="/about">About</Link>
        <Link href="/hobbies">Hobbies</Link>
        <Link href="/stack">Stack</Link>
      </div>
    </header>
  );
};

export default Header;
