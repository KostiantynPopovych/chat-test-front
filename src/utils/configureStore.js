import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import websocket from '@giantmachines/redux-websocket';

import rootReducer from '../store/reducers';
import { WEBSOCKET_PREFIX } from "../constants/config";

// Create the middleware instance.
const websocketMiddleware = websocket({
  prefix: WEBSOCKET_PREFIX,
  onOpen: (socket) => {
    window.__socket = socket;
  },
});

// Create the Redux store.
const store = createStore(
  rootReducer,
  applyMiddleware(websocketMiddleware, thunk)
);


export default store;