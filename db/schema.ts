import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const beta = sqliteTable("Beta", {
	id: integer("id").primaryKey(),
	email: text("userEmail").notNull(),
});
