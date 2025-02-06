import { z } from "zod";
import { createRoute } from "@hono/zod-openapi";
import { jsonContent, jsonContentRequired } from "stoker/openapi/helpers";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { insertTasksSchema, selectTasksSchema } from "@/db/schema";
import { createErrorSchema } from "stoker/openapi/schemas";

const tags = ["Tasks"];

// List all tasks
export const list = createRoute({
  path: "/api/tasks",
  method: "get",
  tags,
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.array(selectTasksSchema),
      "List of To-Do Items"
    ),
  },
});

// Create a new task
export const create = createRoute({
  path: "/api/tasks",
  method: "post",
  tags,
  request: {
    body: jsonContentRequired(insertTasksSchema, "Create To-Do Item"),
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(selectTasksSchema, "Created To-Do Item"),
    [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
      createErrorSchema(insertTasksSchema),
      "Validation Error"
    ),
  },
});

export type ListRoute = typeof list;
export type CreateRoute = typeof create;
