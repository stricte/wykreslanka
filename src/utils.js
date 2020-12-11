import wordsDict from "./words.json";

export const lineCords = (start, stop) => {
  let [x0, y0] = start;
  let [x1, y1] = stop;

  const cords = [];

  const dx = Math.abs(x1 - x0),
    sx = x0 < x1 ? 1 : -1;
  const dy = Math.abs(y1 - y0),
    sy = y0 < y1 ? 1 : -1;

  let err = (dx > dy ? dx : -dy) / 2;

  while (true) {
    cords.push([x0, y0]);

    if (x0 === x1 && y0 === y1) break;

    const e2 = err;

    if (e2 > -dx) {
      err -= dy;
      x0 += sx;
    }
    if (e2 < dy) {
      err += dx;
      y0 += sy;
    }
  }

  return cords;
};

const initGrid = (m, n) => {
  return [...Array(m)].map((e) => Array(n).fill(null));
};

const dirs = {
  right: [0, 1],
  left: [0, -1],
  up: [-1, 0],
  down: [1, 0],
  rightdown: [1, 1],
  rightup: [-1, 1],
  leftdown: [1, -1],
  leftup: [-1, -1],
};

const randomWord = (words) =>
  words.sort(() => Math.random() - Math.random()).slice(0, 1)[0];

const wordCords = (startCords, direction, word) => {
  const wordLen = word.length;
  const cords = [startCords];

  return Array(wordLen - 1)
    .fill(direction)
    .reduce(
      (cords, dir) => [...cords, moveCursor(cords.slice(-1)[0], dir)],
      cords
    );
};

const moveCursor = (currentCords, direction) => {
  return [currentCords[0] + direction[0], currentCords[1] + direction[1]];
};

const placeWordOnGrid = (word, wordCords, grid) => {
  wordCords.forEach((cords, index) => {
    const value = word.charAt(index);
    grid = updateGridAt(cords, value, grid);
  });

  return grid;
};

const updateGridAt = (cords, value, grid) => {
  const newGrid = cloneGrid(grid);
  newGrid[cords[0]][cords[1]] = value;

  return newGrid;
};

const validateWordCords = (word, wordCords, grid) => {
  for (let i = 0; i < wordCords.length; i++) {
    const value = word.charAt(i);
    const cords = wordCords[i];

    if (cordsOutsideGrid(cords, grid)) return false;
    if (positionTaken(cords, value, grid)) return false;
  }
  return true;
};

const cordsOutsideGrid = (cords, grid) => {
  if (cords[0] < 0 || cords[0] > grid.length - 1) return true;
  if (cords[1] < 0 || cords[1] > grid[0].length - 1) return true;

  return false;
};

const positionTaken = (cords, value, grid) => {
  const currentValue = valueAt(cords, grid);
  return !!currentValue && currentValue !== value;
};

const valueAt = (cords, grid) => {
  return grid[cords[0]][cords[1]];
};

const cloneGrid = (grid) => {
  return grid.map((row) => [...row]);
};

const randomDir = (dirs) => {
  const keys = Object.keys(dirs);
  const key = keys[Math.floor(Math.random() * keys.length)];

  return dirs[key];
};

const randomCords = (m, n) => {
  const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

  return [random(0, m), random(0, n)];
};

const randomValue = () =>
  String.fromCharCode(65 + Math.floor(Math.random() * 26));

const fillGrid = (grid) => {
  grid = cloneGrid(grid);

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!grid[i][j]) {
        grid[i][j] = randomValue();
      }
    }
  }

  return grid;
};

export const generate = (m = 10, n = 10, wordsCount = 7) => {
  let grid = initGrid(m, n);
  let placedWords = [];
  let placedWordsCords = [];

  while (placedWords.length < wordsCount) {
    const word = randomWord(wordsDict);

    if (placedWords.includes(word)) continue;

    const direction = randomDir(dirs);
    const initialCords = randomCords(m, n);

    const cords = wordCords(initialCords, direction, word);

    if (validateWordCords(word, cords, grid)) {
      grid = placeWordOnGrid(word, cords, grid);

      placedWords.push(word);
      placedWordsCords.push(cords);
    }
  }

  grid = fillGrid(grid);

  return [placedWords, grid, placedWordsCords];
};
