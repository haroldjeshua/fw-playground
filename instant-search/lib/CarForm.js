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
    <form onSubmit={handleSubmit}>
      <input type="text" name="make" />
      <input type="text" name="model" />
      <input type="text" name="image" />
      <textarea name="description"></textarea>

      <button type="submit">Create Car</button>
    </form>
  );
};

export default CarForm;
