"use server";
import { revalidatePath } from "next/cache";
import { db } from "../db";
import { beta } from "../db/schema";
import { z } from "zod";
import { SqliteError } from "better-sqlite3";

//validating email
const emailSchema = z.object({
	email: z.string().email("Invalid email format"),
});

export const submitEmailAction = async (formData: FormData) => {
	const { email } = emailSchema.parse({ email: formData.get("email") });
	try {
		await db.insert(beta).values({
			email,
		});
		return {
			success: true,
			message: "Email successfully submitted!",
		};
	} catch (err) {
		if (err instanceof SqliteError) {
			return {
				success: false,
				error: err.message,
			};
		}
	}

	revalidatePath("/");
};
