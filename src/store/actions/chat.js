import { send, connect } from '@giantmachines/redux-websocket';
import {
  FETCH_CHAT_MESSAGES_SUCCESS,
} from '../actionTypes/chat';
import { WEBSOCKET_PREFIX } from '../../constants/config';

const isProd = true;
const WS_URL = isProd ? 'wss://chat-test-back.herokuapp.com' : 'ws://localhost:5000';

export const fetchChatMessagesSuccess = (messages) => ({
  type: FETCH_CHAT_MESSAGES_SUCCESS,
  payload: messages,
})

export const fetchMessages = () => async (dispatch, _, api) => {
  const { data } = await api.get('/chat');
  dispatch(fetchChatMessagesSuccess(data));
}

export const sendWSMessage = payload => dispatch => dispatch(send({ type: 'MESSAGE', payload }, WEBSOCKET_PREFIX));
export const loginUser = payload => dispatch => dispatch(send({ type: 'LOGIN', payload }, WEBSOCKET_PREFIX));
export const connectToWS = () => (dispatch) => dispatch(connect(WS_URL, WEBSOCKET_PREFIX));
