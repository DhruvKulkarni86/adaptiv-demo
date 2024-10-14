"use client";

//a CLIENT component to generate email form

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { submitEmailAction } from "@/actions";

export const EmailForm = () => {
	const [email, setEmail] = useState("");
	const [submit, setSubmit] = useState(false);
	const [error, setError] = useState("");

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const res = await submitEmailAction(formData);
		console.log("RS", res);
		if (res && res.error) {
			toast.error(res.error);
		} else {
			setError("");
			toast.success("Signed up successfully!");
			setSubmit(true);
		}
	};

	return (
		<div className="flex flex-col w-full max-w-sm items-center space-x-0">
			<form onSubmit={handleSubmit} className="flex">
				<Input
					type="email"
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					disabled={submit}
					className="rounded-none rounded-l-[50px] focus:outline-none focus:ring-0 "
					required
					placeholder="Input your email"
				/>
				<Button
					disabled={submit}
					className="bg-orange-400 rounded-none rounded-r-[50px]"
				>
					Sign Up
				</Button>
			</form>
			<p className="text-sm font-light self-start px-3 text-red-600">
				{error !== "" && error}
			</p>
		</div>
	);
};
