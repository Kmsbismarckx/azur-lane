import React from "react";
import classes from "./ShipModal.module.css";

const MyModal = ({ visible, setVisible, currentShip }) => {
  const rootClasses = [classes.shipModal];
  if (visible) {
    rootClasses.push(classes.shipModalActive);
  }
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
              <p>Редкость: {currentShip.rarity}</p>
              <p>Класс: {currentShip.type}</p>
              <p>Национальность: {currentShip.affiliation}</p>
            </div>
            <div className={classes.ship__side_stats}>
              <h1 className={classes.stats__name}>Stats</h1>
              <p>
                <img
                  src={process.env.PUBLIC_URL + "/media/stats/fp.png"}
                  alt=""
                  width={25}
                  height={25}
                />
                FP: {currentShip.fp}
              </p>
              <p>
                <img
                  src={process.env.PUBLIC_URL + "/media/stats/hp.png"}
                  alt=""
                  width={25}
                  height={25}
                />
                HP: {currentShip.hp}
              </p>
              <p>
                <img
                  src={process.env.PUBLIC_URL + "/media/stats/aa.png"}
                  alt=""
                  width={25}
                  height={25}
                />
                AA: {currentShip.aa}
              </p>
              <p>MS: {currentShip.ms}</p>
              <p>
                <img
                  src={process.env.PUBLIC_URL + "/media/stats/avi.png"}
                  alt=""
                  width={25}
                  height={25}
                />
                AVI: {currentShip.avi}
              </p>
              <p>
                <img
                  src={process.env.PUBLIC_URL + "/media/stats/trp.png"}
                  alt=""
                  width={25}
                  height={25}
                />
                TRP: {currentShip.trp}
              </p>
            </div>
          </div>
          <div>
            {/*TODO*/}
            {/*<a*/}
            {/*  href={*/}
            {/*    "https://azurlane.koumakan.jp/wiki/" +*/}
            {/*    currentShip.name.split(" ").join("_")*/}
            {/*  }*/}
            {/*  target="_blank"*/}
            {/*>*/}
            {/*  WIKI*/}
            {/*</a>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyModal;
