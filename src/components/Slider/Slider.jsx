import React, { Children, cloneElement, useEffect, useState } from "react";
import classes from "./Slider.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Slider = ({ children }) => {
  const PAGE_WIDTH = 100;

  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH;
      console.log(newOffset);
      return Math.min(newOffset, 0);
    });
  };

  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH;
      const maxOffset = -(PAGE_WIDTH * (pages.length - 1));

      if (newOffset < maxOffset) {
        console.log(1);
        return 0;
      }

      return Math.max(newOffset, maxOffset);
    });
  };

  useEffect(() => {
    setPages(
      Children.map(children, (child, index) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: `${PAGE_WIDTH}%`,
            maxWidth: `${PAGE_WIDTH}%`,
          },
          className: `item-${index + 1}`,
        });
      })
    );
  }, []);

  return (
    <div className={classes.main__container}>
      <div className={classes.window}>
        <div
          className={classes.all__pages_container}
          style={{ transform: `translateX(${offset}%)` }}
        >
          {pages}
        </div>
        <FaChevronLeft
          className={classes.arrow}
          onClick={handleLeftArrowClick}
        />
        <FaChevronRight
          className={classes.arrow}
          onClick={handleRightArrowClick}
        />
      </div>
    </div>
  );
};

export default Slider;
