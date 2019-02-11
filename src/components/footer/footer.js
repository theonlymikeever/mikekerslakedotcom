import React from 'react';
import { FooterContainer } from './footer.css';
import { InstagramIcon, LinkedInIcon, TwitterIcon } from '../social-icons';
import { version } from '../../../package.json';

const year = new Date().getFullYear();

// const VersionDisplay = () => (
//   <a
//     href="https://github.com/theonlymikeever/mikekerslakedotcom/releases"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     v{version}
//   </a>
// );

const CopyRightFooter = () => (
  <div className="copyright">
    <span className="bold">© {year} Mike Kerslake.</span>
    <p>
      {version ? `v${version}` : null} Site built w/ React & too much
      coffee (probably).
    </p>
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
