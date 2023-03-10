import Link from "next/link";
import {
  FiBox,
  FiGrid,
  FiUser,
  FiShoppingBag,
  FiSettings,
} from "react-icons/fi";
import data from "../data.json";

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
            {data.menus.map((menu, id) => {
              let icon;

              switch (true) {
                case menu.href.indexOf("dashboard") !== -1:
                  icon = <FiGrid size={32} />;
                  break;
                case menu.href.indexOf("customers") !== -1:
                  icon = <FiUser size={32} />;
                  break;
                case menu.href.indexOf("order") !== -1:
                  icon = <FiShoppingBag size={32} />;
                  break;
                case menu.href.indexOf("settings") !== -1:
                  icon = <FiSettings size={32} />;
                  break;

                default:
                  break;
              }
              return (
                <Link key={id} {...menu}>
                  <div className="bg-purple-800 p-3 rounded-lg inline-block hover:bg-purple-700 transition-all ease">
                    {icon}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <main className="w-full ml-[calc(80px_+_0.25rem)]">{children}</main>
    </div>
  );
};

export default Sidebar;
