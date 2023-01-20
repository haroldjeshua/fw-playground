import { FiMoreVertical } from "react-icons/fi";
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
            <span>Email</span>
            <span>Last Order</span>
            <span>Payment Method</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default customers;
