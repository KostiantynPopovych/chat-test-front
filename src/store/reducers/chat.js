import {
  CHAT_WEBSOCKET_BROKEN,
  CHAT_WEBSOCKET_CLOSED,
  CHAT_WEBSOCKET_CONNECT,
  CHAT_WEBSOCKET_MESSAGE,
  CHAT_WEBSOCKET_OPEN,
  CHAT_WEBSOCKET_SEND,
  FETCH_CHAT_MESSAGES_SUCCESS,
} from '../actionTypes/chat';

const initialState = {
  connected: false,
  messages: [],
  url: null,
}

export default (state = initialState, { type, payload, meta }) => {
  switch (type) {
    case FETCH_CHAT_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: payload,
      }
    case 'INTERNAL::CLEAR_MESSAGE_LOG':
      return {
        ...state,
        messages: [],
      };

    case CHAT_WEBSOCKET_CONNECT:
      return {
        ...state,
        url: payload.url,
      };

    case CHAT_WEBSOCKET_OPEN:
      return {
        ...state,
        connected: true,
      };

    case CHAT_WEBSOCKET_BROKEN:
    case CHAT_WEBSOCKET_CLOSED:
      return {
        ...state,
        connected: false,
      };

    case CHAT_WEBSOCKET_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            ...JSON.parse(payload.message),
            // data: ,
            // origin: payload.origin,
            // timestamp: meta.timestamp,
            // type: 'INCOMING',
          },
        ],
      };

    case CHAT_WEBSOCKET_SEND:
      return {
        ...state,
        messages: [
          ...state.messages,
          // {
          // data: payload,
          // origin: window.location.origin,
          // timestamp: new Date(),
          // type: 'OUTGOING',
          // ...payload
          // },
        ],
      };

    default:
      return state;
  }
};
