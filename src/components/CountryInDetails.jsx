import CountryDetailsList from "./CountryDetailsList";

export default function CountryInDetails({ country }) {
  return (
    <div className="country-details">
      <div className="flag-box">
        <img className="country-details__flag" src={country.flag} alt="" />
      </div>
      <div className="country-details__details">
        <h2 className="country-details__name">{country.name}</h2>
        <CountryDetailsList country={country} />
      {
          country.borders?.lenght > 0 ? (<p className="country-details__borders country-details__borders--countries">
          Border Countries:
          {country.borders?.map((el) => (
            <span key={el} className="border">
              {el}
            </span>
          ))}
        </p>) : null
      } 
      </div>
    </div>
  );
}
