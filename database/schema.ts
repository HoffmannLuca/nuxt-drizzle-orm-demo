import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
import { relations } from "drizzle-orm/relations";

// User
export const user = pgTable("user", {
	id: text("id").primaryKey(),
	email: text("email").notNull().unique(),
	password_hash: text("password_hash").notNull()
});

export const userRelations = relations(user, ({many}) => ({
	sessions: many(sessions),
}));

// Sessions
export const sessions = pgTable("session", {
	id: text("id").primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => user.id),
	expiresAt: timestamp("expires_at", {
		withTimezone: true,
		mode: "date"
	}).notNull()
});

export const sessionRelations = relations(sessions, ({one}) => ({
	user: one(user, {
		fields: [sessions.userId],
		references: [user.id]
	}),
}));

// Projects
export const projects = pgTable('projects', {
  id: serial('id').primaryKey(),
  title: text('title'),
  description: text('description'),
});
