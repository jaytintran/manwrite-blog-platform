const navLinks = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Contact", href: "/contact" },
];

const Navbar = () => {
	return (
		<nav className="flex justify-between items-center p-4">
			<div className="flex items-center gap-1">
				<img src="/logo.svg" alt="Logo" className="w-8 h-auto" />
				<h1 className="text-black text-xl !font-orbitron mt-1 font-semibold tracking-wide uppercase">
					Manwrite
				</h1>
			</div>
			<ul className="flex gap-4 text-lg text-black font-semibold">
				{navLinks.map((link, index) => (
					<li key={index}>
						<a href={link.href} className="hover:text-textSecondary p-3">
							{link.name}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
