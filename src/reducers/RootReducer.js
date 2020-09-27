import { combineReducers } from 'redux';
import linksReducer from './LinksReducer';
import infoReducer from './InfoReducer';
import projectReducer from './ProjectsReducer';

const rootReducer = combineReducers({
  links: linksReducer,
  info: infoReducer,
  projects: projectReducer,
});

export default rootReducer;