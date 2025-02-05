import { createRouter } from "@/lib/create-app";
import { createRoute } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent } from "stoker/openapi/helpers";
import { createMessageObjectSchema } from "stoker/openapi/schemas";

const router = createRouter().openapi(
  createRoute({
    tags: ["API"],
    path: "/api",
    method: "get",
    responses: {
      [HttpStatusCodes.OK]: jsonContent(
        createMessageObjectSchema("Hello Next.js with Hono and OpenAPI!"),
        "API Route Handler"
      ),
    },
  }),
  //handler
  (c) => {
    return c.json(
      {
        message: "API Root Route",
      },
      HttpStatusCodes.OK
    );
  }
);

export default router;
