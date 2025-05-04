// Base API service for making HTTP requests

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const fetchPosts = async () => {
	try {
		const response = await fetch(`${API_URL}/posts`);
		if (!response.ok) throw new Error("Failed to fetch posts");
		return await response.json();
	} catch (error) {
		console.error("Error fetching posts:", error);
		throw error;
	}
};

export const fetchPostById = async (id) => {
	try {
		const response = await fetch(`${API_URL}/posts/${id}`);
		if (!response.ok) throw new Error("Failed to fetch post");
		return await response.json();
	} catch (error) {
		console.error(`Error fetching post ${id}:`, error);
		throw error;
	}
};
