import type { Metadata } from "next";
import "./globals.css";
import { Inter, Archivo, Work_Sans, Manrope } from "next/font/google";
import { Navbar } from "@/components/header/navbar";
import { Footer } from "@/components/footer/footer";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});
const archivo = Archivo({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-archivo",
});
const worksans = Work_Sans({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-worksans",
});
const manrope = Manrope({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-manrope",
});

export const metadata: Metadata = {
	title: "Adaptiv.Me",
	description: "Adaptiv demo",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`antialiased ${inter.variable} ${archivo.variable} ${worksans.variable} ${manrope.variable} min-h-screen bg-background`}
			>
				<Navbar />
				<div className="min-h-fit">{children}</div>
				<Footer />
			</body>
		</html>
	);
}
