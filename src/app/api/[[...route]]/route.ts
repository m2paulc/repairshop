import { handle } from "hono/vercel";
import createApp from "@/lib/create-app";

export const runtime = "nodejs";

const app = createApp();
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

export const GET = handle(app);
export const POST = handle(app);
