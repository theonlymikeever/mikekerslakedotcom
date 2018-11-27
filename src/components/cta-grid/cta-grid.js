import React from 'react';
import { Container, ImgBox } from './cta-grid.css';
import { Link } from 'gatsby';

function CtaGrid() {
  return (
    <Container>
      <ImgBox color="#0078de80">
        <img src="https://source.unsplash.com/random/400x700" alt="something" />
        <div className="overlay">
          <h2>Software</h2>
        </div>
        <Link to="/projects" className="click-overlay">
          <p>View Software</p>
        </Link>
      </ImgBox>
      <ImgBox color="#EFBC6480">
        <img src="https://source.unsplash.com/random/400x700" alt="something" />
        <div className="overlay">
          <h2>Photography</h2>
        </div>
        <a href="photography.mikekerslake.com" className="click-overlay">
          <p>View Photography</p>
        </a>
      </ImgBox>
      <ImgBox color="#0DCFE699">
        <img src="https://source.unsplash.com/random/400x700" alt="something" />
        <div className="overlay">
          <h2>Video</h2>
        </div>
        <Link to="/" className="click-overlay">
          <p>Soon!</p>
        </Link>
      </ImgBox>
    </Container>
  );
}

export default CtaGrid;
