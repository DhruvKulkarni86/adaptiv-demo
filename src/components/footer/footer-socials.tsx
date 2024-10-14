//This component generates all the social links, controlled by static file found in static folder

import { cn } from "@/lib/utils";
import { footerSocials } from "@/static/footer";

export const FooterSocials = () => {
	//coloring icons as per the logo
	const getColorClass = (name?: string) => {
		switch (name) {
			case "twitter":
				return "text-cyan-400";
			case "facebook":
				return "text-blue-500";
			case "linkedin":
				return "text-sky-500";
			case "youtube":
				return "text-rose-700";
			default:
				return "text-gray-400";
		}
	};
	return (
		<div className="flex gap-5">
			{footerSocials.map((sc) => (
				<a
					key={sc.link}
					href={sc.link}
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className={cn(getColorClass(sc.name))}>{sc.icon}</div>
				</a>
			))}
		</div>
	);
};
