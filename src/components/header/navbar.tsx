import { AdaptivLogo } from "@/components/common/adaptiv-logo";
import { NavMenu } from "@/components/header/nav-menu";

export const Navbar = () => {
	return (
		<header className="p-2 border-b-[1px]">
			<nav className="flex flex-row justify-between items-center w-full lg:max-w-screen-lg mx-auto px-2">
				<AdaptivLogo link />
				<NavMenu />
			</nav>
		</header>
	);
};
