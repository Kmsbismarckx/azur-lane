import "./App.css";
import standartShipsData from "./standartShips.json";
import prototypeShipsData from "./prototypeShips.json";
import ShipList from "./components/ShipList/ShipList";
import { useState } from "react";
import { useShips } from "./hooks/useShips";
import Slider from "./components/Slider/Slider";
import Header from "./components/Header/Header";

function App() {
  const standartShips = standartShipsData["standart ships"];
  const prototypeShips = prototypeShipsData["prototypes"];
  const [ships, setShips] = useState(prototypeShips);

  const [filter, setFilter] = useState({
    sort: "",
    query: "",
    type: "",
  });

  const sortedAndSearchedShips = useShips(
    ships,
    filter.sort,
    filter.query,
    filter.type
  );

  return (
    <div className="App">
      <Header />
      <Slider>
        <div className="item item-1"></div>
        <div className="item item-2"></div>
        <div className="item item-3"></div>
      </Slider>
      <ShipList
        ships={sortedAndSearchedShips}
        filter={filter}
        setFilter={setFilter}
      />
    </div>
  );
}

export default App;
