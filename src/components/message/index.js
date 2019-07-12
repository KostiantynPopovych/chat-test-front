import React from 'react';
import './styles.scss';

const Message = ({ author, msg, date }) => (
  <div className="chat_message">
    <div className="chat_message-header">
      <span className="chat_message-header-title">{author}:</span>
      <span className="chat_message-header-title">{date}</span>
    </div>
    <span className="chat_message-msg">{msg}</span>
  </div>
)

export default Message;