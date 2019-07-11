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

export const onMessageSend = message => dispatch => dispatch(send(message, WEBSOCKET_PREFIX));
const isProd = true;
const URL = isProd ? 'wss://chat-test-back.herokuapp.com' : 'ws://localhost:5000';
export const connectToWS = () => (dispatch) => dispatch(connect(URL, WEBSOCKET_PREFIX));
