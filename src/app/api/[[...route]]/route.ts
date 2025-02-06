import { handle } from "hono/vercel";
import createApp from "@/lib/create-app";
import configureOpenAPI from "@/lib/configure-open-api";
import tasks from "./(tasks)/tasks.index";
export const runtime = "nodejs";

const app = createApp();

// documentation endpoint
configureOpenAPI(app);

// routes
const routes = app.route("/api/tasks", tasks);

export const GET = handle(app);
export const POST = handle(app);
