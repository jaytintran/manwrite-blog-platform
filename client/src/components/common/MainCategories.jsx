import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const categories = [
	"All",
	"Health",
	"Fitness",
	"Mentality",
	"Tech",
	"Style",
	"Combat",
];

const MainCategories = ({ selected, onSelect }) => {
	return (
		<div className="flex gap-3 flex-wrap">
			{categories.map((cat, idx) => (
				<motion.div
					key={idx}
					whileHover={{
						scale: 1.05,
						transition: { duration: 0.2 },
					}}
					whileTap={{ scale: 0.95 }}
					initial={{ opacity: 0, y: 10 }}
					animate={{
						opacity: 1,
						y: 0,
						transition: {
							delay: idx * 0.05,
							duration: 0.3,
						},
					}}
				>
					{cat === "All" ? (
						<button
							onClick={() => onSelect(cat)}
							className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap ${
								selected === cat
									? "bg-secondary text-dark font-semibold shadow-md"
									: "bg-light1 text-dark hover:bg-light2"
							}`}
						>
							{cat}
						</button>
					) : (
						<Link
							to={`/${cat.toLowerCase()}`}
							className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap inline-block ${
								selected === cat
									? "bg-secondary text-dark font-semibold shadow-md"
									: "bg-light1 text-dark hover:bg-light2"
							}`}
							onClick={() => onSelect && onSelect(cat)}
						>
							{cat}
						</Link>
					)}
				</motion.div>
			))}
		</div>
	);
};

export default MainCategories;
