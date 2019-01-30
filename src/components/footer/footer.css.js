import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const FooterContainer = styled.div`
  padding: 25px 10px;
  margin: 1rem auto 1rem auto;
  display: grid;
  justify-items: center;
  align-items: center;
  max-width: 300px;
  grid-template-columns: 1fr;
  grid-template-areas:
    'social'
    'copyright';
  grid-gap: 15px;

  ${MEDIA.MIN_DESKTOP`
    max-width: 800px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'copyright social';
    grid-gap: 80px;
  `};

  .social-icons {
    grid-area: social;
    justify-self: center;

    ${MEDIA.MIN_DESKTOP`
      justify-self: end;
    `};

    svg {
      padding: 0 10px;
    }
  }

  .copyright {
    display: grid;
    align-items: center;
    grid-template-rows: auto;
    grid-gap: 5px;
    grid-area: copyright;
    text-align: center;
    font-size: 12px;
    justify-self: center;

    ${MEDIA.MIN_DESKTOP`
      text-align: left;
      font-size: inherit;
      justify-self: start;
    `};

    .bold {
      font-weight: 700;
    }
  }
`;
