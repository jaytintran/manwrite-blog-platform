import { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import SearchBar from "../common/SearchBar";
import MainCategories from "../common/MainCategories";
import MainPostsView from "../layout/MainPostsView";
import Section from "../layout/Section";
import Breadcrumbs from "../common/Breadcrumbs";
import RecentPosts from "../layout/RecentPosts";

const Home = () => {
	const { user, isLoaded } = useUser();
	const [search, setSearch] = useState("");
	const [category, setCategory] = useState("All");

	// Get time of day for personalized greeting
	const getTimeOfDay = () => {
		const hour = new Date().getHours();
		if (hour < 12) return "morning";
		if (hour < 18) return "afternoon";
		return "evening";
	};

	return (
		<main className="bg-dark text-primary">
			{/* Welcome Section */}
			<div className="container pt-10 flex flex-col gap-5 md:justify-between md:flex-row">
				<div className="flex flex-col gap-4 w-full md:w-2/4">
					{isLoaded && user && (
						<h1 className="text-xl font-bold tracking-widest font-orbitron">
							Good {getTimeOfDay()}, {user.firstName || user.username}
						</h1>
					)}
					{(!isLoaded || !user) && (
						<h1 className="text-xl font-bold tracking-widest font-orbitron">
							Make Your Journey Worth Telling
						</h1>
					)}
					<p className="text-light1/70">
						Discover stories that inspire, challenge, and guide you on your
						journey. Find content tailored to your interests or explore new
						perspectives.
					</p>
				</div>
			</div>

			{/* Main Content */}
			<Section>
				<div className="flex justify-between md:items-end mb-8 md:flex-row flex-col gap-6 md:gap-0">
					<div className="flex flex-col gap-4 items-start">
						<Breadcrumbs />
						<MainCategories selected={category} onSelect={setCategory} />
					</div>

					<SearchBar
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</div>

				{/* Main content area with featured posts on left and recent posts on right */}
				<div className="flex flex-col md:flex-row gap-8">
					{/* Main Posts View - Take up more space on desktop */}
					<div className="w-full md:w-2/3">
						<MainPostsView category={category} searchQuery={search} />
					</div>

					{/* Recent Posts - On the right side for desktop */}
					<div className="w-full md:w-1/3">
						<RecentPosts />
					</div>
				</div>
			</Section>
		</main>
	);
};

export default Home;
