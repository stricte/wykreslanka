import React, { useCallback, useEffect } from "react";
import classNames from "classnames";
import { isMobile } from "./utils";

export const Grid = ({
  grid,
  onReset,
  cellSelected,
  cellMarked,
  onSelectionStart,
  onSelectionStop,
  onSelectionMove,
}) => {
  const onTouchMove = useCallback(
    (e) => {
      const touch = e.touches[0];
      if (!touch) return;

      const {
        dataset: { x, y },
      } = document.elementFromPoint(touch.clientX, touch.clientY);

      const cords = [parseInt(x), parseInt(y)];

      if (isNaN(cords[0]) || isNaN(cords[1])) return;

      onSelectionMove(...cords);
    },
    [onSelectionMove]
  );

  const onTouchStart = (e, i, ii) => {
    onSelectionStart(i, ii);
  };

  const onTouchEnd = () => {
    onSelectionStop();
  };

  const onMouseDown = (e, i, ii) => {
    onSelectionStart(i, ii);
  };

  const onMouseOver = (e, i, ii) => {
    onSelectionMove(i, ii);
  };

  const onMouseUp = () => {
    onSelectionStop();
  };

  const handleMove = useCallback(
    (e) => {
      e.preventDefault();
      onTouchMove(e);
    },
    [onTouchMove]
  );

  useEffect(() => {
    window.addEventListener("touchmove", handleMove, {
      passive: false,
    });
    return () => window.removeEventListener("touchmove", handleMove);
  }, [handleMove]);

  return (
    <div className="grid">
      <div className="toolbar">
        <ul>
          <li>
            <a
              href="#reset"
              onClick={(e) => {
                e.preventDefault();
                onReset(5, 5, 5);
              }}
            >
              Od nowa 5x5
            </a>
          </li>
          <li>
            <a
              href="#reset"
              onClick={(e) => {
                e.preventDefault();
                onReset(7, 7, 7);
              }}
            >
              Od nowa 7x7
            </a>
          </li>
          <li>
            <a
              href="#reset"
              onClick={(e) => {
                e.preventDefault();
                onReset(10, 10, 10);
              }}
            >
              Od nowa 10x10
            </a>
          </li>
        </ul>
      </div>
      <div className="grid-inner">
        {grid.map((row, i) => (
          <div className="row" key={`row-${i}`}>
            {row.map((cell, ii) => (
              <div
                className={classNames("cell", {
                  selected: cellSelected([i, ii]),
                  marked: cellMarked([i, ii]),
                })}
                data-x={i}
                data-y={ii}
                key={`cell-${ii}`}
                onMouseDown={(e) => !isMobile() && onMouseDown(e, i, ii)}
                onMouseUp={(e) => !isMobile() && onMouseUp(e, i, ii)}
                onMouseOver={(e) => !isMobile() && onMouseOver(e, i, ii)}
                onTouchStart={(e) => isMobile() && onTouchStart(e, i, ii)}
                onTouchEnd={(e) => isMobile() && onTouchEnd(e, i, ii)}
                onTouchCancel={(e) => isMobile() && onTouchEnd(e, i, ii)}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
