import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  fetchMessages,
  onMessageSend,
  connectToWS,
} from '../../store/actions/chat';


const ChatPage = ({ messages, fetchMessages, onMessageSend, connectToWS }) => {
  useEffect(
    () => {
      connectToWS();
      fetchMessages();
    },
    [],
  )

  const [message, setMessage] = useState('');

  const handleSendCLick = () => {
    const messageObj = { author: 'me', msg: message };
    onMessageSend(messageObj);
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
      <input type="text" value={message} onChange={e => setMessage(e.target.value)} />
      <button type="button" onClick={handleSendCLick}>Send</button>
    </div>
  )
}

const mapStateToProps = ({ chat: { messages } }) => ({
  messages,
})

const mapDispatchToProps = {
  fetchMessages,
  onMessageSend,
  connectToWS,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);