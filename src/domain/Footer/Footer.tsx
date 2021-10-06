import React from 'react';
import { FooterBlock, MadeBy } from './Footer.style';

const Footer = () => {
  return (
    <FooterBlock>
      <MadeBy>
        <div>Made by</div>
        <address>Artem Dovhyi</address>
      </MadeBy>
      <div>
        Helped by{' '}
        <a href='https://www.youtube.com/channel/UCTW0FUhT0m-Bqg2trTbSs0g'>
          IT-Kamasutra
        </a>
      </div>
    </FooterBlock>
  );
};

export default Footer;
