import styled from 'styled-components';
import { accent, pink } from 'constants/theme';
// import MEDIA from 'helpers/mediaTemplates';

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1rem;
  padding: 0.5rem;
  /* background: linear-gradient(to right, #be93c5, #7bc6cc); */
  /* box-shadow: 0 1px 3px rgba(0,0,0,0.09), 0 1px 2px rgba(0,0,0,0.15); */

  li {
    margin: 0.24em;
  }

  li:before {
    content: '';
    background: ${accent};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    display: inline-block;
    margin-right: 0.5rem;
  }
`;

export const ImageBox = styled.div`
  flex: 1;
  width: 100%;
  max-width: 300px;
`;

export const Image = styled.img`
  width: 100%;
  min-width: 300px;
  border-radius: 0.25rem;
`;

export const InfoBox = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;

export const Heading = styled.h2`
  font-weight: bold;
  font-size: 1.5em;
  padding-bottom: 0.35rem;
`;

export const SubHeading = styled.h3`
  color: ${pink};
  padding-bottom: 0.35rem;
  span {
    font-weight: bold;
  }
`;

export const LinkBox = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin: 0.5em 0;
`;

export const Link = styled.a`
  display: inline-block;
  background: linear-gradient(to right, #00d2ff, #3a7bd5);
  border-radius: 0.25rem;
  width: 125px;
  padding: 1rem;
  text-align: center;
  color: #fff;
  text-decoration: none;
  transition-duration: 0.3s;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.1);
  }
`;
