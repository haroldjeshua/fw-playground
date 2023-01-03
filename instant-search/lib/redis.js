import { Client, Entity, Schema, Repository } from "redis-om";

const client = new Client();

async function connect() {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_URL);
  }
}

// Data Model
class Car extends Entity {}
let schema = new Schema(Car, {
  make: { type: "string" },
  model: { type: "string" },
  image: { type: "string" },
  description: { type: "stirng" },
});
