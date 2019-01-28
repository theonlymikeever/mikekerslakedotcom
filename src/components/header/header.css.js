import styled from 'styled-components';
import { primary, accent, pink, grey } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.header`
  display: grid;
  align-items: center;
  max-width: 800px;
  margin: 0 auto 1rem auto;

  padding: 2rem;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  grid-template-areas: 
    'title'
    'nav';

  .title {
    margin-bottom: 0;
    color: ${accent};
    color: ${accent};
    justify-self: center;
    span {
      font-weight: bold;
      color: ${primary};
    }
    ${MEDIA.MIN_DESKTOP`
      justify-self: start;
    `};
  }

  nav {
    justify-self: center;
    a {
      color: ${grey};
      transition: color 0.2s ease;
      text-decoration: none;
      &:hover {
        color: ${pink};
        font-weight: bold;
      }
    }
    ${MEDIA.MIN_DESKTOP`
      justify-self: end;
      grid-area: nav;
    `};
  }

  ${MEDIA.MIN_DESKTOP`
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'title nav';
    padding: 4rem 0 0 0;
    grid-gap: 0;
  `};
`;
