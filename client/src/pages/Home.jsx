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
			{/* Categories & Search Bar */}
			<div className="container pt-10 flex flex-col gap-5 md:justify-between md:flex-row">
				{/* Breadcrumbs */}
				<div className="flex gap-4"></div>

				<SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
				{/* Optional: Add a filter button for mobile */}
				<CategoriesBreadcrumbs selected={category} onSelect={setCategory} />
			</div>

			{/* Sample Blog Lists */}
			<Section>
				<BlogList category={category} searchQuery={search} />
			</Section>
		</main>
	);
};

export default Home;
