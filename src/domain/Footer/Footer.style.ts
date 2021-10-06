import styled from 'styled-components';

export const FooterBlock = styled.footer`
  height: 50px;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.darker} 20%,
    ${({ theme }) => theme.lighter} 100%
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

export const MadeBy = styled.div`
  display: flex;
  gap: 0.5rem;
`;
