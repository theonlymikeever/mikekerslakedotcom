import styled from 'styled-components';
import { primary, accent, pink } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';


export const Container = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-template-areas: 'title nav';
  max-width: 800px;
  margin: 0 auto 1rem auto;
  padding: 4rem 0 0 0;

  nav {
    justify-self: end;
  }

  > a {
    /* this is the h1 */
    justify-self: start;
    color: ${accent};
    span {
      font-weight: bold;
      color: ${primary};
    }
  }

  ${MEDIA.PHONE`
    padding: 2rem;
    /* justify-content: center; */
  `};

  h1 {
    margin-bottom: 0;
    color: ${accent};
    span {
      font-weight: bold;
      color: ${primary};
    }
  }

  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;
    /* padding: 0 8px; */

    &:hover {
      color: ${pink};
      font-weight: bold;
    }
  }
`;
