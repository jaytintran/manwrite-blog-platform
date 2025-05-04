import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Clock, ThumbsUp, BookOpen } from "lucide-react";
import Image from "../common/Image";
import { motion } from "framer-motion";

const BlogList = ({ category = "All", searchQuery = "" }) => {
	const [posts, setPosts] = useState([]);
	const [sortBy, setSortBy] = useState("latest");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Mock data - replace with API call later
		const samplePosts = [
			{
				id: 1,
				title: "Master Your Mind Like a Warrior Monk",
				snippet:
					"Learn how to build discipline through brutal simplicity and daily practice.",
				category: "Mentality",
				image: "/featured4.jpeg",
				author: "John Doe",
				date: "May 15, 2023",
				readTime: "5 min",
				likes: 243,
			},
			{
				id: 2,
				title: "Hack Your Hormones with These 5 Biohacks",
				snippet:
					"Boost testosterone, destroy fatigue, and feel primal again with these science-backed techniques.",
				category: "Health",
				image: "/featured4.jpeg",
				author: "Mike Johnson",
				date: "June 2, 2023",
				readTime: "8 min",
				likes: 189,
			},
			// Add 8 more sample posts here
		];

		// Filter by category if not "All"
		let filteredPosts =
			category === "All"
				? samplePosts
				: samplePosts.filter((post) => post.category === category);

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
		<div className="py-8">
			<div className="flex justify-between items-center mb-8">
				<h1 className="heading">
					{category === "All" ? "Latest Chronicles" : `${category} Chronicles`}
				</h1>
				<div className="flex gap-4">
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
				</div>
			</div>

			{loading ? (
				<div className="flex justify-center py-10">
					<div className="animate-pulse text-secondary">Loading...</div>
				</div>
			) : (
				<div className="space-y-8">
					{posts.map((post) => (
						<motion.div
							key={post.id}
							className="flex flex-col md:flex-row gap-6 border-b border-light1/10 pb-8"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3 }}
						>
							<div className="md:w-2/3 flex flex-col justify-between">
								<div>
									<div className="flex items-center gap-2 text-sm text-light1/70 mb-2">
										<span className="text-secondary font-semibold">
											#{post.category}
										</span>
										<span>•</span>
										<span>{post.date}</span>
									</div>
									<Link to={`/posts/${post.id}`}>
										<h3 className="text-xl font-bold mb-2 hover:text-secondary transition-colors">
											{post.title}
										</h3>
									</Link>
									<p className="text-light1/70 mb-4">{post.snippet}</p>
								</div>
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-4 text-sm text-light1/70">
										<div className="flex items-center gap-1">
											<Clock size={16} />
											<span>{post.readTime}</span>
										</div>
										<div className="flex items-center gap-1">
											<ThumbsUp size={16} />
											<span>{post.likes}</span>
										</div>
										<div className="flex items-center gap-1">
											<BookOpen size={16} />
											<span>Read</span>
										</div>
									</div>
									<span className="text-sm text-light1/70">
										By {post.author}
									</span>
								</div>
							</div>
							<div className="md:w-1/3">
								<Link to={`/posts/${post.id}`}>
									<Image
										src={post.image}
										alt={post.title}
										className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity"
									/>
								</Link>
							</div>
						</motion.div>
					))}
				</div>
			)}
		</div>
	);
};

export default BlogList;
