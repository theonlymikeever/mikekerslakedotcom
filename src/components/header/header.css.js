import styled from 'styled-components';
import { primary, accent, pink, grey } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-template-areas: 'title nav';
  max-width: 800px;
  margin: 0 auto 1rem auto;
  padding: 4rem 0 0 0;

  .title {
    margin-bottom: 0;
    color: ${accent};
    justify-self: start;
    color: ${accent};
    span {
      font-weight: bold;
      color: ${primary};
    }
    ${MEDIA.PHONE`
      justify-self: center;
      grid-area: title;
    `};
  }

  nav {
    justify-self: end;
    a {
      color: ${grey};
      transition: color 0.2s ease;
      text-decoration: none;
      &:hover {
        color: ${pink};
        font-weight: bold;
      }
    }
    ${MEDIA.PHONE`
      justify-self: center;
      grid-area: nav;
    `};
  }

  ${MEDIA.PHONE`
    padding: 2rem;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    grid-template-areas: 
      'title'
      'nav';
  `};
`;
