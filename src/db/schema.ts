import { boolean, serial, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const tasksTable = pgTable("tasks", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  done: boolean("done").notNull().default(false),
  createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),
});

export const selectTasksSchema = createSelectSchema(tasksTable);

export const insertTasksSchema = createInsertSchema(tasksTable, {
  title: z.string().min(1).max(255),
  description: z.string().min(1),
  done: z.boolean().default(false),
}).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
