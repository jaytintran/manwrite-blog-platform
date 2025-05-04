import { IKImage } from "imagekitio-react";

const Image = ({ src, className, width, height, alt }) => {
	return (
		<IKImage
			alt={alt}
			urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
			path={src}
			className={className}
			lqip={{ active: true, quality: 20 }}
			loading="lazy"
			width={width}
			height={height}
		/>
	);
};

export default Image;
