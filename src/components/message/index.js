import React from 'react';
import './styles.scss';

const Message = ({ author, msg }) => (
  <div className="chat_message">
    <span className="chat_message-author">{author}:</span>
    <span className="chat_message-msg">{msg}</span>
  </div>
)

export default Message;