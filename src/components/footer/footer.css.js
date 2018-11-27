import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  padding: 25px 10px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;

  div {
    /* background: green; */
  }
  .social-icons {
    justify-self: end;
  }
  .copyright {
    justify-self: start;
  }
`;
