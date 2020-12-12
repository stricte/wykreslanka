import React from "react";

import classNames from "classnames";

import { isMobile } from "./utils";

export const Grid = ({
  grid,
  onReset,
  cellSelected,
  cellMarked,
  onMouseDown,
  onMouseUp,
  onMouseOver,
  onTouchStart,
  onTouchEnd,
  onTouchMove,
}) => {
  return (
    <div className="grid">
      <div className="toolbar">
        <a
          className="btn red"
          href="#reset"
          onClick={(e) => {
            e.preventDefault();
            onReset();
          }}
        >
          Od nowa
        </a>
      </div>
      <div>
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
                onMouseDown={() => !isMobile() && onMouseDown(i, ii)}
                onMouseUp={() => !isMobile() && onMouseUp(i, ii)}
                onMouseOver={() => !isMobile() && onMouseOver(i, ii)}
                onTouchStart={(e) => isMobile() && onTouchStart(i, ii)}
                onTouchEnd={() => isMobile() && onTouchEnd()}
                onTouchMove={(e) => isMobile() && onTouchMove(e)}
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
