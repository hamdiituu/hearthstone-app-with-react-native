import { combineReducers } from 'redux';
import {MainScreenReducer} from '../../screens/Main/redux/reducer';
import {CardSearchScreenReducer} from '../../screens/CardSearch/redux/reducer'
import {CardDetailScreenReducer} from '../../screens/CardDetail/redux/reducer';
export default combineReducers({
    MainScreenReducer,
    CardSearchScreenReducer,
    CardDetailScreenReducer,
  });