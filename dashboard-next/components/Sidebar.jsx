import React from "react";

const Sidebar = ({ children }) => {
  return (
    <div className="flex">
      <h1>Sidebar</h1>
      <div className="fixed w-20 h-screen p-4 flex flex-col justify-between bg-white border-r-[1px]"></div>
      <main className="w-full ml-20">{children}</main>
    </div>
  );
};

export default Sidebar;
