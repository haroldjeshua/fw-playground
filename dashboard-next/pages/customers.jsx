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
          <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-col-s2 items-center justify-between my-4 p-2 cursor-pointer">
            <span>Name</span>
            <span className="text-right sm:text-left">Email</span>
            <span className="hidden md:grid">Last Order</span>
            <span className="hidden sm:grid">Payment Method</span>
          </div>
          <ul>
            {data.orders.map((order, id) => (
              <li
                key={id}
                className="grid grid-cols-2 md:grid-cols-3 items-center justify-between bg-gray-50 hover:bg-gray-200 my-4 p-2 rounded-lg cursor-pointer"
              >
                <div>
                  <div>
                    <FiUser />
                  </div>
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
