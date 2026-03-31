function Category({ finalCategory }) {
  return (
    <ul>
      {finalCategory.map((cat, index) => (
        <li key={index}>
          {typeof cat === "string" ? cat : cat.name}
        </li>
      ))}
    </ul>
  );
}

export default Category;