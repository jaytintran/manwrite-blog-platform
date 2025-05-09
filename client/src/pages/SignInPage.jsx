import { Link } from "react-router-dom";
import { useState } from "react";
import Section from "../components/layout/Section";
import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
	const [formData, setFormData] = useState({ email: "", password: "" });

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// TODO: Hook up to backend
		console.log(formData);
	};

	return (
		<>
			<Section className="min-h-screen flex items-center justify-center bg-transparent relative overflow-hidden">
				{/* Content */}
				<div className="relative z-10 max-w-md w-full bg-light1/10 backdrop-blur-md text-light p-8 rounded-xl shadow-2xl border border-light1/20">
					<h2 className="text-2xl font-bold text-center uppercase tracking-widest mb-6 font-orbitron">
						Welcome Back
					</h2>

					{/* <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
					Log In
					</button>
					</form>
					
					<p className="mt-4 text-center text-sm">
					New here?{" "}
					<Link
					to="/sign-up"
					className="text-secondary font-bold hover:underline"
					>
					Create account
					</Link>
					</p> */}

					<SignIn signUpUrl="/sign-up" />
				</div>
			</Section>
		</>
	);
};

export default SignInPage;
