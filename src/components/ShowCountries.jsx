import Country from "./Country";
import CountryInDetails from "./CountryInDetails";
export default function ShowCountries({ data, isClicked, setIsClicked }) {
  return (
    <section className="section">
      <div className="wrapper wrapper--data">
        {data.map((country) => {
          if (!isClicked) {
            return (
              <Country
                onClick={setIsClicked}
                key={country.name}
                country={country}
              ></Country>
            );
          } else {
            return <CountryInDetails key={country.name} country={country} />;
          }
        })}
      </div>
    </section>
  );
}
