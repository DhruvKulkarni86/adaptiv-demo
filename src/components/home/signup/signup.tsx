import { EmailForm } from "./email-form";

export const SignUp = () => {
	return (
		<div className="flex flex-col justify-center items-center gap-2 py-20 pb-24">
			<p className="font-medium">Signup for our beta</p>
			<EmailForm />
		</div>
	);
};
