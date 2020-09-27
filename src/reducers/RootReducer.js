import { combineReducers } from 'redux';
import linksReducer from './LinksReducer';
import infoReducer from './InfoReducer';

const rootReducer = combineReducers({
  links: linksReducer,
  info: infoReducer,
});

export default rootReducer;