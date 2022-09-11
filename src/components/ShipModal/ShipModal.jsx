import React from "react";
import classes from "./ShipModal.module.css";
import ShipDetail from "../ShipDetail/ShipDetail";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const MyModal = ({ visible, setVisible, currentShip }) => {
  const urlPreFix = process.env.PUBLIC_URL;
  const rootClasses = [classes.shipModal];

  if (visible) {
    rootClasses.push(classes.shipModalActive);
  }
  console.log(currentShip);

  return (
    <div
      className={rootClasses.join(" ")}
      onClick={() => {
        setVisible(false);
      }}
    >
      <div
        className={classes.shipModalContent}
        onClick={(event) => event.stopPropagation()}
      >
        <div>
          <div className={classes.ship}>
            <div className={classes.ship__main}>
              <h1 className={classes.ship__name}>{currentShip.name}</h1>
              <img
                className={
                  classes.ship__img +
                    " ship__img " +
                    currentShip.rarity.toLowerCase().split(/\s+/).join("") ||
                  classes.ship__img
                }
                src={currentShip.imgURL}
                alt=""
              />
            </div>
            <div className={classes.ship__side}>
              <div className={classes.ship__side_details}>
                <h1 className={classes.side__name}>Ship details</h1>
                <div className={classes.side__name_description}>
                  <p>Редкость: {currentShip.rarity}</p>
                  <ShipDetail
                    name="Класс"
                    urlPreFix={urlPreFix}
                    currentShip={currentShip}
                    prop="type"
                  />
                  <ShipDetail
                    name="Национальность"
                    urlPreFix={urlPreFix}
                    currentShip={currentShip}
                    prop="affiliation"
                  />
                </div>
              </div>
              <div className={classes.ship__side_stats}>
                <h1 className={classes.stats__name}>Stats</h1>
                <p>
                  <img
                    src={urlPreFix + "/media/stats/fp.png"}
                    alt=""
                    width={25}
                    height={25}
                  />
                  {currentShip.fp}
                </p>
                <p>
                  <img
                    src={urlPreFix + "/media/stats/hp.png"}
                    alt=""
                    width={25}
                    height={25}
                  />
                  {currentShip.hp}
                </p>
                <p>
                  <img
                    src={urlPreFix + "/media/stats/aa.png"}
                    alt=""
                    width={25}
                    height={25}
                  />
                  {currentShip.aa}
                </p>
                <p>
                  <img
                    src={urlPreFix + "/media/stats/ms.png"}
                    alt=""
                    width={25}
                    height={25}
                  />
                  {currentShip.ms}
                </p>
                <p>
                  <img
                    src={urlPreFix + "/media/stats/avi.png"}
                    alt=""
                    width={25}
                    height={25}
                  />
                  {currentShip.avi}
                </p>
                <p>
                  <img
                    src={urlPreFix + "/media/stats/trp.png"}
                    alt=""
                    width={25}
                    height={25}
                  />
                  {currentShip.trp}
                </p>
              </div>
            </div>
          </div>
          <div>
            <Link to={`/ships/${currentShip.id}`}>About</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyModal;
