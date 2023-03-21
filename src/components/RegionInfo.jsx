const RegionInfo = ({ regionInfo }) => {
  console.log(regionInfo.data[0].intensity.forecast);
  return (
    <section>
      <h2>{regionInfo.shortname}</h2>
      <h3>
        {" "}
        Current forecast: {regionInfo.data[0].intensity.forecast} <br></br>
        Current consumption: {regionInfo.data[0].intensity.index}{" "}
      </h3>
      <div id="mixContainer">
        {regionInfo.data[0].generationmix.map((mix) => {
          return (
            <h4 id="fuelMix">
              {mix.fuel} : {mix.perc}%
            </h4>
          );
        })}
      </div>
    </section>
  );
};
export default RegionInfo;
