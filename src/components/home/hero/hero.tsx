//the main hero section component

import { HeroCards } from "@/static/home";
import { HeroCard } from "../hero-cards/HeroCard";
import { SignUp } from "../signup/signup";

export const Hero = () => {
	return (
		<div className="flex flex-col text-center gap-10 items-center py-10">
			<div className="flex flex-col gap-3 items-center">
				<h1 className="text-xl md:text-3xl font-heading font-semibold">
					Adapt for the world we live in
				</h1>
				<h2 className="text-base text-pretty  font-subHeading font-normal">
					Take action to address the world&apos;s most pressing
					challenges. Start by choosing a theme
				</h2>
				<div className="flex  flex-wrap md:flex-row gap-10 justify-center items-center">
					{HeroCards.map((card) => (
						<HeroCard
							key={card.title}
							title={card.title}
							imgHref={card.imgHref}
							ytHref={card.ytHref}
						/>
					))}
				</div>
			</div>

			<p className="text-xl md:text-3xl font-heading font-semibold">
				Signup to join a growing community of people who are Adaptiv
			</p>
			<SignUp />
		</div>
	);
};
