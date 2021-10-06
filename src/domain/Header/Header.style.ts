import styled from 'styled-components';

export const HeaderStyle = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.lighter} 0%,
    ${({ theme }) => theme.darker} 100%
  );
  color: ${({ theme }) => theme.light};
  padding: 0 2em;
  font-size: 2rem;
  font-weight: 600;
`;

export const Logo = styled.div`
  display: grid;
  grid-template: 50px / 50px 1fr;
  align-items: center;
  gap: 0.5em;
  cursor: pointer;
  &:hover h1 {
    color: ${({ theme }) => theme.lighter};
  }
  img {
    height: 100%;
  }
`;

export const LoginBlock = styled.div`
  justify-self: end;
  padding: 0 20px;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.lighter};
  }
`;
