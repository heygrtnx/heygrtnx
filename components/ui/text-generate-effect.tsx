"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
import { GeneralSans_Regular } from "@/lib";

// Simple in-view hook using Intersection Observer API
import { useState, useRef } from "react";

// Regex: matches HTML tags or words (preserves <b>, <u>, <mark>, <span>, etc.)
const TAG_OR_WORD_REGEX = /(<(u|b|mark|span)[^>]*>[^<]*<\/\2>|<(u|b|mark|span)[^>]*>|<\/(u|b|mark|span)>|[^\s<]+)/gi;

function useInView(ref: React.RefObject<HTMLElement>, options: IntersectionObserverInit = { threshold: 0.2 }): boolean {
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const node = ref.current;
		if (!node) return;
		const obs = new window.IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				setInView(true);
			}
		}, options);
		obs.observe(node);
		return () => {
			obs.disconnect();
		};
		// eslint-disable-next-line
	}, [ref, options.threshold]);

	return inView;
}

export const TextGenerateEffect = ({ words, className, filter = true, duration = 0.5 }: { words: string; className?: string; filter?: boolean; duration?: number }) => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [scope, animate] = useAnimate();
	const inView = useInView(containerRef as React.RefObject<HTMLElement>);

	// Split on: HTML tags (open/close/self-close, supports <b>, <u>, <mark>, <span>) or words
	const wordsArray = words.match(TAG_OR_WORD_REGEX) || [];

	useEffect(() => {
		if (!inView) return;
		animate(
			"span",
			{
				opacity: 1,
				filter: filter ? "blur(0px)" : "none",
			},
			{
				duration: duration ? duration : 1,
				delay: stagger(0.2),
			}
		);
		// eslint-disable-next-line
	}, [inView, scope.current]);

	const renderWords = () => {
		return (
			<motion.div ref={scope}>
				{wordsArray.map((token, idx) => {
					const isTag = /^<((u|b|mark|span)[^>]*)>.*<\/\2>$|^<(u|b|mark|span)[^>]*>|^<\/(u|b|mark|span)>/.test(token);
					if (isTag) {
						return (
							<motion.span
								key={token + idx}
								className="dark:text-white text-black opacity-0"
								style={{
									filter: filter ? "blur(10px)" : "none",
								}}
								dangerouslySetInnerHTML={{ __html: token + " " }}
							/>
						);
					}
					return (
						<motion.span
							key={token + idx}
							className="opacity-0"
							style={{
								filter: filter ? "blur(10px)" : "none",
							}}>
							{token}{" "}
						</motion.span>
					);
				})}
			</motion.div>
		);
	};

	return (
		<div
			ref={containerRef}
			className={cn(GeneralSans_Regular.className, className)}>
			<div className="mt-4">
				<div className=" leading-relaxed tracking-wide">{renderWords()}</div>
			</div>
		</div>
	);
};
