// Logo component, can be used with or without link to home

import Image from "next/image";
import Link from "next/link";

interface AdaptivLogoProps {
	link?: boolean;
}

export const AdaptivLogo = ({ link }: AdaptivLogoProps) => {
	return (
		<div>
			{link ? (
				<Link href="/">
					<Image
						src={"/adaptiv-logo.png"}
						alt="Adaptive.Me logo"
						height={50}
						width={100}
						priority
						className="w-full"
					/>
				</Link>
			) : (
				<Image
					src={"/adaptiv-logo.png"}
					alt="Adaptive.Me logo"
					height={50}
					width={100}
					priority
					className="w-full"
				/>
			)}
		</div>
	);
};
