import { motion } from "framer-motion";
import { Search } from "lucide-react";

const SearchBar = ({ value, onChange }) => {
	return (
		<motion.div
			className="w-1/2 md:w-[30%] relative"
			initial={{ opacity: 0, y: -10 }}
			animate={{
				opacity: 1,
				y: 0,
				transition: { duration: 0.3, ease: "easeOut" },
			}}
		>
			<div className="relative">
				<Search
					size={18}
					className="absolute left-3 top-1/2 transform -translate-y-1/2 text-light/50"
				/>
				<motion.input
					type="text"
					placeholder="Search articles, tips, hacks..."
					className="w-full pl-10 pr-4 py-2 rounded-md bg-dark border border-light/20 text-light placeholder:text-light/50 focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
					value={value}
					onChange={onChange}
					whileFocus={{
						scale: 1.02,
						boxShadow: "0 0 8px rgba(154, 218, 35, 0.5)",
					}}
				/>
			</div>
		</motion.div>
	);
};

export default SearchBar;
