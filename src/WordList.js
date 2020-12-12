import React from "react";

import classNames from "classnames";

export const WordList = ({ placedWords, markedWords }) => {
  return (
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
  );
};
