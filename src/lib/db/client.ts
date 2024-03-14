import { DATABASE_URL } from "$env/static/private";
import pg from "pg";
const { Client } = pg;

export const newDbClient = async () => {
  const dbClient = new Client({
    connectionString: DATABASE_URL,
  });
  await dbClient.connect();
  return dbClient;
};
