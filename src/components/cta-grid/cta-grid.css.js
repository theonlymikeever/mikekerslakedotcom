import styled from 'styled-components';
// import { primary } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;

  ${MEDIA.PHONE`
    max-width: 300px;
    grid-template-columns: 1fr;
  `};
`;

export const ImgBox = styled.div`
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  .overlay {
    background: #0078de80;
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    position: relative;
    display: grid;
    justify-items: center;
    align-items: center;
    transition: 0.2s;
  }

  &:hover .overlay {
    transform: translateY(-100%);
  }

  .click-overlay {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    position: relative;
    display: grid;
    justify-items: center;
    align-items: center;
    transition: 0.2s;
    transform: translateY(100%);
  }

  &:hover .click-overlay {
    transform: translateY(0);
  }

  img {
    max-width: 100%;
    grid-column: 1 / -1;
    grid-row: 1 / -1;
  }

  p {
    background: none;
    border: 2px solid white;
    color: white;
    text-transform: uppercase;
    background: rgba(0, 0, 0, 0.7);
    padding: 15px;
  }

  h2 {
    color: white;
    text-align: center;
    font-size: 32px;
  }
`;
