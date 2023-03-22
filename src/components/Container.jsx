import Graph from "./Graph";
import Countries from "./Countries";
// import Regions from "./Regions";
import Stats from "./Stats";
const Container = () => {
  return (
    <section id="container">
      <Graph class="graph" />
      <Countries />
      {/* <Regions /> */}
      <Stats />
    </section>
  );
};
export default Container;
