import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import dataReducer from './covid-19/covidUpdate';
import historyReducer from './covid-19/covidHistory';

const reducer = combineReducers({
  covid: dataReducer,
  history: historyReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
