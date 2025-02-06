import { CreateRoute, ListRoute } from "./tasks.routes";
import { AppRouteHandler } from "@/lib/types";
import { db } from "@/db";
import { tasksTable } from "@/db/schema";
import * as HttpStatusCodes from "stoker/http-status-codes";

export const listHandler: AppRouteHandler<ListRoute> = async (c) => {
  const tasks = await db.select().from(tasksTable);
  return c.json(tasks);
};

export const createHandler: AppRouteHandler<CreateRoute> = async (c) => {
  const { title, description, done } = c.req.valid("json");
  const [insertedTask] = await db
    .insert(tasksTable)
    .values({ title, description, done })
    .returning();

  return c.json(insertedTask, HttpStatusCodes.OK);
};
