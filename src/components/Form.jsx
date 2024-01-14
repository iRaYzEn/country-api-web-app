export default function Form({ query, setQuery }) {
  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <div className="form">
      <input
        value={query}
        onChange={handleChange}
        className="form__input"
        type="text"
        placeholder="Search for a country..."
      />
      <i className="fa-solid fa-magnifying-glass search--icon"></i>
    </div>
  );
}
