import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const FooterContainer = styled.div`
  width: 100%;
  padding: 25px 10px;
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  grid-template-areas: 'copyright social';

  ${MEDIA.PHONE`
    max-width: 300px;
    grid-template-columns: 1fr;
    grid-template-areas: 
      'social'
      'copyright';
    grid-gap: 15px;
  `};

  .social-icons {
    justify-self: end;

    ${MEDIA.PHONE`
      grid-area: social;
      justify-self: center;
    `};

    svg {
      padding: 0 10px;
    }
  }

  .copyright {
    display: grid;
    align-items: center;
    justify-self: start;
    grid-template-rows: auto;
    grid-gap: 5px;

    ${MEDIA.PHONE`
      grid-area: copyright;
      text-align: center;
      font-size: 12px;
      justify-self: center;
    `};

    .bold {
      font-weight: 700;
    }
  }
`;
