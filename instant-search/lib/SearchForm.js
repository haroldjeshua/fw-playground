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

      <ul>
        {hits.map((hit) => (
          <li key={hit.entityId}>
            {hit.make} {hit.model}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarForm;
