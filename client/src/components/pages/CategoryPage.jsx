import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Section from "../layout/Section";
import Breadcrumbs from "../common/Breadcrumbs";
import MainCategories from "../common/MainCategories";
import SearchBar from "../common/SearchBar";
import PostCard from "../common/PostCard";
import { samplePosts } from "../../constants/dummyData";

const CategoryPage = () => {
	const { category } = useParams();
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [search, setSearch] = useState("");

	useEffect(() => {
		// Simulate API call to fetch posts by category
		const fetchPostsByCategory = async () => {
			try {
				setLoading(true);

				// Filter posts by category (case insensitive)
				const filteredPosts = samplePosts.filter(
					(post) => post.category.toLowerCase() === category.toLowerCase()
				);

				// Simulate network delay
				setTimeout(() => {
					setPosts(filteredPosts);
					setLoading(false);
				}, 800);

				// In a real app, you would fetch from API:
				// const response = await fetch(`http://localhost:5000/api/posts/category/${category}`);
				// const data = await response.json();
				// setPosts(data);
				// setLoading(false);
			} catch (error) {
				console.error("Error fetching posts by category:", error);
				setLoading(false);
			}
		};

		fetchPostsByCategory();
	}, [category]);

	// Filter posts by search term
	const filteredPosts = posts.filter(
		(post) =>
			post.title.toLowerCase().includes(search.toLowerCase()) ||
			post.snippet?.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div className="bg-dark min-h-screen">
			<Section>
				<div className="flex flex-col gap-6 mb-10">
					<Breadcrumbs />
					<h1 className="text-3xl md:text-4xl font-bold text-light1">
						<span className="text-secondary">#</span>
						{category}
					</h1>

					<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
						{/* <MainCategories
							selected={category}
							onSelect={(cat) =>
								(window.location.href = `/${cat.toLowerCase()}`)
							}
						/> */}
						<SearchBar
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
					</div>
				</div>

				{loading ? (
					<div className="flex justify-center py-10">
						<div className="animate-pulse text-secondary">Loading posts...</div>
					</div>
				) : filteredPosts.length === 0 ? (
					<div className="text-center py-10">
						<h3 className="text-xl text-light1/70">
							No posts found in this category
						</h3>
						<p className="text-light1/50 mt-2">
							Try searching for something else or check back later
						</p>
					</div>
				) : (
					<div className="grid grid-cols-1 gap-8">
						{filteredPosts.map((post) => (
							<PostCard key={post.id} post={post} />
						))}
					</div>
				)}
			</Section>
		</div>
	);
};

export default CategoryPage;
