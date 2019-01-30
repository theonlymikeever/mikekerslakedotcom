import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-columns: repeat(auto-fill, 100px); */
  grid-gap: 2rem;
  padding: 0 4rem;
  margin: 2rem auto;
  max-width: 800px;

  ${MEDIA.TABLET`
    grid-template-columns: repeat(1,1fr);
  `};
`;

export const ImageWrapper = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;
