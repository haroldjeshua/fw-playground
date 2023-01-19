import React from "react";

const TopCards = () => {
  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4">
      <div className="lg:col-span-2 col-span-1 bg-white justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">Card Amount</p>
          <p className="text-gray-600">Card Text</p>
        </div>
        <p className="flex justify-center items-center bg-green-200  p-2 rounded-lg">
          <span className="text-green-700 font-semibold">+18%</span>
        </p>
      </div>
      <div className="lg:col-span-2 col-span-1 bg-white justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">Card Amount</p>
          <p className="text-gray-600">Card Text</p>
        </div>
        <p className="flex justify-center items-center bg-green-200  p-2 rounded-lg">
          <span className="text-green-700 font-semibold">+18%</span>
        </p>
      </div>
      <div className="bg-white justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">Card Amount</p>
          <p className="text-gray-600">Card Text</p>
        </div>
        <p className="flex justify-center items-center bg-green-200  p-2 rounded-lg">
          <span className="text-green-700 font-semibold">+18%</span>
        </p>
      </div>
    </div>
  );
};

export default TopCards;
