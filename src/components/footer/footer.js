import React from 'react';
import { FooterContainer } from './footer.css';
import { InstagramIcon, LinkedInIcon, TwitterIcon } from '../social-icons';

const CopyRightFooter = () => (
  <div className="copyright">
    <span className="bold">© {new Date().getFullYear()} Mike Kerslake.</span>Site built on React & probably too much coffee.
  </div>
);

function Footer() {
  return (
    <FooterContainer>
      <CopyRightFooter />
      <div className="social-icons">
        <a href="/">
          <InstagramIcon width={25} height={25} />
        </a>
        <a href="/">
          <LinkedInIcon width={25} height={25} />
        </a>
        <a href="/">
          <TwitterIcon width={25} height={25} />
        </a>
      </div>
    </FooterContainer>
  );
}

export default Footer;
