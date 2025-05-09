import React from "react";

const CTA = () => {
	return (
		<section className="py-20 bg-sand text-primary text-center">
			<div>
				<h2 className="text-4xl font-bold uppercase mb-4">Start Writing Now</h2>
				<p className="mb-6 text-lg max-w-xl mx-auto">
					No filters. No fluff. Just raw, relentless truth.
				</p>
				<a
					href="/sign-in"
					className="font-orbitron inline-block bg-primary text-dark hover:bg-secondary px-6 py-3 text-lg font-semibold rounded transition"
				>
					Begin Your Chronicle
				</a>
			</div>
		</section>
	);
};

export default CTA;
