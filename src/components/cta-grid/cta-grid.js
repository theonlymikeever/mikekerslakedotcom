/* eslint-disable */
import React from 'react';
import { Container, ImgBox } from './cta-grid.css';
import { Link } from 'gatsby';
import {
  accentTrans,
  pinkTrans,
  yellowTrans,
  tealTrans,
} from '../../constants/theme';

const colors = [accentTrans, tealTrans, yellowTrans];

function CtaGrid({ ctas }) {
  return (
    <Container>
      {ctas &&
        ctas.map((item, idx) => {
          const { src } = item.image.childImageSharp.fixed || '';
          return (
            <ImgBox color={colors[idx]} key={idx}>
              <img src={src} alt={item.title} />
              <div className="overlay">
                <h2>{item.title}</h2>
              </div>
              {item.link.slice(0, 4) === 'http' ? (
                <a href={item.link} className="click-overlay">
                  <p>{item.button}</p>
                </a>
              ) : (
                <Link to={item.link} className="click-overlay">
                  <p>{item.button}</p>
                </Link>
              )}
            </ImgBox>
          );
        })}
    </Container>
  );
}

export default CtaGrid;
