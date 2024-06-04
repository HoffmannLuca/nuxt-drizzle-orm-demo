import { drizzle } from "drizzle-orm/node-postgres";
import pg from 'pg';

const client = new pg.Client({
    connectionString: process.env.DATABASE_URL || 'postgresql://root:root@localhost:5432/dev-db',
    ssl: process.env.DATABASE_URL ? true : false
});

client.connect();  
export default drizzle(client);