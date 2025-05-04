import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // install lucide-react for clean icons
import { motion, AnimatePresence } from "framer-motion";
import Image from "../common/Image.jsx";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const navLinks = [
	{ name: "Top Posts", href: "/posts" },
	{ name: "Health", href: "/health" },
	{ name: "Fitness", href: "/fitness" },
	{ name: "Mentality", href: "/mentality" },
	{ name: "Tech", href: "/tech" },
];

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="w-full bg-dark text-light shadow-md">
			<nav className="container py-4 flex justify-between items-center font-orbitron uppercase tracking-wider">
				{/* Logo */}
				<Link to="/" className="flex items-center gap-3">
					<div className="bg-primary p-2 rounded-md w-12 h-12 flex items-center">
						<Image src="/logo.svg" className="w-8" alt="Manwrite Logo" />
					</div>
					<span className="text-xl font-bold">Manwrite</span>
				</Link>

				{/* Desktop Nav */}
				<ul className="hidden lg:flex gap-3 md:gap-6 lg:gap-12 items-center text-sm lg:text-md font-semibold">
					{navLinks.map((link, i) => (
						<li key={i}>
							<Link
								to={link.href}
								className="hover:text-secondary transition-all duration-200"
							>
								{link.name}
							</Link>
						</li>
					))}
				</ul>

				{/* Auth Buttons */}
				<div className="hidden md:flex gap-4 items-center text-sm font-semibold">
					<Link to="/sign-up" className="hover:text-secondary">
						Sign Up
					</Link>
					<SignedOut>
						<Link
							to="/sign-in"
							className="px-4 py-2 bg-primary text-dark rounded hover:bg-secondary transition"
						>
							Sign In
						</Link>
						{/* <SignInButton /> */}
					</SignedOut>
					<SignedIn>
						<UserButton />
					</SignedIn>
				</div>

				{/* Mobile Toggle */}
				<div className="md:hidden">
					<button onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</nav>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						exit={{ x: "100%" }}
						transition={{ type: "spring", stiffness: 300, damping: 30 }}
						className="right-0 w-full h-screen z-50 bg-dark text-light px-6 pt-20 pb-10 md:hidden"
					>
						<ul className="flex flex-col gap-6 text-lg font-semibold">
							{navLinks.map((link, i) => (
								<li key={i}>
									<Link
										to={link.href}
										onClick={() => setIsOpen(false)}
										className="block py-2 hover:text-secondary"
									>
										{link.name}
									</Link>
								</li>
							))}
							<hr className="border-light/20 my-2" />
							<Link
								to="/signup"
								className="block py-2 hover:text-secondary"
								onClick={() => setIsOpen(false)}
							>
								Sign Up
							</Link>
							<Link
								to="/login"
								className="block py-2 hover:text-secondary"
								onClick={() => setIsOpen(false)}
							>
								Login
							</Link>
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
};

export default Navbar;
