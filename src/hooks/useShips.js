import { useMemo } from "react";

export const useSortedShips = (ships, sort, type) => {
  const sortedShips = useMemo(() => {
    let shipsCopy = [...ships];
    if (sort) {
      shipsCopy.sort((a, b) => a[sort].localeCompare(b[sort]));
      if (sort === "rarity") {
        shipsCopy.reverse();
      }
    }
    if (type) {
      shipsCopy = shipsCopy.filter((ship) => {
        return ship.type.toLowerCase().includes(type.toLowerCase());
      });
    }
    return shipsCopy;
  }, [sort, ships, type]);
  return sortedShips;
};

export const useShips = (ships, sort, query, type) => {
  const sortedShips = useSortedShips(ships, sort, type);

  const sortedAndSearchedShips = useMemo(() => {
    return sortedShips.filter((ship) =>
      ship.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, type, sortedShips]);

  return sortedAndSearchedShips;
};
