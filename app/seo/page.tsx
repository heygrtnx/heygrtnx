import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		default: "The Title",
		template: "%s | The Title", // you might want a title template for child pages :contentReference[oaicite:2]{index=2}
	},
	description: "Find the best recipe for your favourite dishes.",
	keywords: ["recipe", "food", "cooking", "best recipes"],
	applicationName: "The Title App",
	authors: [{ name: "Author Name", url: "https://www.example.com/about" }],
	creator: "Author Name",
	publisher: "Publisher Name",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	referrer: "origin-when-cross-origin",
	robots: {
		index: true,
		follow: true,
		nocache: false,
		notranslate: false,
		googleBot: {
			index: true,
			follow: true,
			nocache: false,
			notranslate: false,
			"max-snippet": 100,
			"max-image-preview": "large",
			"max-video-preview": 100,
		},
	},
	alternates: {
		canonical: "./", // or a full URL if you prefer
		languages: {
			"en-US": "https://www.example.com/",
			"es-ES": "https://www.example.com/es",
		},
	},
	openGraph: {
		title: "The Title",
		description: "Find the best recipe for your favourite dishes.",
		url: "https://www.example.com/",
		siteName: "The Title",
		type: "website",
		locale: "en_US",
		images: [
			{
				url: "https://www.example.com/og-image.png",
				width: 1200,
				height: 630,
				alt: "The Title – Best Recipe",
				type: "image/png",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "The Title",
		description: "Find the best recipe for your favourite dishes.",
		creator: "@yourtwitterhandle",
		site: "@yourtwitterhandle",
		images: ["https://www.example.com/twitter-image.png"],
	},
	verification: {
		google: "google-verification-code",
		other: {
			bing: "bing-verification-code",
		},
	},
	manifest: "https://www.example.com/manifest.json",
	// other custom meta tags if needed:
	other: {
		"theme-color": "#ffffff",
		"msapplication-tilecolor": "#ffffff",
		pinterest: "nopin",
	},
};

const SeoStaticPage = () => {
	return <div></div>;
};

export default SeoStaticPage;
