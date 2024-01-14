export default function Header({ onClick }) {
  return (
    <header className="header">
      <div className="wrapper wrapper--header">
        <h1 className="header__title">Where in the world?</h1>
        <div role="button" onClick={onClick} className="header__theme">
          <button className="btn btn--theme">
            <i className="fa-solid fa-moon"></i>
          </button>
          <p className="dark-mode">Dark Mode</p>
        </div>
      </div>
    </header>
  );
}
