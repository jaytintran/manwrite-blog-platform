import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/index.css";
import App from "./App.jsx";
import Navbar from "./components/layout/Navbar.jsx";

import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import AllPosts from "./pages/AllPosts.jsx";
import PostPage from "./pages/PostPage.jsx";
import WritePage from "./pages/WritePage.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<Navbar />

			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/sign-up" element={<SignUp />} />
				<Route path="/posts" element={<AllPosts />} />
				<Route path="/posts/:id" element={<PostPage />} />
				<Route path="/:slug" element={<PostPage />} />
				<Route path="/write" element={<WritePage />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
