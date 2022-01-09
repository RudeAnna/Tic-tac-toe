import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  firstPlayerwinner,
  resetBoard,
  secondPlayerwinner,
} from "../redux/actions";
import Cell from "./Cell";

const Board = () => {
  const dispatch = useDispatch();
  const cellId = [...Array(9).keys()];
  const [gameFlow, setGameFlow] = useState("First player");

  const firstPlayerWinner = useSelector((state) => state?.firstPlayerWinner);
  const firstPlayerSelect = useSelector((state) => state?.firstPlayerSelect);
  const secondPlayerWinner = useSelector((state) => state?.secondPlayerWinner);
  const secondPlayerSelect = useSelector((state) => state?.secondPlayerSelect);
  const isFirstPlayer = useSelector((state) => state?.isFirstPlayer);
  const ocupiedCells = useSelector((state) => state?.ocupiedCells);
  const winnerCombo = useSelector((state) => state?.winnerCombo);

  const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checker = (arr, target) => target.every((v) => arr.includes(v));

  useEffect(() => {
    winCombos.forEach((combo) => {
      if (checker(firstPlayerSelect, combo)) {
        dispatch(firstPlayerwinner(combo));
      }
    });
  }, [firstPlayerSelect]);

  useEffect(() => {
    winCombos.forEach((combo) => {
      if (checker(secondPlayerSelect, combo)) {
        dispatch(secondPlayerwinner(combo));
      }
    });
  }, [secondPlayerSelect]);

  useEffect(() => {
    firstPlayerSelect.length === 5 && winnerCombo.length === 0
      ? setGameFlow("It's a Draw!")
      : firstPlayerWinner
      ? setGameFlow("First Player Wins!")
      : secondPlayerWinner
      ? setGameFlow("Second Player Wins!")
      : isFirstPlayer === false
      ? setGameFlow("Second Player")
      : setGameFlow("First Player");
  }, [
    isFirstPlayer,
    firstPlayerWinner,
    secondPlayerWinner,
    firstPlayerSelect,
    winnerCombo
  ]);

  const handleResetBoard = () => {
    dispatch(resetBoard());
  };

  return (
    <div className="game">
      <h1 className="info-header">{gameFlow}</h1>
      <div className="board">
        {cellId.map((id) => (
          <Cell id={id} key={id} />
        ))}
      </div>
      {
        <button className="reset-btn" onClick={handleResetBoard}>
          Reset
        </button>
      }
    </div>
  );
};

export default Board;
