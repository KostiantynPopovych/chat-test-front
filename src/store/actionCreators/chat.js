import {
  FETCH_CHAT_MESSAGES_SUCCESS,
} from '../actionTypes/chat';

export const fetchChatMessagesSuccess = (messages) => ({
  type: FETCH_CHAT_MESSAGES_SUCCESS,
  payload: messages,
})