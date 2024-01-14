export default function Select({sortBy, setSortedBy}) {

  return (
    <>
      <div className="select__container">
        <select name="select" value={sortBy} onChange={(e) => setSortedBy(e.target.value)} className="select">
          <option value="" className="select__item">
            Filter by Region
          </option>
          <option value="africa" className="select__item">
            Afica
          </option>
          <option value="americas" className="select__item">
            America
          </option>
          <option value="asia" className="select__item">
            Asia
          </option>
          <option value="europe" className="select__item">
            Europe
          </option>
          <option value="oceania" className="select__item">
            Oceania
          </option>
        </select>
        <div className="icon__container">
          <i className="fa-solid fa-angle-down"></i>
        </div>
      </div>
    </>
  );
}
