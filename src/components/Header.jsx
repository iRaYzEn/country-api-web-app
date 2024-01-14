export default function Header({ onClick }) {
  return (
    <header className="header">
      <div className="wrapper wrapper--header">
        <h1 className="header__title">Where in the world?</h1>
        <div role="button" onClick={onClick} className="header__theme">
          <button
            aria-label="btn-theme"
            className="btn btn--theme fa-solid fa-moon"
          ></button>
          <p className="dark-mode">Dark Mode</p>
        </div>
      </div>
    </header>
  );
}
