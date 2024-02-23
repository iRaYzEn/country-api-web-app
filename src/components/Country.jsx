import { useContext } from "react";
import { Context } from "../App";
export default function Country({ country, onClick }) {
    const [data, setData] = useContext(Context);

    function handleClick() {
        setData([country]);
        onClick(true);
    }

    return (
        <div onClick={handleClick} role="button" className="country">
            <div className="country__flag-box">
                <img className="country__flag" src={country.flag} alt="" />
            </div>
            <div className="country__infos">
                <h2 className="country__name">{country.name}</h2>
                <ul className="country__infos-list">
                    <li className="country__info-item">
                        Population:{" "}
                        <span className="population">{country.population}</span>
                    </li>
                    <li className="country__info-item">
                        Region: <span className="region">{country.region}</span>
                    </li>
                    <li className="country__info-item">
                        Capital:{" "}
                        <span className="capital">{country.capital}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
