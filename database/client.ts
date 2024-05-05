import drizzleConfig from "~/drizzle.config";
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";

const client = new pg.Client({
    database: drizzleConfig.dbCredentials.database,
    host: drizzleConfig.dbCredentials.host,
    port: drizzleConfig.dbCredentials.port,
    user: drizzleConfig.dbCredentials.user,
    password: drizzleConfig.dbCredentials.password,
});

client.connect();  
export default drizzle(client);