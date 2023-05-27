import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { chatReducer } from './reducers/chatReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  chatReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
