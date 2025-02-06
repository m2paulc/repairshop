import { z } from "zod";
import { createRoute } from "@hono/zod-openapi";
import { jsonContent } from "stoker/openapi/helpers";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { selectTasksSchema } from "@/db/schema";

const tags = ["Tasks"];

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

export type ListRoute = typeof list;
