import Form from "./Form";
import Select from "./Select";

export default function Filter({
  isClicked,
  query,
  setQuery,
  sortBy,
  setSortedBy,
  setIsClicked,
  setData,
  data
}) {
    function handleClick() {
        setIsClicked(false)
        setData(data)
    }

  return (
    <section className="section">
      <div className="wrapper wrapper--filter">
        {isClicked === false ? (
          <>
            <Form query={query} setQuery={setQuery} />
            <Select setSortedBy={setSortedBy} sortBy={sortBy} />
          </>
        ) : (
            <div role="button" onClick={handleClick} className="button__back">
                <i className="fa-solid fa-arrow-left"></i>
                <button className="btn btn--back">Back</button>
            </div>
        )}
      </div>
    </section>
  );
}
