import type { Config } from "drizzle-kit";

export default {
  schema: "./database/schema/*",
  out: "./database/migration",
  driver: 'pg',
  dbCredentials: {
    user: "root",
    password: "root",
    host: "127.0.0.1",
    port: 5432,
    database: "dev-db",
  }
} satisfies Config;
