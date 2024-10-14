import { FooterLinks } from "./footer-links";
import { FooterSocials } from "./footer-socials";

export const Footer = () => {
	return (
		<footer className="p-2 py-5 border-t-[1px] text-white font-footer font-light">
			<div className="flex md:flex-row flex-col justify-between items-center w-full lg:max-w-screen-lg mx-auto px-2 gap-5 md:gap-0">
				<div className="flex items-center md:ml-auto flex-col gap-1 md:flex-row">
					<p className="text-sm tracking-tight">
						&#169; 2024 Adaptiv Inc.{" "}
					</p>
					<FooterLinks />
				</div>
				<div className="md:ml-auto">
					<FooterSocials />
				</div>
			</div>
		</footer>
	);
};
