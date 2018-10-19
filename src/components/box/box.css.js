import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  padding: 2rem 4rem;
  max-width: 800px;
  margin: 0 auto;
  /* box-shadow: 0 1px 3px rgba(0,0,0,0.09), 0 1px 2px rgba(0,0,0,0.15); */

  ${MEDIA.PHONE`
    margin: 0.75rem;
    padding: 0;
  `};
`;
