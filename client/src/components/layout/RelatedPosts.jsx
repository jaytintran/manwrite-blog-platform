import React from "react";
import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import { samplePosts } from "../../constants/dummyData";

const RelatedPosts = () => {
	return (
		<section className="md:col-span-1 mt-0 md:mt-10">
			<div className="sticky top-20">
				<h2 className="text-2xl font-bold mb-6 text-light1">
					Related Articles
				</h2>
				<div className="flex flex-col gap-6">
					{samplePosts.map((post) => (
						<div
							key={post.id}
							className="bg-light1/5 rounded-lg overflow-hidden hover:bg-light1/10 transition-colors"
						>
							<div className="p-4">
								<Link
									to={`/${
										post.category || post.categories?.[0] || "Uncategorized"
									}`}
									className="text-secondary text-xs hover:underline"
								>
									#{post.category || post.categories?.[0] || "Uncategorized"}
								</Link>
								<h3 className="text-light1 font-bold mt-2">
									Another Interesting Article Title
								</h3>
								<div className="flex items-center gap-2 mt-4 text-light1/70 text-xs">
									<Clock size={14} />
									<span>5 min read</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default RelatedPosts;
