import styled from 'styled-components';

export const StyledHeader = styled.header`
  height: 80px;
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
  box-shadow: 0 1px 15px #ccc;

  & > div:first-child {
    margin-left: 65%;
  }
`;
