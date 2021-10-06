import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  height: 100%;
  background: ${({ theme }) => theme.light};
`;

export const Container = styled.div`
  width: 992px;
  margin: 0 auto;
  transition: all 0.2s ease-out;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 769px;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    transition: none;
    width: 100%;
  }
`;

export const Layout = styled.div`
  display: grid;
  grid-template: 'sidebar page' minmax(calc(100vh - 100px), 1fr) / 1fr 5fr;
`;

export const Main = styled.main`
  grid-area: page;
  padding: 20px;
`;
