const Country = (country) => {
  const sortedArray = country.country.data[0].data[0].generationmix.sort(
    (a, b) => {
      return b.perc - a.perc;
    }
  );
  return (
    <div className="countryBox" key={country.country.data[0].regionid}>
      <h2>
        {country.country.data[0].shortname} <br></br>
      </h2>
      <h2>
        {" "}
        <b>{sortedArray[0].fuel} </b>
      </h2>
      <h3>{sortedArray[0].perc}%</h3>
    </div>
  );
};
export default Country;
