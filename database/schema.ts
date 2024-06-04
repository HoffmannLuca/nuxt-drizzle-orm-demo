import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const userTable = pgTable("user", {
	id: text("id").primaryKey()
});

export const sessionTable = pgTable("session", {
	id: text("id").primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => userTable.id),
	expiresAt: timestamp("expires_at", {
		withTimezone: true,
		mode: "date"
	}).notNull()
});

export const projects = pgTable('projects', {
  id: serial('id').primaryKey(),
  title: text('title'),
  description: text('description'),
});
