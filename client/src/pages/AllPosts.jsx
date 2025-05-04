import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Image from "../components/common/Image.jsx";
import SearchBar from "../components/common/SearchBar.jsx";
import CategoriesBreadcrumbs from "../components/common/CategoriesBreadcrumbs.jsx";
import Section from "../components/layout/Section.jsx";

const AllPosts = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [search, setSearch] = useState("");
	const [category, setCategory] = useState("All");

	useEffect(() => {
		// Replace with real API call later
		fetchAllPosts();
	}, []);

	const fetchAllPosts = async () => {
		try {
			// Mock data — replace with API call later
			const dummyPosts = [
				{
					id: 1,
					title: "Master Your Mind Like a Warrior Monk",
					snippet: "Learn how to build discipline through brutal simplicity.",
					category: "Mentality",
					image: "/mental1.jpg",
				},
				{
					id: 2,
					title: "Hack Your Hormones with These 5 Biohacks",
					snippet:
						"Boost testosterone, destroy fatigue, and feel primal again.",
					category: "Health",
					image: "/health1.jpg",
				},
			];

			// Simulate delay
			setTimeout(() => {
				setPosts(dummyPosts);
				setLoading(false);
			}, 1000);
		} catch (error) {
			console.error("Error fetching posts:", error);
		}
	};

	return (
		<Section className="bg-dark text-light px-4">
			<div className="flex flex-col lg:flex-row lg:justify-between gap-4 mb-20">
				<div className="flex flex-row gap-10 items-center">
					<h2 className="text-3xl font-bold uppercase tracking-widest font-orbitron">
						All Posts
					</h2>
					<CategoriesBreadcrumbs selected={category} onSelect={setCategory} />
				</div>

				<SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
			</div>

			{loading ? (
				<p className="text-center text-lg text-secondary">Loading posts...</p>
			) : (
				<div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{posts.map((post) => (
						<Link
							to={`/posts/${post.id}`}
							key={post.id}
							className="bg-light1 text-dark p-4 rounded-lg hover:shadow-xl transition-all duration-300"
						>
							<Image
								src="/default-image.jpg"
								alt={post.title}
								className="w-full h-40 object-cover rounded-md mb-3"
							/>
							<h3 className="text-xl font-semibold">{post.title}</h3>
							<p className="text-sm text-gray-600 mt-1">{post.snippet}</p>
							<span className="text-xs text-secondary mt-2 inline-block">
								#{post.category}
							</span>
						</Link>
					))}
				</div>
			)}
		</Section>
	);
};

export default AllPosts;
