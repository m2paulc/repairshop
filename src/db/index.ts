// Make sure to install the 'pg' package
import env from "@/env";
import { drizzle } from "drizzle-orm/node-postgres";
import { tasksTable } from "./schema";
import { eq } from "drizzle-orm";

// You can specify any property from the node-postgres connection options
export const db = drizzle(env.DATABASE_URL!);

async function main() {
  const task: typeof tasksTable.$inferInsert = {
    title: "Paul",
    description: "Paul is a good person",
    done: true,
  };

  const result = await db.insert(tasksTable).values(task);
  console.log("New task created", result);

  const tasks = await db.select().from(tasksTable);
  console.log("All tasks", tasks);

  await db
    .update(tasksTable)
    .set({ description: "Learning Drizzle" })
    .where(eq(tasksTable.title, task.title));

  const updatedTasks = await db.select().from(tasksTable);
  console.log("Updated tasks", updatedTasks);
}

main();
