import data from "../data.json";

const TopCards = () => {
  return (
    <div className="grid lg:grid-cols-6 gap-4 p-4">
      {data.cards.map((card) => (
        <div className="lg:col-span-2 col-span-1 bg-white justify-between w-full border p-4 rounded-lg">
          <div className="flex flex-col w-full pb-4">
            <p className="text-2xl font-bold">{card.title}</p>
            <p className="text-gray-600">
              {card.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
          </div>
          <p className="flex justify-center items-center bg-green-200  p-2 rounded-lg">
            <span className="text-green-700 font-semibold">{card.gains}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default TopCards;
