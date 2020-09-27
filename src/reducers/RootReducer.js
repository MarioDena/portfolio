import { combineReducers } from 'redux';
import linksReducer from './LinksReducer';

const rootReducer = combineReducers({
  links: linksReducer,
});

export default rootReducer;