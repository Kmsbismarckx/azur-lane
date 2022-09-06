import { useMemo } from "react";

export const useSortedShips = (ships, sort, type) => {
  const sortedShips = useMemo(() => {
    if (sort === "rarity") {
      return [...ships].sort((a, b) => b[sort].localeCompare(a[sort]));
    } else if (type) {
      return ships.filter((ship) => {
        return ship.type.toLowerCase().includes(type.toLowerCase());
      });
    } else if (sort) {
      return [...ships].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return ships;
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
