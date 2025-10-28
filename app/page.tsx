import { Metadata } from "next";
import { DynamicSeo } from "@/utils";
import { HomeView } from "@/view";

export const metadata: Metadata = DynamicSeo(0);

const Home = () => {
	return <HomeView />;
};

export default Home;
