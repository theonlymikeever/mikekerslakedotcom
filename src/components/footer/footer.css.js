import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  padding: 25px 10px;
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;

  .social-icons {
    justify-self: end;

    svg {
      padding: 0 10px;
    }
  }

  .copyright {
    display: grid;
    align-items: center;
    justify-items: start;
    grid-template-rows: auto;
    grid-gap: 5px;

    .bold {
      font-weight: 700;
    }
  }
`;
