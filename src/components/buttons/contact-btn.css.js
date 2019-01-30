import styled from 'styled-components';
import { primary, light, white, shadowHover } from 'constants/theme';
// import MEDIA from 'helpers/mediaTemplates';

export const ButtonContainer = styled.div`
  max-width: 200px;
  margin: auto auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`;

export const Button = styled.a`
  grid-column-start: 1;
  grid-row-start: 1;
  background: linear-gradient(to right, ${light}, ${primary});
  border-radius: 0.25rem;
  padding: 1rem;
  text-align: center;
  color: ${white};
  text-decoration: none;
  transition-duration: 0.3s;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: ${shadowHover};
  }
`;
