const CarForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 💩
    // body: JSON.stringify({
    //   make: e.target.name.value,
    //   model: e.target.model.value,
    //   color: e.target.color.value,
    //   year: e.target.year.value,
    //   description: e.target.description.value,
    // });

    // hot trick to convert the form to JSON better
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries()); // convert form data to object
    // should match redis db schema

    const res = await fetch("/api/cars", {
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <input type="text" name="make" />
    //   <input type="text" name="model" />
    //   <input type="text" name="image" />
    //   <textarea name="description"></textarea>

    //   <button type="submit">Create Car</button>
    // </form>
    <form onSubmit={handleSubmit}>
      <div className="card w-96 bg-base-100 p-4 shadow-xl border-2 border-current">
        <div className="form-control mb-4">
          <label className="input-group">
            <span>Make</span>
            <input
              type="text"
              name="make"
              className="input input-bordered w-[100%]"
            />
          </label>
        </div>
        <div className="form-control mb-4">
          <label className="input-group">
            <span>Model</span>
            <input
              type="text"
              name="model"
              className="input input-bordered w-[100%]"
            />
          </label>
        </div>
        <div className="form-control mb-4">
          <label className="input-group">
            <span>Image</span>
            <input
              type="text"
              name="image"
              className="input input-bordered w-[100%]"
            />
          </label>
        </div>
        <div className="form-control mb-4">
          <label className="input-group">
            <span>Description</span>
            <textarea
              name="description"
              className="textarea textarea-bordered w-[100%]"
            ></textarea>
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Create a Car
        </button>
      </div>
    </form>
  );
};

export default CarForm;
