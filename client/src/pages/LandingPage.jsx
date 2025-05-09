import Hero from "../components/layout/Hero.jsx";
import CTA from "./LandingPage/CTA.jsx";
import FeaturedPosts from "./LandingPage/FeaturedPosts.jsx";

const LandingPage = () => {
	return (
		<main className="bg-dark text-light">
			{/* Hero Section */}
			<Hero />

			{/* Featured Posts */}
			<FeaturedPosts />

			{/* CTA */}
			<CTA />
		</main>
	);
};

export default LandingPage;
