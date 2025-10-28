"use client";

import { cn, GeneralSans_SemiBold } from "@/lib";
import { BlurText, DotPattern } from "@/components/export";

const HomeView = () => {
	return (
		<div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
			<DotPattern className={cn("[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]")} />
			<div className="relative z-10 flex flex-col items-center justify-center">
				<BlurText
					text="I turn imaginations into interactions you can feel"
					delay={150}
					animateBy="words"
					direction="top"
					className={cn("text-7xl max-w-2xl text-center leading-tight", GeneralSans_SemiBold.className)}
				/>
			</div>
		</div>
	);
};

export default HomeView;
