import * as types from './types';
import {get} from '../../../utils/Networking';

export const fetchDetailCards = cardId => {
  //debugger;
  return dispatch => {
    const url = '/cards/' + cardId;
    
    return get(url)
      .then(({data, status}) => {
        if (status !== 200) {
          throw data;
        }

        dispatch({
          type: types.FETCH_DETAIL_CARD_SUCCESS,
          payload: data,
        });
      })
      .catch(error => {
        dispatch({
          type: types.FETCH_DETAIL_CARD_FAILURE,
          payload: error,
        });
      });
  };
};
