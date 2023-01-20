import { FiShoppingBag } from "react-icons/fi";
import data from "../data.json";

const RecentOrders = () => {
  return (
    <div className="relative col-span-1 w-full lg:h-[70vh] bg-white m-auto p-4 border rounded-lg overflow-scroll">
      <h1>Recent Orders</h1>

      <ul>
        {data.orders.map((order, id) => (
          <li
            key={id}
            className="flex items-center gap-4 bg-gray-50 hover:bg-gray-200 rounded-lg my-3 p-2 cursor-pointer"
          >
            <div className="bg-purple-100 rounded-lg p-4">
              <FiShoppingBag className="text-purple-800" />
            </div>
            <div className="flex gap-2">
              <p className="text-gray-800 font-semibold">{order.total}</p>
              <p className="text-gray-500">{order.name.first}</p>
            </div>
            <p className="lg:flex md:hidden absolute right-8">{order.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;
