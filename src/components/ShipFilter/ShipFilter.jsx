import React from "react";
import Select from "../Select/Select";
import classes from "./ShipFilter.module.css";
import Input from "../Input/Input";

const ShipFilter = ({ filter, setFilter }) => {
  return (
    <div className={classes.shipFilter}>
      <Select
        className={classes.filter__item}
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        options={[
          { value: "", name: "По умолчанию" },
          { value: "name", name: "По имени" },
          { value: "rarity", name: "По редкости" },
          { value: "type", name: "По классу" },
        ]}
      />
      <Select
        className={classes.filter__item}
        value={filter.type}
        onChange={(selectedSort) =>
          setFilter({ ...filter, type: selectedSort })
        }
        options={[
          { value: "", name: "По умолчанию" },
          { value: "battleship", name: "Линкоры" },
          { value: "aircraft carrier", name: "Авианосцы" },
          { value: "heavy cruiser", name: "Тяжелые крейсера" },
          { value: "light cruiser", name: "Лёгкие крейсера" },
          { value: "destroyer", name: "Эсминцы" },
          { value: "submarine", name: "Подводные лодки" },
          { value: "monitor", name: "Другие" },
        ]}
      />
      <Input
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Поиск..."
        className="search"
      />
    </div>
  );
};

export default ShipFilter;
