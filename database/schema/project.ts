import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const projects = pgTable('projects', {
  id: serial('id').primaryKey(),
  title: text('title'),
  description: text('description'),
});
