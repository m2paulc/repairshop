import { AppOpenAPI } from "./types";
import packageJson from "../../package.json" with { type: "json" };
import {apiReference} from "@scalar/hono-api-reference"

export default function configureOpenAPI(app: AppOpenAPI) {
    app.doc("/api/doc", {
        openapi: "3.1.0",
        info: {
            title: "API Doc using OpenAPI",
            version: packageJson.version,
            description: "API for the application",
        },
        
    })
    .get("/api/reference", apiReference({
        theme: "kepler",
        layout: "classic",
        defaultHttpClient: {
            targetKey: "js",
            clientKey: "fetch",
        },
        spec: {
            url: "/api/doc",
        }
    }))
}
