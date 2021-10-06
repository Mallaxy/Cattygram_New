import React, { ReactNode } from 'react';

import Header from '@app/domain/Header/Header';
import Sidebar from '@app/domain/Sidebar/Sidebar';
import Footer from '@app/domain/Footer/Footer';

import { Container, Layout, Main, Wrapper } from './MainLayout.style';

type Props = {
  children: ReactNode;
  title?: string;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Layout>
          <Sidebar />
          <Main>{children}</Main>
        </Layout>
      </Container>
      <Footer />
    </Wrapper>
  );
};
