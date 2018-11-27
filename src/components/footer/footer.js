import React from 'react';
import { FooterContainer } from './footer.css';

const CopyRightFooter = () => (
  <div className="copyright">
    © Mike Kerslake. Site built on too much coffee.
  </div>
);

function Footer() {
  return (
    <FooterContainer>
      <CopyRightFooter />
      <div className="social-icons">2</div>
    </FooterContainer>
  );
}

export default Footer;
