import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedBall = ({ size = 80, position = "bottom-right", className }) => {
	const [isHovered, setIsHovered] = useState(false);

	// Position classes
	const positionClasses = {
		"top-left": "top-10 left-10",
		"top-right": "top-10 right-10",
		"bottom-left": "bottom-10 left-10",
		"bottom-right": "bottom-10 right-10",
		center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
	};

	// Check if window is defined (not server-side)
	useEffect(() => {
		if (typeof window !== "undefined") {
			// No-op to ensure safe client-side rendering
		}
	}, []);

	return (
		<motion.div
			className={`relative ${positionClasses[position]} z-10 ${className}`}
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.8, type: "spring" }}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{/* First satellite orbit */}
			<motion.div
				className="absolute rounded-full"
				style={{
					width: size + 100,
					height: size + 100,
					border: "1px solid rgba(100, 155, 255, 0.2)",
					top: -50,
					left: -50,
				}}
				animate={{
					rotate: 360,
					borderColor: isHovered
						? [
								"rgba(100, 155, 255, 0.2)",
								"rgba(100, 155, 255, 0.6)",
								"rgba(100, 155, 255, 0.2)",
						  ]
						: "rgba(100, 155, 255, 0.2)",
				}}
				transition={{
					rotate: {
						duration: 20,
						repeat: Infinity,
						ease: "linear",
					},
					borderColor: {
						duration: 1.5,
						repeat: isHovered ? Infinity : 0,
						ease: "easeInOut",
					},
				}}
			>
				{/* First satellite */}
				<motion.div
					className="absolute w-3 h-3 rounded-full bg-blue-400"
					style={{
						top: "50%",
						right: 0,
						boxShadow: "0 0 10px rgba(100, 155, 255, 0.8)",
					}}
					animate={{
						scale: isHovered ? 1.5 : 1,
						boxShadow: isHovered
							? [
									"0 0 10px rgba(100, 155, 255, 0.8)",
									"0 0 20px rgba(100, 155, 255, 0.8)",
									"0 0 10px rgba(100, 155, 255, 0.8)",
							  ]
							: "0 0 10px rgba(100, 155, 255, 0.8)",
					}}
					transition={{
						scale: { duration: 0.3 },
						boxShadow: {
							duration: 1.2,
							repeat: isHovered ? Infinity : 0,
							ease: "easeInOut",
						},
					}}
				/>
			</motion.div>

			{/* Second satellite orbit */}
			<motion.div
				className="absolute rounded-full"
				style={{
					width: size + 40,
					height: size + 40,
					border: "1px solid rgba(255, 100, 100, 0.2)",
					top: -20,
					left: -20,
				}}
				animate={{
					rotate: -360,
					borderColor: isHovered
						? [
								"rgba(255, 100, 100, 0.2)",
								"rgba(255, 100, 100, 0.6)",
								"rgba(255, 100, 100, 0.2)",
						  ]
						: "rgba(255, 100, 100, 0.2)",
				}}
				transition={{
					rotate: {
						duration: 15,
						repeat: Infinity,
						ease: "linear",
					},
					borderColor: {
						duration: 2,
						repeat: isHovered ? Infinity : 0,
						ease: "easeInOut",
					},
				}}
			>
				{/* Second satellite */}
				<motion.div
					className="absolute w-2 h-2 rounded-full bg-red-400"
					style={{
						bottom: "20%",
						right: "20%",
						boxShadow: "0 0 8px rgba(255, 100, 100, 0.8)",
					}}
					animate={{
						scale: isHovered ? 1.5 : 1,
						boxShadow: isHovered
							? [
									"0 0 8px rgba(255, 100, 100, 0.8)",
									"0 0 16px rgba(255, 100, 100, 0.8)",
									"0 0 8px rgba(255, 100, 100, 0.8)",
							  ]
							: "0 0 8px rgba(255, 100, 100, 0.8)",
					}}
					transition={{
						scale: { duration: 0.3 },
						boxShadow: {
							duration: 1.8,
							repeat: isHovered ? Infinity : 0,
							ease: "easeInOut",
						},
					}}
				/>
			</motion.div>

			{/* Earth */}
			<motion.div
				className="rounded-full cursor-pointer overflow-hidden"
				style={{
					width: size,
					height: size,
					background: "radial-gradient(circle at 30% 30%, #1a3b5c, #0c1c2e)",
					boxShadow: "0 0 20px rgba(0, 30, 60, 0.5)",
				}}
				animate={{
					rotate: 360,
					scale: isHovered ? 1.1 : 1,
				}}
				transition={{
					rotate: {
						duration: 30,
						repeat: Infinity,
						ease: "linear",
					},
					scale: {
						duration: 0.3,
						ease: "easeOut",
					},
				}}
			>
				{/* Continents */}
				<motion.div
					className="absolute"
					style={{
						width: "70%",
						height: "70%",
						top: "15%",
						left: "15%",
					}}
				>
					{/* North America */}
					<div
						className="absolute bg-tertiary opacity-80"
						style={{
							width: "25%",
							height: "20%",
							top: "20%",
							left: "15%",
							borderRadius: "50% 30% 40% 60%",
						}}
					/>
					{/* South America */}
					<div
						className="absolute bg-tertiary opacity-80"
						style={{
							width: "15%",
							height: "25%",
							top: "45%",
							left: "25%",
							borderRadius: "40% 50% 60% 70%",
						}}
					/>
					{/* Europe/Africa */}
					<div
						className="absolute bg-tertiary opacity-80"
						style={{
							width: "25%",
							height: "35%",
							top: "25%",
							left: "45%",
							borderRadius: "70% 40% 60% 30%",
						}}
					/>
					{/* Asia/Australia */}
					<div
						className="absolute bg-tertiary opacity-80"
						style={{
							width: "30%",
							height: "25%",
							top: "20%",
							left: "65%",
							borderRadius: "50% 60% 30% 40%",
						}}
					/>
					<div
						className="absolute bg-tertiary opacity-80"
						style={{
							width: "10%",
							height: "10%",
							top: "55%",
							left: "75%",
							borderRadius: "40% 50% 60% 70%",
						}}
					/>
				</motion.div>

				{/* Cloud layer */}
				<motion.div
					className="absolute inset-0 opacity-30"
					style={{
						background:
							'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><circle cx="20" cy="30" r="10" fill="white" opacity="0.5"/><circle cx="60" cy="70" r="15" fill="white" opacity="0.5"/><circle cx="80" cy="20" r="8" fill="white" opacity="0.5"/></svg>\')',
						backgroundSize: "100% 100%",
					}}
					animate={{ rotate: -360 }}
					transition={{
						duration: 40,
						repeat: Infinity,
						ease: "linear",
					}}
				/>
			</motion.div>
		</motion.div>
	);
};

export default AnimatedBall;
