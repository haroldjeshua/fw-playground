import { FiShoppingBag } from "react-icons/fi";
import data from "../data.json";

const RecentOrders = () => {
  return (
    <div className="relative col-span-1 w-full lg:h-[50vh] bg-white m-auto p-4 border rounded-lg overflow-scroll">
      <h1>Recent Orders</h1>

      <ul>
        {data.orders.map((order, id) => (
          <li
            key={id}
            className="flex items-center bg-gray-50 hover:bg-gray-200 rounded-lg my-3 p-2 cursor-pointer"
          >
            <div className="bg-purple-100 rounded-lg p-4">
              <FiShoppingBag className="text-purple-800" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;
