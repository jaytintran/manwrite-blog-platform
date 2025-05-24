import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";

const Breadcrumbs = () => {
	const location = useLocation();
	const pathnames = location.pathname.split("/").filter((x) => x);

	// Map route paths to readable names
	const getReadableName = (path) => {
		// Handle special cases
		if (path === "posts" && pathnames.length === 1) return "All Posts";
		if (path.match(/^[0-9a-fA-F]{24}$/)) return "Post Details"; // For MongoDB ObjectId format

		// Convert kebab-case or snake_case to Title Case
		return path
			.replace(/-|_/g, " ")
			.split(" ")
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(" ");
	};

	return (
		<nav className="flex items-center text-sm text-light1/70">
			<motion.div
				initial={{ opacity: 0, x: -10 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.3 }}
			>
				<Link
					to="/"
					className="flex items-center hover:text-secondary transition-colors"
				>
					<Home size={16} className="mr-1" />
					<span>Home</span>
				</Link>
			</motion.div>

			{pathnames.map((path, index) => {
				// Build the path up to this point
				const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
				const isLast = index === pathnames.length - 1;

				return (
					<motion.div
						key={path}
						className="flex items-center"
						initial={{ opacity: 0, x: -10 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3, delay: index * 0.1 }}
					>
						<ChevronRight size={16} className="mx-2 text-light1/50" />
						{isLast ? (
							<span className="font-medium text-secondary">
								{getReadableName(path)}
							</span>
						) : (
							<Link
								to={routeTo}
								className="hover:text-secondary transition-colors"
							>
								{getReadableName(path)}
							</Link>
						)}
					</motion.div>
				);
			})}
		</nav>
	);
};

export default Breadcrumbs;
