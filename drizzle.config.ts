import type { Config } from "drizzle-kit";

export default {
  schema: "./database/schema/*",
  out: "./database/migration",
  driver: 'pg',
  dbCredentials: {
    database: String(process.env.DB_NAME),
    host: String(process.env.DB_HOST),
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  }
} satisfies Config;
