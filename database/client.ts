import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";

const client = new pg.Client({
  connectionString: String(process.env.DATABASE_URL),
});

client.connect();
export default drizzle(client);
