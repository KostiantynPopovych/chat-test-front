import styled from 'styled-components'
import backgroundImg from '../../assets/img/background.jpg';

export const FlexBlock = styled.div`
  display: flex;
`;

export const CenterBlock = styled(FlexBlock)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ScreenCenterBlock = styled(CenterBlock)`
  background-image: url(${backgroundImg});
  min-height: 100vh;
`;

export const DottedBlockWrap = styled.div`
  border: 5px dotted rgba(57, 63, 84, 0.8);
  width: 80vw;
  height: 500px;
  overflow: hidden;
  padding: 2rem;
  margin-bottom: 2rem;
`;

export const DottedBlock20VWWrap = styled(DottedBlockWrap)`
  width: 20vw;
  border-right: none;
`;

export const UserName = styled.p`
  color: #BFD2FF;
  font-size: 1.7rem;
  font-weight: 700;
  margin-bottom: 7px;
`;

export const DottedBlock = styled.div`
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