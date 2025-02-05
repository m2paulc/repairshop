import { handle } from "hono/vercel";
import createApp from "@/lib/create-app";
import configureOpenAPI from "@/lib/configure-open-api";
import index from "./index.route";

export const runtime = "nodejs";

const app = createApp();

// routes
const routes = [index];

// documentation endpoint
configureOpenAPI(app);

routes.forEach((route) => {
  app.route("/", route);
});

// app.get("/hello", (c) => {
//   return c.json({
//     message: "Hello Next.js with Hono and OpenAPI!",
//   });
// });

// app.get("/api/error", (c) => {
//   c.status(422);
//   c.var.logger.info("Wow! Log here.");
//   throw new Error("Oh no!");
// });

export const GET = handle(app);
export const POST = handle(app);
