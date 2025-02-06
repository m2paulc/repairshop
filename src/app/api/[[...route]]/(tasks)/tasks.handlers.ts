import {
  CreateRoute,
  GetByIdRoute,
  ListRoute,
  removeRoute,
  updateRoute,
} from "./tasks.routes";
import { AppRouteHandler } from "@/lib/types";
import { db } from "@/db";
import { tasksTable } from "@/db/schema";
import * as HttpStatusCodes from "stoker/http-status-codes";
import * as HttpStatusPhrases from "stoker/http-status-phrases";
import { eq } from "drizzle-orm";
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

export const getByIdHandler: AppRouteHandler<GetByIdRoute> = async (c) => {
  const { id } = c.req.valid("param");
  const [task] = await db
    .select()
    .from(tasksTable)
    .where(eq(tasksTable.id, id));
  if (!task) {
    return c.json(
      { message: HttpStatusPhrases.NOT_FOUND },
      HttpStatusCodes.NOT_FOUND
    );
  }
  return c.json(task, HttpStatusCodes.OK);
};

export const updateHandler: AppRouteHandler<updateRoute> = async (c) => {
  const { id } = c.req.valid("param");
  // const { title, description, done } = c.req.valid("json");
  const updatefields = c.req.valid("json");
  const [updatedTask] = await db
    .update(tasksTable)
    .set(updatefields)
    .where(eq(tasksTable.id, id))
    .returning();
  if (!updatedTask) {
    return c.json(
      { message: HttpStatusPhrases.NOT_FOUND },
      HttpStatusCodes.NOT_FOUND
    );
  }
  return c.json(updatedTask, HttpStatusCodes.OK);
};

export const removeHandler: AppRouteHandler<removeRoute> = async (c) => {
  const { id } = c.req.valid("param");
  const deletedTask = await db.delete(tasksTable).where(eq(tasksTable.id, id));
  if (deletedTask.rowCount === 0) {
    return c.json(
      { message: HttpStatusPhrases.NOT_FOUND },
      HttpStatusCodes.NOT_FOUND
    );
  }
  return c.body(null, HttpStatusCodes.NO_CONTENT);
};
