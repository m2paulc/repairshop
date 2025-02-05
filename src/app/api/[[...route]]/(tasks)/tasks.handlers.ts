import { ListRoute } from "./tasks.routes";
import { AppRouteHandler } from "@/lib/types";

export const listHandler: AppRouteHandler<ListRoute> = (c) => {
  const logger = c.var.logger;
  logger.info("Listing tasks");
  return c.json([
    {
      title: "Learn Hono",
      description: "Incorporate Hono into a project",
      done: false,
    },
    {
      title: "Learn Zod",
      description: "Learn how to validate data with Zod",
      done: false,
    },
  ]);
};
