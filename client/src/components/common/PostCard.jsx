import { Link } from "react-router-dom";
import { Clock, ThumbsUp, BookOpen } from "lucide-react";
import Image from "../common/Image";
import { motion } from "framer-motion";

const PostCard = ({ post }) => {
	return (
		<motion.div
			key={post.id}
			className="flex flex-col md:flex-row gap-6 border dark:border-light2 hover:border-light1 border-light1/10 p-8 rounded-lg hover:shadow-lg transition-shadow"
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
					<p className="text-light1/70 mb-4">
						{post.snippet || post.description}
					</p>
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
							<Link to={`/posts/${post.id}`}>
								<BookOpen size={16} />
								<span>Read More</span>
							</Link>
						</div>
					</div>
					<span className="text-sm text-light1/70">By {post.author}</span>
				</div>
			</div>
			<div className="md:w-1/3 xl:block md:hidden max-sm:hidden">
				<Link to={`/posts/${post.id}`}>
					<Image
						src={post.image}
						alt={post.title}
						className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity"
					/>
				</Link>
			</div>
		</motion.div>
	);
};

export default PostCard;
