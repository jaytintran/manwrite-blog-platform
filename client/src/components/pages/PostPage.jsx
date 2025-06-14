import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Section from "../layout/Section";
import Image from "../common/Image";
import {
	Clock,
	Calendar,
	User,
	ThumbsUp,
	Bookmark,
	Share2,
} from "lucide-react";
import RelatedPosts from "../layout/RelatedPosts";

const PostPage = () => {
	const { id } = useParams();
	const [post, setPost] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const res = await fetch(`http://localhost:5000/api/posts/${id}`);
				if (!res.ok) throw new Error("Post not found");

				const data = await res.json();
				setPost(data);
			} catch (err) {
				setError(true);
				console.error(err);
				setPost({
					title: "Post Not Found",
					content: "The post you are looking for does not exist.",
					author: "Unknown",
					date: new Date().toLocaleDateString(),
					readTime: "5 min read",
					categories: ["uncategorized"],
				});
			} finally {
				setLoading(false);
			}
		};

		fetchPost();
	}, [id]);

	return (
		<div className="bg-dark min-h-screen">
			{loading ? (
				<Section className="flex justify-center items-center py-20">
					<div className="animate-pulse text-secondary text-xl">Loading...</div>
				</Section>
			) : (
				<>
					{/* Hero Section with Featured Image */}
					<div className="w-full h-[50vh] relative">
						<div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark z-10"></div>
						<Image
							src={post.image ? post.image : "/default-image.jpg"}
							alt={post.title}
							className="w-full h-full object-cover"
						/>
					</div>

					<div className="container mx-auto">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{/* Article Content - Takes 2/3 of the grid on desktop */}
							<section className="md:col-span-2 -mt-20 relative z-20">
								<div className="bg-dark/80 backdrop-blur-md p-8 rounded-lg shadow-xl border border-light1/10">
									{/* Category Tags */}
									<div className="mb-4 flex flex-wrap gap-2">
										{post.categories &&
											post.categories.map((category, index) => (
												<Link
													key={index}
													to={`/${category}`}
													className="text-secondary text-sm font-semibold uppercase tracking-wider hover:underline"
												>
													#{category}
												</Link>
											))}
										{post.category && (
											<Link
												to={`/category/${post.category}`}
												className="text-secondary text-sm font-semibold uppercase tracking-wider hover:underline"
											>
												#{post.category}
											</Link>
										)}
									</div>

									{/* Title */}
									<h1 className="text-4xl md:text-5xl font-bold mb-6 text-light1 leading-tight">
										{post.title}
									</h1>

									{/* Author and Meta Info */}
									<div className="flex flex-wrap items-center gap-4 mb-8 text-light1/70 text-sm">
										<div className="flex items-center gap-2">
											<User size={16} />
											<span>{post.author || "Anonymous"}</span>
										</div>
										<div className="flex items-center gap-2">
											<Calendar size={16} />
											<span>
												{post.date || new Date().toLocaleDateString()}
											</span>
										</div>
										<div className="flex items-center gap-2">
											<Clock size={16} />
											<span>{post.readTime || "5 min read"}</span>
										</div>
									</div>

									{/* Action Buttons */}
									<div className="flex justify-between items-center mb-8 pb-8 border-b border-light1/10">
										<div className="flex gap-4">
											<button className="flex items-center gap-2 bg-transparent hover:text-secondary text-light1/70">
												<ThumbsUp size={18} />
												<span>{post.likes || 0}</span>
											</button>
											<button className="flex items-center gap-2 bg-transparent hover:text-secondary text-light1/70">
												<Bookmark size={18} />
												<span>Save</span>
											</button>
										</div>
										<button className="flex items-center gap-2 bg-transparent hover:text-secondary text-light1/70">
											<Share2 size={18} />
											<span>Share</span>
										</button>
									</div>

									{/* Article Content */}
									<article className="prose prose-lg max-w-none prose-invert prose-headings:font-orbitron prose-headings:text-light1 prose-p:text-light1/80 prose-a:text-secondary">
										{post.content}
									</article>

									{/* Tags */}
									{post.tags && (
										<div className="mt-12 pt-6 border-t border-light1/10">
											<div className="flex flex-wrap gap-2">
												{post.tags.map((tag, index) => (
													<Link
														key={index}
														to={`/category/${tag}`}
														className="px-3 py-1 bg-light1/10 text-light1/70 rounded-full text-sm hover:bg-light1/20 transition-colors"
													>
														{tag}
													</Link>
												))}
											</div>
										</div>
									)}

									{/* Author Bio */}
									<div className="mt-12 pt-6 border-t border-light1/10">
										<div className="flex items-center gap-4">
											<div className="w-16 h-16 rounded-full bg-light1/20 flex items-center justify-center text-light1">
												{post.author
													? post.author.charAt(0).toUpperCase()
													: "A"}
											</div>
											<div>
												<h3 className="font-bold text-light1">
													{post.author || "Anonymous"}
												</h3>
												<p className="text-light1/70 text-sm">
													Writer and content creator passionate about sharing
													knowledge and insights.
												</p>
											</div>
										</div>
									</div>
								</div>
							</section>

							{/* Related Articles - Takes 1/3 of the grid on desktop */}
							<RelatedPosts />
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default PostPage;
