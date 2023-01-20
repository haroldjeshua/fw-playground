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
            <div className="flex items-center justify-between gap-2 w-full">
              <div className="flex lg:flex-row flex-col gap-2">
                <p className="text-gray-800">{order.name.first}</p>
                <p className="text-gray-400 text-sm self-end">{order.date}</p>
              </div>
              <div className="flex items-center">
                <p className="text-gray-600 font-semibold">{order.total}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;
