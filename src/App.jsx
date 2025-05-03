import FeaturedPosts from "./components/FeaturedPosts";
import Hero from "./components/Hero";

const App = () => {
	return (
		<main className="bg-dark text-light">
			{/* Hero Section */}
			<Hero />

			{/* Categories & Search Bar */}

			{/* Featured Posts */}
			<FeaturedPosts />

			{/* Call to Action */}
			<section className="py-20 bg-sand text-dark text-center">
				<div>
					<h2 className="text-4xl font-bold uppercase mb-4">
						Start Writing Now
					</h2>
					<p className="mb-6 text-lg max-w-xl mx-auto">
						No filters. No fluff. Just raw, relentless truth.
					</p>
					<a
						href="/write"
						className="inline-block bg-dark text-sand px-6 py-3 text-lg font-semibold rounded hover:bg-primary hover:text-white transition"
					>
						Begin Your Chronicle
					</a>
				</div>
			</section>
		</main>
	);
};

export default App;
