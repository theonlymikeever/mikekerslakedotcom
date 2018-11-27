import React from 'react';
import { Container, ImgBox } from './cta-grid.css';

function CtaGrid() {
  return (
    <Container>
      <ImgBox>
        <img src="https://source.unsplash.com/random/400x700" alt="something" />
        <div className="overlay">
          <h2>Software Projects</h2>
        </div>
        <a href="/projects" className="click-overlay">
          <p>View Software</p>
        </a>
      </ImgBox>
      <ImgBox>
        <img src="https://source.unsplash.com/random/400x700" alt="something" />
        <div className="overlay">
          <h2>Photography</h2>
        </div>
        <a href="photography.mikekerslake.com" className="click-overlay">
          <p>View Software</p>
        </a>
      </ImgBox>
      <ImgBox>
        <img src="https://source.unsplash.com/random/400x700" alt="something" />
        <div className="overlay">
          <h2>Video</h2>
        </div>
        <a href="/" className="click-overlay">
          <p>Soon!</p>
        </a>
      </ImgBox>
    </Container>
  );
}

export default CtaGrid;
