import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Home, Edit, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "../common/Image.jsx";
import { SignedIn, SignedOut, UserButton, useAuth } from "@clerk/clerk-react";

const authNavLinks = [
	{ name: "Home", href: "/", icon: <Home size={16} /> },
	{ name: "Write", href: "/write", icon: <Edit size={16} /> },
	{ name: "Categories", href: "/category/all", icon: <BookOpen size={16} /> },
];

const publicLinks = [
	{ name: "About", href: "/about" },
	{ name: "Contact", href: "/contact" },
	{ name: "Start Here", href: "/sign-up" },
];

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { isSignedIn } = useAuth();
	const navigate = useNavigate();

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

				{/* Auth Buttons */}
				<div className="hidden md:flex gap-4 items-center text-sm font-semibold">
					<SignedOut>
						{/* Desktop Nav for signed out users */}
						<div className="flex min-w-[100%] gap-10">
							<ul className="hidden lg:flex gap-3 md:gap-6 lg:gap-12 items-center text-sm lg:text-md font-semibold">
								{publicLinks.map((link, i) => (
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
							<Link
								to="/sign-in"
								className="px-4 py-2 bg-primary text-dark rounded hover:bg-secondary transition"
							>
								Sign In
							</Link>
						</div>
					</SignedOut>

					<SignedIn>
						{/* Desktop Nav for signed in users */}
						<ul className="hidden lg:flex gap-3 md:gap-6 lg:gap-12 items-center text-sm lg:text-md font-semibold">
							{authNavLinks.map((link, i) => (
								<li key={i}>
									<Link
										to={link.href}
										className="hover:text-secondary transition-all duration-200 flex items-center gap-2"
									>
										{link.icon}
										{link.name}
									</Link>
								</li>
							))}
						</ul>
						<UserButton afterSignOutUrl="/" />
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
						className="fixed top-0 right-0 w-full h-screen z-50 bg-dark text-light px-6 pt-20 pb-10 md:hidden"
					>
						<ul className="flex flex-col gap-6 text-lg font-semibold">
							<SignedIn>
								{authNavLinks.map((link, i) => (
									<li key={i}>
										<Link
											to={link.href}
											onClick={() => setIsOpen(false)}
											className="flex items-center gap-3 py-2 hover:text-secondary"
										>
											{link.icon}
											{link.name}
										</Link>
									</li>
								))}
							</SignedIn>
							<SignedOut>
								{publicLinks.map((link, i) => (
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
							</SignedOut>
							<hr className="border-light/20 my-2" />
							<SignedOut>
								<Link
									to="/sign-in"
									onClick={() => setIsOpen(false)}
									className="px-4 py-2 bg-primary text-dark rounded hover:bg-secondary transition"
								>
									Sign In
								</Link>
							</SignedOut>
							<SignedIn>
								<div className="flex items-center gap-3">
									<UserButton afterSignOutUrl="/" />
									<span>Account</span>
								</div>
							</SignedIn>
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
};

export default Navbar;
