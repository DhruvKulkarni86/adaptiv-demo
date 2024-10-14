import { footerLinks } from "@/static/footer";
import Link from "next/link";

export const FooterLinks = () => {
	return (
		<div className="flex text-sm gap-5 md:gap-1 font-light">
			{footerLinks.map((link) => (
				<Link key={link.name} href={link.link}>
					<p>&#8226;{link.name}</p>
				</Link>
			))}
		</div>
	);
};
