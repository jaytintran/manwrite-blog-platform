import { featuredPosts } from "../../../constants/dummyData.js";
import Section from "../../layout/Section";

const FeaturedPosts = () => {
	return (
		<Section>
			<h2 className="heading w-fit">Featured Chronicles</h2>
			<div>
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
		</Section>
	);
};

export default FeaturedPosts;
