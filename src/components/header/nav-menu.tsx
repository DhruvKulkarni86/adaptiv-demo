// Nav menu - Insert various links/components for nav menu

import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export const NavMenu = () => {
	return (
		<div className="flex flex-row sm:gap-5 gap-2 justify-center items-center">
			<Button size="icon">
				<Globe className="h-4 w-4" />
			</Button>
		</div>
	);
};
