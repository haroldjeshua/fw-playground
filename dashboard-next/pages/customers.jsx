import { FiUser, FiMoreVertical } from "react-icons/fi";
import data from "../data.json";

const customers = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between p-4">
        <h2>Customers</h2>
        <h4>Welcome back, Harv</h4>
      </div>
      <div className="p-4">
        <div className="w-full bg-white m-auto p-4 border rounded-lg overflow-y-auto">
          <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-col-s2 items-center justify-between my-4 p-2 cursor-pointer font-bold">
            <span>Name</span>
            <span className="text-right sm:text-left">Email</span>
            <span className="hidden md:grid">Last Order</span>
            <span className="hidden sm:grid">Payment Method</span>
          </div>
          <ul>
            {data.orders.map((order, id) => (
              <li
                key={id}
                className="grid grid-cols-2 md:grid-cols-4 items-center justify-between bg-gray-50 hover:bg-gray-200 my-4 p-2 rounded-lg cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-purple-200 p-3 rounded-lg">
                    <FiUser className="text-purple-800" />
                  </div>
                  <p className="font-medium">
                    {order.name.first + " " + order.name.last}
                  </p>
                </div>
                <p>
                  {order.name.first.toLowerCase() +
                    order.name.last.toLowerCase()}
                  @gmail.com
                </p>
                <p className="hidden md:flex">{order.date}</p>
                <div className="sm:flex hidden justify-between items-center">
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

export default customers;
