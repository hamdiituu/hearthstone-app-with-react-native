import * as types from './types';
import {get} from '../../../utils/Networking';

export const fetchAllCards = () => {
  return dispatch => {
    const url = '/cards';

    return get(url)
      .then(({data, status}) => {
        if (status !== 200) {
          throw data;
        }

        dispatch({
          type: types.FETCH_ALL_CARD_SUCCESS,
          payload: data,
        });
      })
      .catch(error => {
        dispatch({
          type: types.FETCH_ALL_CARD_FAILURE,
          payload: error,
        });
      });
  };
};
