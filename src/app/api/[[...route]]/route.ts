import { pinoLogger } from "@/middlewares/pino-logger";
import { OpenAPIHono } from "@hono/zod-openapi";
import { PinoLogger } from "hono-pino";
import { handle } from "hono/vercel";
import { notFound, onError } from "stoker/middlewares";

type AppBindings = {
  Variables: {
    logger: PinoLogger;
  };
};

export const runtime = "nodejs";

const app = new OpenAPIHono<AppBindings>().basePath("/api");

app.use(pinoLogger());

app.get("/hello", (c) => {
  return c.json({
    message: "Hello Next.js with Hono and OpenAPI!",
  });
});

app.get("/error", (c) => {
  c.status(422);
  c.var.logger.info("Wow! Log here.");
  throw new Error("Oh no!");
});

app.notFound(notFound);
app.onError(onError);

export const GET = handle(app);
export const POST = handle(app);
