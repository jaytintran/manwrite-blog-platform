import { useEffect, useState } from "react";
import Section from "../components/layout/Section";
import { useParams } from "react-router-dom";
import Image from "../components/common/Image";

const PostPage = () => {
	const { id } = useParams();
	const [post, setPost] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const res = await fetch(`http://localhost:5000/api/posts/${id}`);
				if (!res.ok) throw new Error("Post not found");

				const data = await res.json();
				setPost(data);
			} catch (err) {
				setError(true);
				console.error(err);
				setPost({
					title: "Post Not Found",
					content: "The post you are looking for does not exist.",
				});
			} finally {
				setLoading(false);
			}
		};

		fetchPost();
	}, [id]);

	return (
		<Section>
			{loading ? (
				<p>Loading...</p>
			) : error ? (
				<div>
					<Image
						src={post.image ? post.image : "/default-image.jpg"}
						alt={post.title}
					/>
					<div className="text-primary">
						<h1 className="text-3xl font-bold mb-4">{post.title}</h1>
						<article className="prose max-w-none">{post.content}</article>
					</div>
				</div>
			) : (
				""
			)}
		</Section>
	);
};

export default PostPage;
