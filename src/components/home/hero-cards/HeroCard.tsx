"use client";

import { iYTCard } from "@/lib/types";
import Image from "next/image";
import {
	Dialog,
	DialogClose,
	DialogOverlay,
	DialogTrigger,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroCard = ({ imgHref, ytHref, title }: iYTCard) => {
	return (
		<div className="flex flex-col items-center">
			<div className="h-[300[px]] w-[300px]">
				<Dialog>
					<DialogTrigger asChild>
						<Image
							src={imgHref}
							alt="demo image"
							width={500}
							height={500}
							className="rounded-lg"
						/>
					</DialogTrigger>
					<DialogOverlay className="flex items-center justify-center">
						<div className="w-full md:w-[500px]">
							<iframe
								className="aspect-video w-full"
								src={ytHref}
								frameBorder="0"
							/>
						</div>
						<DialogClose className="absolute right-50 top-24">
							<Button size="icon">
								<X className="h-5 w-5" />
							</Button>
						</DialogClose>
					</DialogOverlay>
				</Dialog>
			</div>
			<p className="font-subHeading text-xl">{title}</p>
		</div>
	);
};
