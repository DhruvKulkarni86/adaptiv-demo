//index file for Drizzle orm

import { BetterSQLite3Database, drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
const sqlite = new Database("db.sqlite3");
export const db: BetterSQLite3Database = drizzle(sqlite);
