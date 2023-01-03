import { useState } from "react";

const CarForm = () => {
  const [hits, setHits] = useState([]); //result from search API

  const search = async (e) => {
    const q = e.target.value;

    if (q.length > 2) {
      const params = new URLSearchParams({ q });

      const res = await fetch("/api/search?" + params);

      const result = await res.json();
      console.log(result);
      setHits(result["cars"]);
    }
  };

  return (
    <div className="card w-96 bg-base-100 p-4 shadow-xl border-2 border-current">
      <div className="form-control mb-4">
        <label className="input-group">
          <span>Search</span>
          <input
            type="search"
            name="search"
            className="input input-bordered w-[100%]"
            onChange={search}
          />
        </label>
      </div>

      {/* <ul>
        {hits.map((hit) => (
          <li key={hit.entityId}>
            {hit.make} {hit.model}
          </li>
        ))}
      </ul> */}

      {hits.map((hit) => (
        <div
          className="alert flex-col justify-start shadow-lg"
          key={hit.entityId}
        >
          <div className="flex item-center">
            <img
              src={hit.image}
              alt={hit.make}
              className="w-[100%] object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-3xl font-semibold capitalize">
              {hit.make} {hit.model}
            </h3>
            <p className="font-light">{hit.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarForm;
