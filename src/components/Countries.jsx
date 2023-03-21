import Country from "./Country";
import { useState, useEffect } from "react";
const Countries = () => {
  const [countryInfo, setCountryInfo] = useState([]);
  useEffect(() => {
    const promiseEngland = fetch(
      "https://api.carbonintensity.org.uk/regional/england"
    );
    const promiseScotland = fetch(
      "https://api.carbonintensity.org.uk/regional/scotland"
    );
    const promiseWales = fetch(
      "https://api.carbonintensity.org.uk/regional/wales"
    );
    Promise.all([promiseEngland, promiseScotland, promiseWales])
      .then((res) =>
        Promise.all(
          res.map((element) => {
            return element.json();
          })
        )
      )
      .then((data) => {
        setCountryInfo(data);
        // data.map((element) => {
        //   return setCountryInfo([...countryInfo, element.data[0]]);
        // });
      });
  }, []);
  return (
    <section id="countries">
      <h2>
        Where is the majority of each nation's energy coming from right now?
      </h2>
      <div id="countriesContainer">
        {countryInfo.map((country) => {
          return <Country country={country} key={country.regionid} />;
        })}
      </div>
    </section>
  );
};
export default Countries;
