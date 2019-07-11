import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  fetchMessages,
  sendWSMessage,
  loginUser,
  connectToWS,
} from '../../store/actions/chat';
import Input from '../../components/input';
import Message from '../../components/message';

import {
  CenterBlock,
  ScreenCenterBlock,
  ChatWrap,
  Chat
} from './styles';

// import './styles.scss';

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
    <ScreenCenterBlock>
      {
        !isLoggined && (
          <form onSubmit={handleLoginSendSubmit}>
            <CenterBlock>
              <Input placeholder="Enter your name..." onChange={e => setUserName(e.target.value)} value={userName} />
            </CenterBlock>
          </form>
        )
      }
      {
        isLoggined && (
          <>
            <ChatWrap>
              <Chat>
                {
                  messages.map(({ _id, author, msg }) => (
                    <Message key={_id} author={author} msg={msg} />
                  ))
                }

              </Chat>
            </ChatWrap>
            <form onSubmit={handleMessageSendSubmit}>
              <CenterBlock>
                <Input placeholder="Say something..." onChange={e => setMessage(e.target.value)} value={message} />
              </CenterBlock>
            </form>
          </>
        )
      }
    </ScreenCenterBlock>
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