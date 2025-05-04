const Section = ({ children, className }) => {
	return (
		<section className={`py-24 container ${className}`}>{children}</section>
	);
};

export default Section;
