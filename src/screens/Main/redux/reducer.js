import * as types from './types';

export const MainScreenReducer = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_ALL_CARD_SUCCESS:
      return {...state, allCards: action.payload};
    case types.FETCH_ALL_CARD_FAILURE:
      return {...state, allCardsError: action.payload};
    default:
      return state;
  }
};
