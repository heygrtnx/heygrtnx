"use client";

import { cn, GeneralSans_Regular, GeneralSans_SemiBold } from "@/lib";
import { BlurText, DotPattern, FadeContent } from "@/components/export";

const HomeView = () => {
	return (
		<div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
			<DotPattern className={cn("[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]")} />
			<div className="relative z-10 flex flex-col items-center justify-center">
				<BlurText
					text="I turn imaginations into interactions you can feel."
					delay={150}
					animateBy="words"
					direction="top"
					className={cn("text-7xl max-w-2xl text-center leading-tight", GeneralSans_SemiBold.className)}
				/>

				<FadeContent
					blur={true}
					duration={2500}
					easing="ease-out"
					initialOpacity={0}>
					<p className={cn("text-2xl max-w-2xl text-start leading-relaxed mt-8", GeneralSans_Regular.className)}>
						{" "}
						I build products that cut <span className="text-danger line-through">development costs</span>, delight users,<mark className="font-bold"> climb search rankings</mark>, and <span className="text-success font-bold underline"> drive real sales</span> — because great code should do more than run; <b>it should deliver.</b>
					</p>
				</FadeContent>
			</div>
		</div>
	);
};

export default HomeView;
