import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/index.css";
import App from "./App.jsx";
import Navbar from "./components/layout/Navbar.jsx";

import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import AllPosts from "./pages/AllPosts.jsx";
import PostPage from "./pages/PostPage.jsx";
import WritePage from "./pages/WritePage.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
	throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ClerkProvider
			publishableKey={PUBLISHABLE_KEY}
			appearance={{
				baseTheme: dark,
			}}
		>
			<BrowserRouter>
				<Navbar />

				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/sign-in" element={<SignInPage />} />
					<Route path="/sign-up" element={<SignUpPage />} />
					<Route path="/posts" element={<AllPosts />} />
					<Route path="/posts/:id" element={<PostPage />} />
					<Route path="/:slug" element={<PostPage />} />
					<Route path="/write" element={<WritePage />} />
				</Routes>
			</BrowserRouter>
		</ClerkProvider>
	</StrictMode>
);
