import * as types from './types';

export const CardSearchScreenReducer = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_SEARCH_CARD_SUCCESS:
      return {...state, searchCards: action.payload};
    case types.FETCH_SEARCH_CARD_FAILURE:
      return {...state, searchCardsError: action.payload};
    default:
      return state;
  }
};
