import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./styles/index.css";
import App from "./App.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import AllPosts from "./pages/AllPosts.jsx";
import PostPage from "./pages/PostPage.jsx";
import WritePage from "./pages/WritePage.jsx";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
	throw new Error("Missing Publishable Key");
}

const Layout = () => {
	const location = useLocation();
	const hideNavbarPaths = ["/sign-in", "/sign-up"];
	const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

	return (
		<>
			{shouldHideNavbar ? "" : <Navbar />}
			{shouldHideNavbar && (
				<div className="absolute inset-0 z-0 !w-[100vw]">
					<div className="absolute inset-0 bg-gradient-to-br from-dark via-tertiary to-dark opacity-80"></div>
					<div className="absolute inset-0 bg-[url('/auth-pattern.svg')] bg-repeat opacity-10"></div>
					<div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-dark to-transparent"></div>
					<div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark to-transparent"></div>
				</div>
			)}
			<Routes>
				<Route
					path="/"
					element={
						<>
							<SignedIn>
								<App />
							</SignedIn>
							<SignedOut>
								<LandingPage />
							</SignedOut>
						</>
					}
				/>

				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/sign-in" element={<SignInPage />} />
				<Route path="/sign-up" element={<SignUpPage />} />
				<Route path="/posts" element={<AllPosts />} />
				<Route path="/posts/:id" element={<PostPage />} />
				<Route path="/:slug" element={<PostPage />} />
				<Route path="/write" element={<WritePage />} />
			</Routes>
		</>
	);
};

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ClerkProvider
			publishableKey={PUBLISHABLE_KEY}
			appearance={{
				baseTheme: dark,
			}}
		>
			<BrowserRouter>
				<Layout />
			</BrowserRouter>
		</ClerkProvider>
	</StrictMode>
);
