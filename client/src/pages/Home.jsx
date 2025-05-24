import { useState } from "react";
import SearchBar from "../components/common/SearchBar";
import MainCategories from "../components/common/MainCategories";
import FeaturedPosts from "../components/layout/FeaturedPosts";
import Section from "../components/layout/Section";
import Breadcrumbs from "../components/common/Breadcrumbs";
import AnimatedBall from "../components/common/AnimatedBall";
import RecentPosts from "../components/layout/RecentPosts";

const Home = () => {
	const [search, setSearch] = useState("");
	const [category, setCategory] = useState("All");
	return (
		<main className="bg-dark text-primary">
			{/* Categories & Search Bar */}
			<div className="container pt-10 flex flex-col gap-5 md:justify-between md:flex-row">
				<div className="flex flex-col gap-4 w-2/4">
					<h1 className="text-xl font-bold tracking-widest font-orbitron">
						Make Your Journey Worth Telling
					</h1>
					<p className="text-light1/70">
						Becoming a man is more than just surviving. It&apos;s about
						thriving, about finding your voice, and about sharing your story.
						Not only that, it&apos;s about connecting with others who are on the
						same journey.
					</p>
				</div>

				{/* Animated Ball */}
				<AnimatedBall className="hidden md:block" position="bottomLeft" />

				{/* Optional: Add a filter button for mobile */}
			</div>

			{/* Sample Blog Lists */}
			<Section>
				<div className="flex justify-between md:items-end mb-8 md:flex-row flex-col gap-6 md:gap-0">
					<div className="flex flex-col gap-4 items-start ">
						<Breadcrumbs />
						<MainCategories selected={category} onSelect={setCategory} />
					</div>

					<SearchBar
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</div>

				<FeaturedPosts category={category} searchQuery={search} />
				<RecentPosts />
			</Section>

			<Section></Section>
		</main>
	);
};

export default Home;
