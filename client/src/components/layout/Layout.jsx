import { Routes, Route, Navigate } from "react-router-dom";
import { SignedIn, SignedOut, useAuth } from "@clerk/clerk-react";
import Navbar from "./Navbar";
import LandingPage from "../pages/LandingPage.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import SignInPage from "../pages/SignInPage.jsx";
import SignUpPage from "../pages/SignUpPage.jsx";
import Home from "../pages/Home.jsx";
import PostPage from "../pages/PostPage.jsx";
import WritePage from "../pages/WritePage.jsx";
import CategoryPage from "../pages/CategoryPage.jsx";

// Protected route component
const ProtectedRoute = ({ children }) => {
	const { isSignedIn, isLoaded } = useAuth();

	if (!isLoaded) {
		// Show loading state while Clerk loads
		return (
			<div className="flex justify-center items-center h-screen bg-dark text-secondary">
				Loading...
			</div>
		);
	}

	if (!isSignedIn) {
		// Redirect to sign-in if not authenticated
		return <Navigate to="/sign-in" replace />;
	}

	return children;
};

const Layout = () => {
	return (
		<>
			<Navbar />
			<Routes>
				{/* Home route with conditional rendering based on auth state */}
				<Route
					path="/"
					element={
						<>
							<SignedIn>
								<Home />
							</SignedIn>
							<SignedOut>
								<LandingPage />
							</SignedOut>
						</>
					}
				/>

				{/* Public routes */}
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/sign-in" element={<SignInPage />} />
				<Route path="/sign-up" element={<SignUpPage />} />

				{/* Protected routes */}
				<Route path="/posts" element={<Home />} />
				<Route path="/posts/:id" element={<PostPage />} />
				<Route
					path="/write"
					element={
						<ProtectedRoute>
							<WritePage />
						</ProtectedRoute>
					}
				/>

				{/* Category route */}
				<Route path="/:category" element={<CategoryPage />} />
			</Routes>
		</>
	);
};

export default Layout;
