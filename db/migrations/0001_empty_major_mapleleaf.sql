PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_Beta` (
	`id` integer PRIMARY KEY NOT NULL,
	`userEmail` text NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_Beta`("id", "userEmail") SELECT "id", "userEmail" FROM `Beta`;--> statement-breakpoint
DROP TABLE `Beta`;--> statement-breakpoint
ALTER TABLE `__new_Beta` RENAME TO `Beta`;--> statement-breakpoint
PRAGMA foreign_keys=ON;