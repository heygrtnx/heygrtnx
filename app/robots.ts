import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	const baseUrl = "https://www.example.com";
	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				disallow: ["/seo/**", "/api"],
			},
			{
				userAgent: "Googlebot",
				allow: "/",
				disallow: ["/terms-of-service", "/privacy-policy"],
			},
		],
		sitemap: `${baseUrl}/sitemap.xml`,
	};
}
