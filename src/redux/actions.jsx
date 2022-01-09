import {
  CHANGE_PLAYER,
  FIRST_PLAYER_SELECT,
  SECOND_PLAYER_SELECT,
  RESET_BOARD,
  FIRST_PLAYER_WINNER,
  SECOND_PLAYER_WINNER
} from "./types";

export const changePlayer = () => {
  return { type: CHANGE_PLAYER };
};

export const firstPlayerSelect = (cellNumber) => {
  return { type: FIRST_PLAYER_SELECT, payload: cellNumber };
};

export const secondPlayerSelect = (cellNumber) => {
  return { type: SECOND_PLAYER_SELECT, payload: cellNumber };
};

export const resetBoard = () => {
    return { type: RESET_BOARD }
}

export const firstPlayerwinner = (combo) => {
  return { type: FIRST_PLAYER_WINNER, payload: combo}
}

export const secondPlayerwinner = (combo) => {
  return { type: SECOND_PLAYER_WINNER, payload: combo}
}