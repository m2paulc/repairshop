import { handle } from "hono/vercel";
import createApp from "@/lib/create-app";
import configureOpenAPI from "@/lib/configure-open-api";
import api from "./index.api";
import tasks from "./(tasks)/tasks.index";

export const runtime = "nodejs";

const app = createApp();

// documentation endpoint
configureOpenAPI(app);
// routes
const routes = [api, tasks] as const;

routes.forEach((route) => {
  app.route("/", route);
});

export const GET = handle(app);
export const POST = handle(app);
