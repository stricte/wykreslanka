import React, {
  useState,
  useLayoutEffect,
  useCallback,
  useEffect,
} from "react";
import classNames from "classnames";

import "./App.css";
import { generate, lineCords, isMobile } from "./utils";

let placedWords = JSON.parse(window.localStorage.getItem("placedWords"));
let grid = JSON.parse(window.localStorage.getItem("grid"));
let placedWordsCords = JSON.parse(
  window.localStorage.getItem("placedWordsCords")
);

if (!placedWordsCords || !grid || !placedWordsCords) {
  [placedWords, grid, placedWordsCords] = generate();

  window.localStorage.setItem("placedWords", JSON.stringify(placedWords));
  window.localStorage.setItem("grid", JSON.stringify(grid));
  window.localStorage.setItem(
    "placedWordsCords",
    JSON.stringify(placedWordsCords)
  );
}

function App() {
  const [start, setStart] = useState();
  const [stop, setStop] = useState();

  const [selectedCords, setSelectedCords] = useState();
  const [selectionMode, setSelectionMode] = useState(false);

  const [markedWords, setMarkedWords] = useState(
    JSON.parse(window.localStorage.getItem("markedWords") || "[]")
  );
  const [markedCords, setMarkedCords] = useState(
    JSON.parse(window.localStorage.getItem("markedCords") || "[]")
  );

  useEffect(() => {
    window.localStorage.setItem("markedWords", JSON.stringify(markedWords));
    window.localStorage.setItem("markedCords", JSON.stringify(markedCords));
  }, [markedWords, markedCords]);

  const onMouseDown = (x, y) => {
    setSelectionMode(true);
    setStart([x, y]);
    setStop([x, y]);
  };

  const onMouseUp = (x, y) => {
    setStop([x, y]);
    setSelectionMode(false);
  };

  const onMouseOver = (x, y) => {
    if (!selectionMode) return;
    setStop([x, y]);
  };

  const wordMarkedIndex = useCallback(() => {
    let markedIndex = -1;
    const selectedKey = [].concat(...selectedCords).join("");

    placedWordsCords.forEach((placedWordCords, index) => {
      const placedKey = [].concat(...placedWordCords).join("");

      if (placedKey === selectedKey) markedIndex = index;
    });

    return markedIndex;
  }, [selectedCords]);

  useLayoutEffect(() => {
    if (!start) return;
    if (!stop) return;

    setSelectedCords(lineCords(start, stop));
  }, [start, stop]);

  useLayoutEffect(() => {
    if (selectionMode) return;
    if (!selectedCords) return;

    const markedWordIndex = wordMarkedIndex();

    if (markedWordIndex > -1) {
      setMarkedWords((prev) => [...prev, markedWordIndex]);
      setMarkedCords((prev) => [...prev, ...selectedCords]);
    } else {
    }

    setSelectedCords();
    setStart();
    setStop();
  }, [selectionMode, selectedCords, wordMarkedIndex]);

  const cellMarked = (cords) => {
    if (!markedCords) return false;

    return markedCords.find(
      (markedCords) =>
        markedCords[0] === cords[0] && markedCords[1] === cords[1]
    );
  };

  const cellSelected = (cords) => {
    if (!selectedCords) return false;

    return selectedCords.find(
      (selectedCords) =>
        selectedCords[0] === cords[0] && selectedCords[1] === cords[1]
    );
  };

  const resetGame = () => {
    window.localStorage.clear();
    window.location.reload();
  };

  const dummyListener = (e) => e.preventDefault();

  const onTouchStart = (x, y) => {
    document.addEventListener("touchstart", dummyListener);

    setSelectionMode(true);
    setStart([x, y]);
    setStop([x, y]);
  };

  const onTouchEnd = () => {
    document.removeEventListener("touchstart", dummyListener);

    setSelectionMode(false);
  };

  const onTouchMove = (e) => {
    if (!selectionMode) return;

    const touch = e.touches[0];
    if (!touch) return;

    const {
      dataset: { x, y },
    } = document.elementFromPoint(touch.clientX, touch.clientY);

    const cords = [parseInt(x), parseInt(y)];

    setStop((prev) => {
      if (prev && prev.join("") === cords.join("")) return null;
      else return cords;
    });
  };

  return (
    <>
      <div className="container">
        <div className="grid">
          <div className="toolbar">
            <button onClick={resetGame}>Reset</button>
          </div>
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

        <div className="wordList">
          {placedWords.map((word, i) => (
            <div
              className={classNames("word", {
                marked: markedWords.includes(i),
              })}
              key={`word-${i}`}
            >
              {word}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;