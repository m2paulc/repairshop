import { describe, it, expect, expectTypeOf } from "vitest";
import { testApp } from "../route";
import { testClient } from "hono/testing";
import * as HttpStatusPhrases from "stoker/http-status-phrases";
import { ZOD_ERROR_MESSAGES } from "@/lib/constants";

const client = testClient(testApp);

describe("Tasks API Testing", () => {
  it("should return a list of tasks", async () => {
    const response = await client.api.tasks.$get();
    console.log(response);
    expect(response.status).toBe(200);
    if (response.status === 200) {
      const json = await response.json();
      expectTypeOf(json).toBeArray();
      expect(json.length).toBeGreaterThan(0);
    }
  });

  it("should create a task", async () => {
    const response = await client.api.tasks.$post({
      json: {
        title: "Test task",
        description: "Test description",
      },
    });
    console.log(response);
    expect(response.status).toBe(200);
    if (response.status === 200) {
      const json = await response.json();
      expectTypeOf(json).toBeObject();
      expect(json.title).toBe("Test task");
      expect(json.description).toBe("Test description");
    }
  });

  it("get task by id - validates the id param", async () => {
    const response = await client.api.tasks[":id"].$get({
      param: {
        // @ts-expect-error
        id: "wat",
      },
    });
    expect(response.status).toBe(422);
    if (response.status === 422) {
      const json = await response.json();
      expect(json.error.issues[0].path[0]).toBe("id");
      expect(json.error.issues[0].message).toBe(
        ZOD_ERROR_MESSAGES.EXPECTED_NUMBER
      );
    }
  });

  it("get /tasks/{id} returns 404 when task not found", async () => {
    const response = await client.api.tasks[":id"].$get({
      param: {
        id: 999,
      },
    });
    expect(response.status).toBe(404);
    if (response.status === 404) {
      const json = await response.json();
      expect(json.message).toBe(HttpStatusPhrases.NOT_FOUND);
    }
  });

  it("get task by id - returns a single task", async () => {
    const response = await client.api.tasks[":id"].$get({
      param: {
        id: 18,
      },
    });
    expect(response.status).toBe(200);
    if (response.status === 200) {
      const json = await response.json();
      expect(json.title).toBe("Learn OpenAPI");
    }
  });

  it("update task by id - updates a single task properly", async () => {
    const response = await client.api.tasks[":id"].$patch({
      param: {
        id: 18,
      },
      json: {
        done: true,
      },
    });
    expect(response.status).toBe(200);
    if (response.status === 200) {
      const json = await response.json();
      expect(json.done).toBe(true);
    }
  });

  it("update task by id - returns 404 when task not found", async () => {
    const response = await client.api.tasks[":id"].$patch({
      param: {
        id: 19,
      },
      json: {
        done: true,
      },
    });
    expect(response.status).toBe(404);

    if (response.status === 404) {
      const json = await response.json();
      expect(json.message).toBe(HttpStatusPhrases.NOT_FOUND);
    }
  });

  it("delete task by id - validates the id when deleting", async () => {
    const response = await client.api.tasks[":id"].$delete({
      param: {
        // @ts-expect-error
        id: "wat",
      },
    });
    expect(response.status).toBe(422);
    if (response.status === 422) {
      const json = await response.json();
      expect(json.error.issues[0].path[0]).toBe("id");
      expect(json.error.issues[0].message).toBe(
        ZOD_ERROR_MESSAGES.EXPECTED_NUMBER
      );
    }
  });

  it("delete task by id - removes a single task properly", async () => {
    const response = await client.api.tasks[":id"].$delete({
      param: {
        id: 35,
      },
    });
    expect(response.status).toBe(204);
  });
});
