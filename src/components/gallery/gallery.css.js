import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  padding: 0 4rem;
  margin: 2rem auto;
  max-width: 800px;

  ${MEDIA.TABLET`
    display: block;
  `};
`;
