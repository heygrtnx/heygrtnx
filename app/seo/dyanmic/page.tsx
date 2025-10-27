import React from "react";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;

	// you can retrun null if the page is not found
	return {
		title: `Dynamic Page ${slug}`,
		description: `This is a dynamic page for ${slug}`,
	};
}

const SeoDynamicPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const { slug } = await params;
	return <div>Dynamic Page {slug}</div>;
};

export default SeoDynamicPage;
