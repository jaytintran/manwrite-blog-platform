import { useState, useEffect } from "react";
import PostCard from "../common/PostCard";
import { featuredPosts } from "../../constants/dummyData";

const MainPostsView = ({ category = "All", searchQuery = "" }) => {
	const [posts, setPosts] = useState([]);
	const [sortBy, setSortBy] = useState("latest");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Mock data - replace with API call later

		// Filter by category if not "All"
		let filteredPosts =
			category === "All"
				? featuredPosts
				: featuredPosts.filter((post) => post.category === category);

		// Filter by search query
		if (searchQuery) {
			filteredPosts = filteredPosts.filter(
				(post) =>
					post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
					post.snippet.toLowerCase().includes(searchQuery.toLowerCase())
			);
		}

		// Sort posts
		if (sortBy === "latest") {
			filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
		} else if (sortBy === "popular") {
			filteredPosts.sort((a, b) => b.likes - a.likes);
		}

		setTimeout(() => {
			setPosts(filteredPosts);
			setLoading(false);
		}, 500);
	}, [category, searchQuery, sortBy]);

	return (
		<div className="">
			<div className="flex justify-between items-center mb-8">
				<h1 className="heading !mb-0 !pb-0	">
					{category === "All" ? "All" : `${category}`}
				</h1>
				{/* <div className="flex gap-4">
					<button
						onClick={() => setSortBy("latest")}
						className={`px-4 py-2 rounded-lg text-sm ${
							sortBy === "latest"
								? "bg-secondary text-dark font-semibold"
								: "bg-light1/10 text-light1 hover:bg-light1/20"
						}`}
					>
						Latest
					</button>
					<button
						onClick={() => setSortBy("popular")}
						className={`px-4 py-2 rounded-lg text-sm ${
							sortBy === "popular"
								? "bg-secondary text-dark font-semibold"
								: "bg-light1/10 text-light1 hover:bg-light1/20"
						}`}
					>
						Popular
					</button>
				</div> */}
			</div>

			{loading ? (
				<div className="flex justify-center py-10">
					<div className="animate-pulse text-secondary">Loading...</div>
				</div>
			) : (
				<div className="grid grild-cols-1 gap-6">
					{posts.map((post) => (
						<PostCard post={post} key={post.id} />
					))}
				</div>
			)}
		</div>
	);
};

export default MainPostsView;
