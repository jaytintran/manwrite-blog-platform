import FeaturedPosts from "../components/layout/FeaturedPosts";
import Hero from "../components/layout/Hero";
import { useState } from "react";
import SearchBar from "../components/common/SearchBar";
import CategoriesBreadcrumbs from "../components/common/CategoriesBreadcrumbs";
import BlogList from "../components/layout/BlogList";
import Section from "../components/layout/Section";

const Home = () => {
	const [search, setSearch] = useState("");
	const [category, setCategory] = useState("All");
	return (
		<main className="bg-dark text-light">
			{/* Hero Section */}
			<Hero />

			{/* Categories & Search Bar */}
			<div className="container pt-10 flex flex-col gap-5 md:justify-between md:flex-row">
				<SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
				{/* Optional: Add a filter button for mobile */}
				<CategoriesBreadcrumbs selected={category} onSelect={setCategory} />
			</div>

			{/* Sample Blog Lists */}
			<Section>
				<BlogList category={category} searchQuery={search} />
			</Section>

			{/* Featured Posts */}
			<FeaturedPosts />

			{/* Call to Action */}
			<section className="py-20 bg-sand text-primary text-center">
				<div>
					<h2 className="text-4xl font-bold uppercase mb-4">
						Start Writing Now
					</h2>
					<p className="mb-6 text-lg max-w-xl mx-auto">
						No filters. No fluff. Just raw, relentless truth.
					</p>
					<a
						href="/write"
						className="font-orbitron inline-block bg-primary text-dark hover:bg-secondary px-6 py-3 text-lg font-semibold rounded transition"
					>
						Begin Your Chronicle
					</a>
				</div>
			</section>
		</main>
	);
};

export default Home;
