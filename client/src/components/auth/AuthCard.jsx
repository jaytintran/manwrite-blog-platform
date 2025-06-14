const AuthCard = ({ title, children }) => {
	return (
		<div className="relative z-10 max-w-md w-full bg-light1/10 backdrop-blur-md text-light p-8 rounded-xl shadow-2xl border border-light1/20">
			<h2 className="text-2xl font-bold text-center uppercase tracking-widest mb-6 font-orbitron">
				{title}
			</h2>
			{children}
		</div>
	);
};

export default AuthCard;
