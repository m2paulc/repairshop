import { ListRoute } from "./tasks.routes";
import { AppRouteHandler } from "@/lib/types";
import { db } from "@/db";
import { tasksTable } from "@/db/schema";

export const listHandler: AppRouteHandler<ListRoute> = async (c) => {
  const tasks = await db.select().from(tasksTable);
  return c.json(tasks);
};
