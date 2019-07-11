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

export const connectToWS = () => (dispatch) => dispatch(connect('wss://chat-test-back.herokuapp.com', WEBSOCKET_PREFIX));