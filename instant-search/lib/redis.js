import { Client, Entity, Schema, Repository } from "redis-om";

const client = new Client();

async function connect() {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_URL);
  }
}

// Data Model: hash keys
class Car extends Entity {}
let schema = new Schema(
  Car,
  {
    make: { type: "string" },
    model: { type: "string" },
    image: { type: "string" },
    description: { type: "text", textSearch: true }, // fulltext search
  },
  {
    dataStructure: "JSON", // document oriented db
  }
);

export async function createCar(data) {
  await connect();

  //   const repository = new Repository(schema, client); // breaking change v0.2.0

  const repository = client.fetchRepository(schema);

  const car = repository.createEntity(data);

  const id = await repository.save(car);
  return id;
}

export async function createIndex() {
  await connect();

  const repository = client.fetchRepository(schema);
  await repository.createIndex();
}

export async function searchCars(q) {
  await connect();

  const repository = client.fetchRepository(schema);

  const cars = await repository
    .search()
    .where("make")
    .eq(q)
    .or("model")
    .eq(q)
    .or("description")
    .matches(q)
    .return.all();

  // ^ redisearch: pagination, aggregation,logic ++

  return cars;
}
