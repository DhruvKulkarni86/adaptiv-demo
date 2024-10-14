import { iFooterLinks, iFooterSocials } from "@/lib/types";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export const footerLinks: iFooterLinks[] = [
	{
		name: "Privacy",
		link: "",
	},
	{
		name: "Terms",
		link: "",
	},
];

export const footerSocials: iFooterSocials[] = [
	{
		name: "twitter",
		link: "https://x.com/",
		icon: <FaTwitter className="h-4 w-4" />,
	},
	{
		name: "facebook",
		link: "https://www.facebook.com/",
		icon: <FaFacebook className="h-4 w-4" />,
	},
	{
		name: "linkedin",
		link: "https://www.linkedin.com/",
		icon: <FaLinkedin className="h-4 w-4" />,
	},
	{
		name: "youtube",
		link: "https://www.youtube.com/",
		icon: <FaYoutube className="h-4 w-4 " />,
	},
];
