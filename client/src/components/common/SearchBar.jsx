const SearchBar = ({ value, onChange }) => {
	return (
		<div className="w-1/2 md:w-[30%]">
			<input
				type="text"
				placeholder="Search articles, tips, hacks..."
				className="w-full px-4 py-2 rounded-md bg-dark border border-light/20 text-light placeholder:text-light/50 focus:outline-none focus:ring-2 focus:ring-secondary"
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

export default SearchBar;
