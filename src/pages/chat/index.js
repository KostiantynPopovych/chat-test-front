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
  formatToMessageDate,
} from '../../utils/formatDate';

import {
  CenterBlock,
  ScreenCenterBlock,
  DottedBlockWrap,
  DottedBlock,
  FlexBlock,
  DottedBlock20VWWrap,
  UserName
} from './styles';

const ChatPage = ({ messages, fetchMessages, sendWSMessage, connectToWS, loginUser, logginedUsers }) => {
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
    const messageObj = { msg: message, date: new Date().getTime() };
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
            <FlexBlock>
              <DottedBlock20VWWrap>
                <DottedBlock>
                  {
                    logginedUsers.map((name, idx) => (
                      <UserName key={idx}>{name}</UserName>
                    ))
                  }
                </DottedBlock>
              </DottedBlock20VWWrap>
              <DottedBlockWrap>
                <DottedBlock>
                  {
                    messages.map(({ _id, author, msg, date }) => (
                      <Message key={_id} author={author} msg={msg} date={formatToMessageDate(date)} />
                    ))
                  }

                </DottedBlock>
              </DottedBlockWrap>

            </FlexBlock>
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

const mapStateToProps = ({ chat: { messages, logginedUsers } }) => ({
  messages,
  logginedUsers,
})

const mapDispatchToProps = {
  fetchMessages,
  sendWSMessage,
  loginUser,
  connectToWS,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);