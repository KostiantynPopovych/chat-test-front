import styled from 'styled-components'
import backgroundImg from '../../assets/img/background.jpg';

export const CenterBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ScreenCenterBlock = styled(CenterBlock)`
  background-image: url(${backgroundImg});
  min-height: 100vh;
`;

export const ChatWrap = styled.div`
  border: 5px dotted rgba(57, 63, 84, 0.8);
  width: 80vw;
  height: 500px;
  overflow: hidden;
  padding: 2rem;
  margin-bottom: 2rem;
`;

export const Chat = styled.div`
  height: 100%;
  overflow-y: auto;
  padding-right: 10px;
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent; 
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(57, 63, 84, 0.8);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #7881A1; 
  } 
`;