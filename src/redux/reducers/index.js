import { combineReducers } from 'redux';
import {MainScreenReducer} from '../../screens/Main/redux/reducer';
import {CardSearchScreenReducer} from '../../screens/CardSearch/redux/reducer'
export default combineReducers({
    MainScreenReducer,
    CardSearchScreenReducer
  });