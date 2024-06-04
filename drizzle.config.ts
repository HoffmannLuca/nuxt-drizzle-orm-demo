import { defineConfig } from "drizzle-kit"

export default defineConfig({
  schema: "./database/schema.ts",
  out: "./database/migration",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL || 'postgresql://root:root@localhost:5432/dev-db',
    ssl: process.env.DATABASE_URL ? true : false
  },
  migrations: {
      table: "migrations",
      schema: "public"
  }
});
