import { FiShoppingBag, FiMoreVertical } from "react-icons/fi";
import data from "../data.json";

const orders = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-between px-4 pt-4">
        <h2>Orders</h2>
        <h4>Welcome back, Harv</h4>
      </div>

      <div className="p-4">
        <div className="w-full bg-white m-auto p-4 border rounded-lg overflow-y-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center justify-between font-bold cursor-pointer">
            <span>Order</span>
            <span className="text-right sm:text-left">Status</span>
            <span className="hidden md:grid">Last Order</span>
            <span className="hidden sm:grid">Last Order</span>
          </div>
          <ul>
            {data.orders.map((order, id) => (
              <li
                key={id}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center justify-between bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 cursor-pointer"
              >
                <div className="flex gap-4">
                  <div className="bg-purple-200 p-3 rounded-lg">
                    <FiShoppingBag className="text-purple-800" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-semibold">
                      ${order.total.toLocaleString()}
                    </p>
                    <p className="text-gray-800 text-sm">{order.name.first}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-right sm:text-left">
                  <span
                    className={
                      order.status == "Processing"
                        ? "bg-green-200 p-2 rounded-lg"
                        : order.status == "Completed"
                        ? "bg-blue-200 p-2 rounded-lg"
                        : "bg-yellow-200 p-2 rounded-lg"
                    }
                  >
                    {order.status}
                  </span>
                </p>
                <p className="hidden md:flex">{order.date}</p>
                <div className="hidden sm:flex justify-between items-center">
                  <p>{order.method}</p>
                  <a href="#!">
                    <FiMoreVertical />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default orders;
