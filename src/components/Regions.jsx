import { useEffect, useState } from "react";
import RegionInfo from "./RegionInfo";

const Regions = () => {
  const [region, setRegion] = useState(1);
  const [selection, setSelection] = useState("");
  const [regionInfo, setRegionInfo] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    setRegion(selection);
  };
  useEffect(() => {
    fetch(`https://api.carbonintensity.org.uk/regional/regionid/${region}`)
      .then((res) => {
        console.log(res, "res");
        return res.json();
      })
      .then(({ data }) => {
        console.log(data, "data");
        setRegionInfo(data[0]);
      });
  }, [region]);
  return (
    <section id="regions">
      <form onSubmit={handleSubmit}>
        <label htmlFor="regions">Give me some regional data for </label>
        <select
          name="region"
          id="region"
          onChange={(e) => {
            setSelection(e.target.value);
          }}
        >
          <option value="1">North Scotland</option>
          <option value="2">South Scotland</option>
          <option value="3">North West</option>
          <option value="4">North East</option>
          <option value="5">Yorkshire</option>
          <option value="6">North Wales</option>
          <option value="7">South Wales</option>
          <option value="8">West Midlands</option>
          <option value="9">East Midlands</option>
          <option value="10">East England</option>
          <option value="11">South West England</option>
          <option value="12">South England</option>
          <option value="13">London</option>
          <option value="14">South East England</option>
        </select>
        <button>select</button>
      </form>

      <RegionInfo regionInfo={regionInfo} />
    </section>
  );
};
export default Regions;
