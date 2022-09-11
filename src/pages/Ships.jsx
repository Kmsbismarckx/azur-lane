import { useContext, useEffect, useState } from "react";
import Slider from "../components/Slider/Slider";
import ShipList from "../components/ShipList/ShipList";
import ShipModal from "../components/ShipModal/ShipModal";
import { useShips } from "../hooks/useShips";
import React from "react";
import prototypeShipsData from "../prototypeShips.json";
import { HeaderContext } from "../context";
import { useDispatch, useSelector } from "react-redux";

function Ships() {
  const ships = useSelector((state) => state.shipsReducer.ships);

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

  const [modal, setModal] = useState(false);
  const [currentShip, setCurrentShip] = useState({ rarity: "", name: "" });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "SET_SHIPS", payload: ships });
  }, []);

  return (
    <div className="App">
      <Slider>
        <div className="item item-1"></div>
        <div className="item item-2"></div>
        <div className="item item-3"></div>
      </Slider>
      <ShipList
        ships={sortedAndSearchedShips}
        filter={filter}
        setFilter={setFilter}
        modal={modal}
        setModal={setModal}
        onClick={() => {
          setModal(true);
        }}
        setCurrentShip={setCurrentShip}
      />
      <ShipModal
        visible={modal}
        setVisible={setModal}
        currentShip={currentShip}
      ></ShipModal>
    </div>
  );
}

export default Ships;
