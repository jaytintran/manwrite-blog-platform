const categories = [
	"All",
	"Health",
	"Fitness",
	"Mentality",
	"Tech",
	"Style",
	"Combat",
];

const CategoriesBreadcrumbs = ({ selected, onSelect }) => {
	return (
		<div className="flex gap-3 flex-wrap">
			{categories.map((cat, idx) => (
				<button
					key={idx}
					onClick={() => onSelect(cat)}
					className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap ${
						selected === cat
							? "bg-secondary text-dark font-semibold"
							: "bg-light1 text-dark hover:bg-light2"
					}`}
				>
					{cat}
				</button>
			))}
		</div>
	);
};

export default CategoriesBreadcrumbs;
