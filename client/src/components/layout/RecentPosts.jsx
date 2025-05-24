import { samplePosts } from "../../constants/dummyData";
import PostCard from "../common/PostCard";

const RecentPosts = () => {
	return (
		<div className="flex flex-col gap-4 my-20">
			<h1 className="heading w-fit">Recent Posts</h1>

			{samplePosts.map((post) => (
				<PostCard post={post} key={post.id} />
			))}
		</div>
	);
};

export default RecentPosts;
