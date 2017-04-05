import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import navigation from './reducers/navigation';

const rootReducer = combineReducers({
  routing,
  navigation
});

export default rootReducer;
