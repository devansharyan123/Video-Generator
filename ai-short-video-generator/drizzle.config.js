import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url: "postgresql://WEB%20PROJECTS_owner:LFKoc1wbPW0e@ep-shy-cloud-a5ffp9ym.us-east-2.aws.neon.tech/AI-SHORT-VIDEO-GENERATOR?sslmode=require",
  },
});
