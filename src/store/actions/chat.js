import axios from 'axios';
import { send, connect } from '@giantmachines/redux-websocket';
import {
  fetchChatMessagesSuccess,
} from '../actionCreators/chat';
import { WEBSOCKET_PREFIX } from '../../constants/config';

export const fetchMessages = () => async (dispatch) => {
  const { data } = await axios.get('https://chat-test-back.herokuapp.com/chat');
  dispatch(fetchChatMessagesSuccess(data));
}

export const sendWSMessage = payload => dispatch => dispatch(send({ type: 'MESSAGE', payload }, WEBSOCKET_PREFIX));
export const loginUser = payload => dispatch => dispatch(send({ type: 'LOGIN', payload }, WEBSOCKET_PREFIX));
const isProd = false;
const URL = isProd ? 'wss://chat-test-back.herokuapp.com' : 'ws://localhost:5000';
export const connectToWS = () => (dispatch) => dispatch(connect(URL, WEBSOCKET_PREFIX));
