export default function Header({ onClick }) {
  return (
    <header className="header">
      <div className="wrapper wrapper--header">
        <h1 className="header__title">Where in the world?</h1>
        <div role="button" onClick={onClick} className="header__theme">
          <i className="fa-solid fa-moon btn btn--theme"></i>
          <p className="dark-mode">Dark Mode</p>
        </div>
      </div>
    </header>
  );
}
