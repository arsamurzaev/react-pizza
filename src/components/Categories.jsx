const Categories = ({ value, onChangeCategory }) => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => (
          <li
            key={index}
            className={value === index ? "active" : ""}
            onClick={() => onChangeCategory(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
