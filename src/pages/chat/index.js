import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  fetchMessages,
  sendWSMessage,
  loginUser,
  connectToWS,
} from '../../store/actions/chat';


const ChatPage = ({ messages, fetchMessages, sendWSMessage, connectToWS, loginUser }) => {
  useEffect(
    () => {
      connectToWS();
      fetchMessages();
    },
    [],
  )

  const [isLoggined, setIsLoggined] = useState(false);
  const [message, setMessage] = useState('');
  const [userName, setUserName] = useState('');

  const handleLoginSendSubmit = (e) => {
    e.preventDefault();
    loginUser(userName);
    setUserName('');
    setIsLoggined(true);
  }

  const handleMessageSendSubmit = (e) => {
    e.preventDefault();
    const messageObj = { msg: message };
    sendWSMessage(messageObj);
    setMessage('');
  }

  return (
    <div>
      <ul>
        {
          messages && messages.map(({ _id, author, msg }) => (
            <li key={_id}>{author}: {msg}</li>
          ))
        }
      </ul>
      {
        !isLoggined && (
          <form onSubmit={handleLoginSendSubmit}>
            <input type="text" value={userName} onChange={e => setUserName(e.target.value)} />
            <button type="submit">Login</button>
          </form>
        )
      }
      {
        isLoggined && (
          <form onSubmit={handleMessageSendSubmit}>
            <input type="text" value={message} onChange={e => setMessage(e.target.value)} />
            <button type="submit">Send</button>
          </form>
        )
      }
    </div>
  )
}

const mapStateToProps = ({ chat: { messages } }) => ({
  messages,
})

const mapDispatchToProps = {
  fetchMessages,
  sendWSMessage,
  loginUser,
  connectToWS,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);