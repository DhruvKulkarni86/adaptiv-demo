import { defineConfig } from "drizzle-kit";

export default defineConfig({
	dialect: "sqlite",
	dbCredentials: {
		url: "db.sqlite3",
	},
	schema: "./db/schema.ts",
	out: "./db/migrations",
});
