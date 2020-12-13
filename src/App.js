import React, {
  useState,
  useLayoutEffect,
  useCallback,
  useEffect,
} from "react";
import { v4 as uuidv4 } from "uuid";
import { useQueryParam, NumberParam } from "use-query-params";

import { generate, lineCords } from "./utils";
import { Grid } from "./Grid";
import { WordList } from "./WordList";

import useStateWithLocalStorage from "./useStateWithLocalStorage";
import Hello from "./Hello";
import Loader from "./Loader";
import Grats from "./Grats";

function App() {
  const [m] = useQueryParam("m", NumberParam);
  const [n] = useQueryParam("n", NumberParam);
  const [c] = useQueryParam("c", NumberParam);

  const [start, setStart] = useState();
  const [stop, setStop] = useState();

  const [selectedCords, setSelectedCords] = useState();
  const [selectionMode, setSelectionMode] = useState(false);

  const [gameId, setGameId] = useStateWithLocalStorage("gameId", null);
  // eslint-disable-next-line no-unused-vars
  const [userId, setUserId] = useStateWithLocalStorage("userId", uuidv4());
  const [username, setUsername] = useStateWithLocalStorage("username", null);

  const [safetyPins, setSafetyPins] = useStateWithLocalStorage("safetPins", 0);

  const [markedWords, setMarkedWords] = useStateWithLocalStorage(
    "markedWords",
    []
  );
  const [markedCords, setMarkedCords] = useStateWithLocalStorage(
    "markedCords",
    []
  );

  const [grid, setGrid] = useStateWithLocalStorage("grid", null);
  const [placedWords, setPlacedWords] = useStateWithLocalStorage(
    "placedWords",
    null
  );
  const [placedCords, setPlacedCords] = useStateWithLocalStorage(
    "placedCords",
    null
  );

  const allMarked = useCallback(() => {
    if (!markedWords) return false;
    if (!placedWords) return false;
    return markedWords.length === placedWords.length;
  }, [markedWords, placedWords]);

  const gameInitialized = useCallback(() => gameId, [gameId]);

  const initializeGame = useCallback(() => {
    const [placedWords, placedCords, grid] = generate(m, n, c);

    setStart(null);
    setStop(null);

    setSelectionMode(false);
    setSelectedCords(false);

    setMarkedWords([]);
    setMarkedCords([]);

    setPlacedWords(placedWords);
    setPlacedCords(placedCords);
    setGrid(grid);

    setGameId(uuidv4());
  }, [
    setPlacedWords,
    setPlacedCords,
    setGrid,
    setGameId,
    setMarkedCords,
    setMarkedWords,
    m,
    n,
    c,
  ]);

  const calcSafetyPins = () => markedWords.length;

  useEffect(() => {
    if (gameInitialized()) return;
    initializeGame();
  }, [gameInitialized, initializeGame]);

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

    placedCords.forEach((cords, index) => {
      const placedKey = [].concat(...cords).join("");

      if (placedKey === selectedKey) markedIndex = index;
    });

    return markedIndex;
  }, [selectedCords, placedCords]);

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
    }

    setSelectedCords();
    setStart();
    setStop();
  }, [
    selectionMode,
    selectedCords,
    wordMarkedIndex,
    setMarkedCords,
    setMarkedWords,
  ]);

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
    initializeGame();
  };

  const onTouchStart = (x, y) => {
    setSelectionMode(true);
    setStart([x, y]);
    setStop([x, y]);
  };

  const onTouchEnd = () => {
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

    if (isNaN(cords[0]) || isNaN(cords[1])) return;

    setStop((prev) => {
      if (prev && prev.join("") === cords.join("")) return null;
      else return cords;
    });
  };

  const introduced = () => !!username;

  const onUsername = (username) => setUsername(username);

  return (
    <>
      <div className="container">
        {!introduced() && <Hello onSubmit={onUsername} />}

        {introduced() && !gameInitialized() && <Loader />}

        {introduced() && gameInitialized() && allMarked() && (
          <Grats
            username={username}
            onAgain={resetGame}
            safetyPins={safetyPins}
          />
        )}
        {introduced() && gameInitialized() && !allMarked() && (
          <>
            <Grid
              grid={grid}
              onMouseDown={onMouseDown}
              onMouseOver={onMouseOver}
              onMouseUp={onMouseUp}
              onReset={resetGame}
              onTouchEnd={onTouchEnd}
              onTouchMove={onTouchMove}
              onTouchStart={onTouchStart}
              cellSelected={cellSelected}
              cellMarked={cellMarked}
            />

            <WordList placedWords={placedWords} markedWords={markedWords} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
