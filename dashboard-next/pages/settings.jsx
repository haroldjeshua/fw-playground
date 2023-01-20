import Link from "next/link";
import { FiHome } from "react-icons/fi";

const settings = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full h-screen">
      <img src="/loading.svg" alt="/" className="w-[256px]" />
      <h2>Under construction</h2>
      <Link
        href="/"
        className="flex items-center gap-2 bg-purple-200 text-purple-800 font-semibold p-4 rounded-lg hover:bg-purple-300 transition-all ease"
      >
        <FiHome /> Back to Dashboard
      </Link>
    </div>
  );
};

export default settings;
