
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";

const client = new pg.Client({
    host: "127.0.0.1",
    port: 5432,
    user: "root",
    password: "root",
    database: "dev-db",
  });

client.connect();  
export default drizzle(client);