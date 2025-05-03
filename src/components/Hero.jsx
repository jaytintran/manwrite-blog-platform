import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<section className="py-24">
			<div className="text-center">
				<h1 className="text-4xl md:text-6xl font-orbitron font-extrabold uppercase tracking-wide mb-4">
					Write Like A Warrior
				</h1>
				<p className="max-w-2xl mx-auto text-lg text-light/70 mb-6">
					Forge your thoughts. Chronicle your battles. A platform for men to
					speak raw, real, and unfiltered. And connect with fellow like-minded
					men.
				</p>
				<Link
					to="/posts"
					className="inline-block bg-primary text-dark px-6 py-3 text-lg font-semibold uppercase tracking-widest rounded hover:bg-secondary transition"
				>
					Join the Movement
				</Link>
			</div>
		</section>
	);
};

export default Hero;
