import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../../client/source/reducers';

export const configureStore = (initialState) => {
  const middleware = [thunk];
  const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)));
  return store;
};