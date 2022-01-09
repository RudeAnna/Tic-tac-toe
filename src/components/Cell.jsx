import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changePlayer,
  firstPlayerSelect,
  secondPlayerSelect,
} from "../redux/actions";

const Cell = ({ id }) => {
  const [icon, setIcon] = useState(null);
  const isFirstPlayer = useSelector((state) => state?.isFirstPlayer);
  const resetClicked = useSelector((state) => state?.resetClicked);
  const winnerCombo = useSelector((state) => state?.winnerCombo);
  const dispatch = useDispatch();

  const handleCellClick = () => {
    if (isFirstPlayer === false) {
      setIcon(<p className="circle">&#9675;</p>);
      dispatch(secondPlayerSelect(id));
    } else {
      setIcon(<p className="cross">&#9587;</p>);
      dispatch(firstPlayerSelect(id));
    }
    dispatch(changePlayer());
  };

  useEffect(() => {
    if (resetClicked === true) {
      setIcon(null);
    }
  }, [resetClicked]);

  return (
    <button
      id={id}
      className={winnerCombo.includes(id) ? "winning-cell cell" : "cell"}
      onClick={handleCellClick}
      disabled={icon || winnerCombo.length > 0}
    >
      {icon}
    </button>
  );
};

export default Cell;
