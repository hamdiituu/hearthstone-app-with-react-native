import * as types from './types';
import {get} from '../../../utils/Networking';

export const fetchSearchCards = name => {
  //debugger;
  return dispatch => {
    const url = '/cards/' + name;
    
    return get(url)
      .then(({data, status}) => {
        if (status !== 200) {
          throw data;
        }

        dispatch({
          type: types.FETCH_SEARCH_CARD_SUCCESS,
          payload: data,
        });
      })
      .catch(error => {
        dispatch({
          type: types.FETCH_SEARCH_CARD_FAILURE,
          payload: error,
        });
      });
  };
};
