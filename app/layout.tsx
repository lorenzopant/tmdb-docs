import { ThemeProvider } from "@/components/contexts/theme-provider";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "@lorenzopant: TMDB Wrapper Docs",
	metadataBase: new URL("https://ariadocs.vercel.app/"),
	description:
		"This comprehensive documentation template, crafted with Next.js and available as open-source, delivers a sleek and responsive design, tailored to meet all your project documentation requirements.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
			</head>
			<body className={`font-regular antialiased tracking-wide`} suppressHydrationWarning>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					<Navbar />
					<main className="sm:container mx-auto w-[90vw] h-auto scroll-smooth">{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
