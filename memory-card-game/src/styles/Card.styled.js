import styled from 'styled-components';

export const Container = styled.div`
  height: 180px;
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 8px;
  font-size: 1.2rem;
  background-color: rgb(234, 234, 234, 0.9);
  box-shadow: 1px 1px 15px #ccc;
  border-radius: 40px;

  & > span {
    text-align: center;
  }
`;
