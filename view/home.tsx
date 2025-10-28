"use client";

import { useRef, useEffect, useState } from "react";
import { cn, GeneralSans_Regular, GeneralSans_SemiBold } from "@/lib";
import { BlurText, DotPattern, FadeContent, LogoLoop, TextGenerateEffect } from "@/components/export";
import { Button } from "@heroui/react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNestjs, SiExpress, SiPostgresql, SiMysql, SiMongodb, SiDocker, SiKubernetes, SiVercel, SiRailway, SiNetlify } from "react-icons/si";

const techLogos = [
	{ node: <SiReact />, title: "React", href: "https://react.dev" },
	{ node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
	{ node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
	{ node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
	{ node: <SiNestjs />, title: "NestJS", href: "https://nestjs.com" },
	{ node: <SiExpress />, title: "Express.js", href: "https://expressjs.com" },
	{ node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
	{ node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
	{ node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
	{ node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
	{ node: <SiKubernetes />, title: "Kubernetes", href: "https://kubernetes.io" },
	{ node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
	{ node: <SiRailway />, title: "Railway", href: "https://railway.com" },
	{ node: <SiNetlify />, title: "Netlify", href: "https://netlify.com" },
];

const words = `Over the years, I’ve turned ideas into products using:`;

// Hook to fade in as the #next-section enters viewport
function useFadeInOnView(threshold: number = 0.33) {
	const ref = useRef<HTMLElement | null>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		if (!ref.current) return;
		const handle = (entries: IntersectionObserverEntry[]) => {
			if (entries[0].isIntersecting) {
				setVisible(true);
			}
		};
		const observer = new window.IntersectionObserver(handle, {
			threshold,
		});
		observer.observe(ref.current);
		return () => observer.disconnect();
	}, [threshold]);
	return { ref, visible };
}

const HomeView = () => {
	// Smooth scroll handler to #next-section
	const handleScrollDown = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
		e.preventDefault();
		const el = document.getElementById("next-section");
		if (el) {
			el.scrollIntoView({ behavior: "smooth" });
		}
	};

	const { ref: nextSectionRef, visible: isNextSectionVisible } = useFadeInOnView(0.33);

	return (
		<>
			<section className="relative flex min-h-screen h-dvh w-full items-center justify-center overflow-hidden px-3 md:px-8 py-8 box-border">
				<DotPattern className={cn("[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]", "absolute inset-0")} />
				<div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
					<div className="flex flex-col items-center justify-center w-full h-full">
						<FadeContent
							blur={true}
							duration={2000}
							easing="ease-out"
							initialOpacity={0}
							className="w-full h-full flex flex-col justify-center">
							<div className="flex flex-col items-center w-full">
								<BlurText
									text="I turn imaginations into interactions you can feel."
									delay={150}
									animateBy="words"
									direction="top"
									className={cn("text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-xs sm:max-w-lg md:max-w-2xl text-center leading-tight", GeneralSans_SemiBold.className)}
								/>
								<p className={cn("text-base sm:text-lg md:text-xl lg:text-2xl max-w-xs sm:max-w-lg md:max-w-2xl mx-auto text-start leading-relaxed mt-6 sm:mt-8", GeneralSans_Regular.className)}>
									I'm an experienced software engineer that turns ideas into fast, secure experiences that <b>saves money</b>, attract users, and rise to the top of web search — because great code doesn’t just work; it wins.
								</p>
							</div>
							{/* Mobile (below content, centered). Desktop: handled later as absolute at screen bottom */}
							<div className="w-full flex justify-center">
								<button
									type="button"
									onClick={handleScrollDown}
									className="animate-bounce flex flex-col items-center text-gray-500 dark:text-gray-300 mt-8 mb-2 sm:hidden focus:outline-none"
									aria-label="Scroll Down">
									<ChevronDown
										className="w-7 h-7 mb-1"
										strokeWidth={2.2}
									/>
									<span className="text-xs font-medium">Scroll Down</span>
								</button>
							</div>
							{/* Desktop (absolute at bottom of h-screen, centralized) */}
							<div className="hidden sm:flex pointer-events-none">
								<button
									type="button"
									onClick={handleScrollDown}
									className="pointer-events-auto animate-bounce flex flex-col items-center text-gray-500 dark:text-gray-300 absolute left-1/2 -translate-x-1/2 bottom-6 focus:outline-none"
									aria-label="Scroll Down"
									style={{ position: "absolute" }}>
									<ChevronDown
										className="w-8 h-8 mb-1"
										strokeWidth={2.2}
									/>
									<span className="text-sm font-medium">Scroll Down</span>
								</button>
							</div>
						</FadeContent>
					</div>
				</div>
			</section>

			<section
				id="next-section"
				ref={nextSectionRef}
				className={cn("relative bg-black text-white py-24 flex w-full overflow-hidden px-3 md:px-8 box-border transition-opacity duration-1000", isNextSectionVisible ? "opacity-100" : "opacity-0")}
				style={{
					transitionProperty: "opacity,background-color",
					// opacity handles fade in, background is always black here
				}}>
				<div className="container mx-auto">
					<div>
						<TextGenerateEffect
							words={words}
							className="text-4xl text-white text-start leading-relaxed"
						/>

						<FadeContent
							blur={true}
							duration={3500}
							easing="ease-out"
							initialOpacity={0}
							className="mt-10">
							<div className="mt-10">
								<li className={cn("text-2xl text-white text-start leading-relaxed", GeneralSans_Regular.className)}>Frontend Web Development — React , Next.js , Tailwind CSS , Shadcn UI</li>
								<li className={cn("text-2xl  text-white text-start leading-relaxed", GeneralSans_Regular.className)}>Backend Web Development — NestJS, Node.js , Express.js, PostgreSQL , Prisma ORM, MySQL, MongoDB</li>
								<li className={cn("text-2xl  text-white text-start leading-relaxed", GeneralSans_Regular.className)}>DevOps — Docker , Kubernetes , AWS , GCP, Coolify, Vercel, Railway, Netlify, VDS/VPS</li>
								<li className={cn("text-2xl  text-white text-start leading-relaxed", GeneralSans_Regular.className)}>Server Setup — Caddy , Nginx , Apache</li>
								<li className={cn("text-2xl  text-white text-start leading-relaxed", GeneralSans_Regular.className)}>AI — LangChain , n8n, Vercel AI SDK</li>
							</div>

							<div className="mt-16">
								<LogoLoop
									logos={techLogos}
									speed={50}
									direction="left"
									logoHeight={48}
									gap={80}
									pauseOnHover
									scaleOnHover
									fadeOut
									fadeOutColor="#000000"
									ariaLabel="Technology partners"
								/>
							</div>
						</FadeContent>
					</div>
				</div>
			</section>
		</>
	);
};

export default HomeView;
