import { Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// TODO: Hook up to backend
		console.log(formData);
	};

	return (
		<section className="py-24 flex items-center justify-center bg-dark text-light px-4">
			<div className="max-w-md w-full bg-light1 text-dark p-8 rounded-xl shadow-lg">
				<h2 className="text-2xl font-bold text-center uppercase tracking-widest mb-6 font-orbitron">
					Create Your Account
				</h2>

				<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
					<input
						type="text"
						name="username"
						placeholder="Username"
						value={formData.username}
						onChange={handleChange}
						required
						className="px-4 py-2 rounded bg-white border border-dark/20 focus:outline-none focus:ring-2 focus:ring-secondary"
					/>

					<input
						type="email"
						name="email"
						placeholder="Email"
						value={formData.email}
						onChange={handleChange}
						required
						className="px-4 py-2 rounded bg-white border border-dark/20 focus:outline-none focus:ring-2 focus:ring-secondary"
					/>

					<input
						type="password"
						name="password"
						placeholder="Password"
						value={formData.password}
						onChange={handleChange}
						required
						className="px-4 py-2 rounded bg-white border border-dark/20 focus:outline-none focus:ring-2 focus:ring-secondary"
					/>

					<button
						type="submit"
						className="bg-dark text-primary py-2 rounded font-semibold hover:bg-secondary hover:text-dark transition"
					>
						Sign Up
					</button>
				</form>

				<p className="mt-4 text-center text-sm">
					Already have an account?{" "}
					<Link
						to="/sign-in"
						className="text-secondary font-bold hover:underline"
					>
						Log in
					</Link>
				</p>
			</div>
		</section>
	);
};

export default Signup;
