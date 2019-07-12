import { applyMiddleware, createStore } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import websocket from '@giantmachines/redux-websocket';

import rootReducer from '../store/reducers';
import { WEBSOCKET_PREFIX } from "../constants/config";

const isProd = true;
const baseURL = isProd ? 'https://chat-test-back.herokuapp.com' : 'http://localhost:5000';

const axiosInstance = axios.create({
  baseURL,
})

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
  applyMiddleware(websocketMiddleware, thunk.withExtraArgument(axiosInstance))
);


export default store;