import { z } from "zod";
import { createRoute } from "@hono/zod-openapi";
import { jsonContent } from "stoker/openapi/helpers";
import * as HttpStatusCodes from "stoker/http-status-codes";

const tags = ["Tasks"];

export const list = createRoute({
  path: "/api/tasks",
  method: "get",
  tags,
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          done: z.boolean(),
        })
      ),
      "List of To-Do Items"
    ),
  },
});

export type ListRoute = typeof list;
