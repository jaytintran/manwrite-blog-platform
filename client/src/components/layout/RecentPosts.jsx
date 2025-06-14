import { samplePosts } from "../../constants/dummyData";
import PostCard from "../common/PostCard";

const RecentPosts = () => {
	// Get only the first 5 posts for the sidebar
	const recentPosts = samplePosts.slice(0, 5);

	return (
		<div className="flex flex-col">
			<h1 className="heading !mb-3 !pb-0 w-fit">Recent Posts</h1>

			<div className="p-4 rounded-lg flex flex-col gap-3">
				{recentPosts.map((post) => (
					<div
						key={post.id}
						className="py-3 border-b border-light1/10 last:border-b-0"
					>
						<h3 className="font-semibold text-secondary hover:underline">
							{post.title}
						</h3>
						<div className="flex justify-between text-xs text-light1/70 mt-1">
							<span>{post.date}</span>
							<span>#{post.category}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default RecentPosts;
