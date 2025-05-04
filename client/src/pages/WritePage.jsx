import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Section from "../components/layout/Section";

const WritePage = () => {
	const navigate = useNavigate();
	const [isAuthenticated, setIsAuthenticated] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [formData, setFormData] = useState({
		title: "",
		category: "Mentality",
		content: "",
		image: null,
	});

	// useEffect(() => {
	// 	// Check if user is authenticated
	// 	// Replace with your actual auth check logic
	// 	const checkAuth = async () => {
	// 		try {
	// 			// Mock authentication check - replace with real API call
	// 			const isLoggedIn = localStorage.getItem("user") !== null;
	// 			setIsAuthenticated(isLoggedIn);

	// 			if (!isLoggedIn) {
	// 				// Redirect to sign-up if not authenticated
	// 				navigate("/sign-up");
	// 			}
	// 		} catch (error) {
	// 			console.error("Auth check failed:", error);
	// 		} finally {
	// 			setIsLoading(true);
	// 		}
	// 	};

	// 	checkAuth();
	// }, [navigate]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleImageChange = (e) => {
		setFormData({ ...formData, image: e.target.files[0] });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// TODO: Implement API call to save the post
		console.log("Submitting post:", formData);
		// After successful submission, redirect to the new post
		// navigate(`/posts/${newPostId}`);
	};

	if (isLoading) {
		return <Section className="text-center">Loading...</Section>;
	}

	return (
		<Section className="bg-dark text-light px-4">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-3xl font-bold uppercase tracking-widest font-orbitron mb-8">
					Write Your Chronicle
				</h1>

				<form onSubmit={handleSubmit} className="space-y-6">
					<div>
						<label htmlFor="title" className="block mb-2 font-semibold">
							Title
						</label>
						<input
							type="text"
							id="title"
							name="title"
							value={formData.title}
							onChange={handleChange}
							required
							className="w-full px-4 py-2 rounded bg-light1 text-dark border border-dark/20 focus:outline-none focus:ring-2 focus:ring-secondary"
							placeholder="Enter a compelling title"
						/>
					</div>

					<div>
						<label htmlFor="category" className="block mb-2 font-semibold">
							Category
						</label>
						<select
							id="category"
							name="category"
							value={formData.category}
							onChange={handleChange}
							className="w-full px-4 py-2 rounded bg-light1 text-dark border border-dark/20 focus:outline-none focus:ring-2 focus:ring-secondary"
						>
							<option value="Mentality">Mentality</option>
							<option value="Health">Health</option>
							<option value="Fitness">Fitness</option>
							<option value="Lifestyle">Lifestyle</option>
							<option value="Other">Other</option>
						</select>
					</div>

					<div>
						<label htmlFor="image" className="block mb-2 font-semibold">
							Featured Image
						</label>
						<input
							type="file"
							id="image"
							name="image"
							onChange={handleImageChange}
							accept="image/*"
							className="w-full px-4 py-2 rounded bg-light1 text-dark border border-dark/20 focus:outline-none focus:ring-2 focus:ring-secondary"
						/>
					</div>

					<div>
						<label htmlFor="content" className="block mb-2 font-semibold">
							Content
						</label>
						<textarea
							id="content"
							name="content"
							value={formData.content}
							onChange={handleChange}
							required
							rows="12"
							className="w-full px-4 py-2 rounded bg-light1 text-dark border border-dark/20 focus:outline-none focus:ring-2 focus:ring-secondary"
							placeholder="Write your post content here..."
						></textarea>
					</div>

					<div className="flex justify-end">
						<button
							type="submit"
							className="bg-secondary text-dark px-6 py-3 rounded font-semibold hover:bg-primary transition"
						>
							Publish Post
						</button>
					</div>
				</form>
			</div>
		</Section>
	);
};

export default WritePage;
