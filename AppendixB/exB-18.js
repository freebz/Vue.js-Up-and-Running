// State Management

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  users: undefined
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return Object.assign({}, state, {
	users: action.payload
      });

    default: return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk))
