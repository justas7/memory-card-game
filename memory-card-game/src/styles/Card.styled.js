import styled from 'styled-components';

export const Container = styled.div`
  height: 180px;
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const NameContainer = styled.div`
  display: flex;
  justify-content: center;
`;
