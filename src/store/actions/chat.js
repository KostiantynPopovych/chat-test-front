import axios from 'axios';
import { send, connect } from '@giantmachines/redux-websocket';
import {
  fetchChatMessagesSuccess,
} from '../actionCreators/chat';
import { WEBSOCKET_PREFIX } from '../../constants/config';

const isProd = true;
const REST_URL = isProd ? 'https://chat-test-back.herokuapp.com/chat' : 'http://localhost:5000/chat';
const WS_URL = isProd ? 'wss://chat-test-back.herokuapp.com' : 'ws://localhost:5000';

export const fetchMessages = () => async (dispatch) => {
  const { data } = await axios.get(REST_URL);
  dispatch(fetchChatMessagesSuccess(data));
}

export const sendWSMessage = payload => dispatch => dispatch(send({ type: 'MESSAGE', payload }, WEBSOCKET_PREFIX));
export const loginUser = payload => dispatch => dispatch(send({ type: 'LOGIN', payload }, WEBSOCKET_PREFIX));
export const connectToWS = () => (dispatch) => dispatch(connect(WS_URL, WEBSOCKET_PREFIX));
