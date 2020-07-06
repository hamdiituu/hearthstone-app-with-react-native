import * as types from './types';

export const CardDetailScreenReducer = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_DETAIL_CARD_SUCCESS:
      return {...state, detailCard: action.payload};
    case types.FETCH_DETAIL_CARD_FAILURE:
      return {...state, detailCardError: action.payload};
    default:
      return state;
  }
};
