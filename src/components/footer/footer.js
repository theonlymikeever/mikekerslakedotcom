import React from 'react';
import { FooterContainer } from './footer.css';
import { InstagramIcon, LinkedInIcon, TwitterIcon } from '../social-icons';

const CopyRightFooter = () => (
  <div className="copyright">
    <span className="bold">© {new Date().getFullYear()} Mike Kerslake.</span>
    Site built w/ React & too much coffee (probably).
  </div>
);

function Footer() {
  return (
    <FooterContainer>
      <CopyRightFooter />
      <div className="social-icons">
        <a href="https://instagram.com/theonlymikeever">
          <InstagramIcon width={25} height={25} />
        </a>
        <a href="https://www.linkedin.com/in/michael-kerslake">
          <LinkedInIcon width={25} height={25} />
        </a>
        <a href="https://twitter.com/mikekerslake">
          <TwitterIcon width={25} height={25} />
        </a>
      </div>
    </FooterContainer>
  );
}

export default Footer;
