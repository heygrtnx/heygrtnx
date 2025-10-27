import { Metadata } from "next";
import { DynamicSeo } from "@/utils";

export const metadata: Metadata = DynamicSeo(0);

const Home = () => {
	return <div></div>;
};

export default Home;
