import type { Config } from "drizzle-kit";

export default {
  schema: "./database/schema.ts",
  out: "./database/migration",
  dialect: "postgresql",
  dbCredentials: {
    database: String(process.env.DB_NAME),
    host: String(process.env.DB_HOST),
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  }
} satisfies Config;
