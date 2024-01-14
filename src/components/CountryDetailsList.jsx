export default function CountryDetailsList({ country }) {
  return (
    <ul className="country-details__list">
      <div>
        <li className="country-details__list-item">
          <span>Native Name: </span>
          {country.nativeName}
        </li>
        <li className="country-details__list-item">
          <span>Population: </span>
          {country.population}
        </li>
        <li className="country-details__list-item">
          <span>Region: </span>
          {country.region}
        </li>
        <li className="country-details__list-item">
          <span>Sub Region: </span>
          {country.subregion}
        </li>
      {
          country.capital?.length > 0 ? (
              <li className="country-details__list-item">
              <span>Capital: </span>
              {country.capital}
              </li>
          ) : null
      }
      </div>
      <div>
        <li className="country-details__list-item">
          <span>Top Level Domain: </span>
          {country.topLevelDomain}
        </li>
        {country.currencies?.length > 0 ? (
          <li className="country-details__list-item">
            <span>currencies: </span>
            {country.currencies?.map((el) => el.name)}
          </li>
        ) : null}
        <li className="country-details__list-item country-details__list-item--currencies">
          <span>Languages: </span>
          {country.languages?.map((el) => (
            <span key={el.name} className="currencie">
              {" "}{el.name},
            </span>
          ))}
        </li>
      </div>
    </ul>
  );
}
