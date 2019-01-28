import styled from 'styled-components';
// import { primary } from 'constants/theme';
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
  background: linear-gradient(to right, #00d2ff, #3a7bd5);
  border-radius: 0.25rem;
  padding: 1rem;
  text-align: center;
  color: #fff;
  text-decoration: none;
  transition-duration: 0.3s;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.05);
  }
`;
