import { featuredPosts } from "../../constants/dummyData";

const FeaturedPosts = () => {
	return (
		<section className="py-24 container">
			<div>
				<h2 className="text-3xl font-bold mb-10 uppercase border-b border-light/20 pb-2">
					Featured Chronicles
				</h2>
				<div className="grid md:grid-cols-3 gap-6">
					{/* Sample Card */}
					{featuredPosts.map((post) => (
						<div
							key={post.id}
							className="bg-accent rounded-lg shadow-lg p-5 hover:shadow-xl transition"
						>
							<h3 className="text-xl font-bold mb-2">{post.title}</h3>
							<p className="text-light/70 mb-3 text-sm">{post.description}</p>
							<a
								href="/posts/1"
								className="text-primary hover:underline text-sm font-semibold"
							>
								Read More →
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FeaturedPosts;
