import { z } from "zod";
import { createRoute } from "@hono/zod-openapi";
import { jsonContent, jsonContentRequired } from "stoker/openapi/helpers";
import * as HttpStatusCodes from "stoker/http-status-codes";
import {
  insertTasksSchema,
  selectTasksSchema,
  updateTasksSchema,
} from "@/db/schema";
import { createErrorSchema, IdParamsSchema } from "stoker/openapi/schemas";
import { notFoundSchema } from "@/lib/constants";

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

// Get a task by ID
export const getById = createRoute({
  path: "/api/tasks/{id}",
  method: "get",
  tags,
  request: {
    params: IdParamsSchema,
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(selectTasksSchema, "Selected To-Do Item"),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(
      notFoundSchema,
      "To-Do Item not found"
    ),
    [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
      createErrorSchema(IdParamsSchema),
      "Invalid Id Error"
    ),
  },
});

// Update a task by ID
export const update = createRoute({
  path: "/api/tasks/{id}",
  method: "patch",
  tags,
  request: {
    params: IdParamsSchema,
    body: jsonContentRequired(updateTasksSchema, "Update To-Do Item"),
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(selectTasksSchema, "Updated To-Do Item"),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(notFoundSchema, "Task not Found"),
    [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
      createErrorSchema(updateTasksSchema).or(
        createErrorSchema(IdParamsSchema)
      ),
      "Validation Error(s)"
    ),
  },
});

// Delete a task by ID
export const remove = createRoute({
  path: "/api/tasks/{id}",
  method: "delete",
  tags,
  request: {
    params: IdParamsSchema,
  },
  responses: {
    [HttpStatusCodes.NO_CONTENT]: { description: "Task Deleted" },
    [HttpStatusCodes.NOT_FOUND]: jsonContent(
      createErrorSchema(IdParamsSchema),
      "Task not Found"
    ),
  },
});

export type ListRoute = typeof list;
export type CreateRoute = typeof create;
export type GetByIdRoute = typeof getById;
export type updateRoute = typeof update;
export type removeRoute = typeof remove;
