import { Link } from "react-router-dom";
import Hero from "../layout/Hero.jsx";
import CTA from "./LandingPage/CTA.jsx";
import FeaturedPosts from "./LandingPage/FeaturedPosts.jsx";
import Section from "../layout/Section.jsx";

const LandingPage = () => {
	return (
		<main className="bg-dark text-light">
			{/* Hero Section */}
			<Hero />

			{/* Featured Posts */}
			{/* <FeaturedPosts /> */}

			{/* Why Join Section */}
			<Section className="py-16">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold mb-4 font-orbitron">
						Why Join Manwrite?
					</h2>
					<p className="text-light1/70 max-w-2xl mx-auto">
						A platform built for men who want to share their stories, connect
						with like-minded individuals, and grow together.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					<div className="bg-light1/5 p-6 rounded-lg">
						<div className="w-12 h-12 bg-secondary text-dark rounded-full flex items-center justify-center mb-4 font-bold text-xl">
							1
						</div>
						<h3 className="text-xl font-bold mb-2">Authentic Content</h3>
						<p className="text-light1/70">
							Raw, unfiltered stories and advice from men who've been there and
							done that.
						</p>
					</div>

					<div className="bg-light1/5 p-6 rounded-lg">
						<div className="w-12 h-12 bg-secondary text-dark rounded-full flex items-center justify-center mb-4 font-bold text-xl">
							2
						</div>
						<h3 className="text-xl font-bold mb-2">Community</h3>
						<p className="text-light1/70">
							Connect with other men who share your interests, challenges, and
							aspirations.
						</p>
					</div>

					<div className="bg-light1/5 p-6 rounded-lg">
						<div className="w-12 h-12 bg-secondary text-dark rounded-full flex items-center justify-center mb-4 font-bold text-xl">
							3
						</div>
						<h3 className="text-xl font-bold mb-2">Growth</h3>
						<p className="text-light1/70">
							Learn, share, and grow with content that matters to you and your
							journey.
						</p>
					</div>
				</div>

				<div className="text-center mt-12">
					<Link
						to="/sign-up"
						className="bg-secondary text-dark px-8 py-3 rounded-lg font-bold hover:bg-primary transition-colors"
					>
						Join Now
					</Link>
				</div>
			</Section>

			{/* CTA */}
			<CTA />
		</main>
	);
};

export default LandingPage;
