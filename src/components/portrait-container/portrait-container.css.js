import styled from 'styled-components';
// import { primary } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  max-width: 98%;
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  display: inline-block;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    ${MEDIA.PHONE`
      color: #000000;
    `};
  }

  div:last-child {
    z-index: 300;
    position: absolute;
    top: 0;
    padding: 1rem;
    width: 70%;
    color: #fff;
    ${MEDIA.PHONE`
      position: relative;
      color: #757575;
      width: 100%;
      padding: inherit;
      margin-top: 1rem;
    `};
  }

  picture {
    display: block;
  }
`;
