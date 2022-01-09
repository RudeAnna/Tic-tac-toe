import {
  CHANGE_PLAYER,
  FIRST_PLAYER_SELECT,
  SECOND_PLAYER_SELECT,
  RESET_BOARD,
  FIRST_PLAYER_WINNER,
  SECOND_PLAYER_WINNER,
} from "./types";

const initialState = {
  isFirstPlayer: true,
  firstPlayerSelect: [],
  secondPlayerSelect: [],
  ocupiedCells: [],
  firstPlayerWinner: false,
  secondPlayerWinner: false,
  winnerCombo: [],
  resetClicked: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PLAYER:
      return {
        ...state,
        isFirstPlayer: !state.isFirstPlayer,
      };
    case FIRST_PLAYER_SELECT:
      return {
        ...state,
        firstPlayerSelect: [...state.firstPlayerSelect, action.payload].sort(),
        ocupiedCells: [
          ...state.firstPlayerSelect,
          ...state.secondPlayerSelect,
          action.payload,
        ].sort(),
        resetClicked: false,
      };
    case SECOND_PLAYER_SELECT:
      return {
        ...state,
        secondPlayerSelect: [
          ...state.secondPlayerSelect,
          action.payload,
        ].sort(),
      };
    case FIRST_PLAYER_WINNER:
      return {
        ...state,
        firstPlayerWinner: true,
        winnerCombo: action.payload,
      };
    case SECOND_PLAYER_WINNER:
      return {
        ...state,
        secondPlayerWinner: true,
        winnerCombo: action.payload,
      };
    case RESET_BOARD:
      return {
        isFirstPlayer: true,
        firstPlayerSelect: [],
        secondPlayerSelect: [],
        ocupiedCells: [],
        firstPlayerWinner: false,
        secondPlayerWinner: false,
        winnerCombo: [],
        resetClicked: true,
      };
    default:
      return state;
  }
};

export default reducer;
