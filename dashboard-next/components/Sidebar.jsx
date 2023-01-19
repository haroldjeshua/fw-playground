import Link from "next/link";
import React from "react";
import { FiBox } from "react-icons/fi";

const Sidebar = ({ children }) => {
  return (
    <div className="flex m-0 p-0">
      <div className="fixed top-[0.25rem] left-[0.25rem] w-[80px] h-[calc(100vh_-_0.5rem)] p-4 flex flex-col justify-between bg-purple-800 text-white rounded-2xl">
        <div className="flex flex-col items-center">
          <Link href="/">
            <div className="bg-white text-purple-800 p-3 rounded-lg inline-block">
              <FiBox size={32} />
            </div>
          </Link>
          <div
            id="dashboardMenu"
            className="flex flex-col gap-2 mt-2 py-2 border-t-[1px]"
          >
            <Link href="/">
              <div className="bg-purple-800 p-3 rounded-lg inline-block hover:bg-purple-700 transition-all ease">
                <FiBox size={32} />
              </div>
            </Link>
            <Link href="/">
              <div className="bg-purple-800 p-3 rounded-lg inline-block hover:bg-purple-700 transition-all ease">
                <FiBox size={32} />
              </div>
            </Link>
            <Link href="/">
              <div className="bg-purple-800 p-3 rounded-lg inline-block hover:bg-purple-700 transition-all ease">
                <FiBox size={32} />
              </div>
            </Link>
            <Link href="/">
              <div className="bg-purple-800 p-3 rounded-lg inline-block hover:bg-purple-700 transition-all ease">
                <FiBox size={32} />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <main className="w-full ml-[calc(80px_+_0.25rem)]">{children}</main>
    </div>
  );
};

export default Sidebar;
