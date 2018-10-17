import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;
  flex-wrap: wrap;

  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;
    margin-bottom: 2rem;

    &:hover {
      color: inherit;
    }
  }
`;
