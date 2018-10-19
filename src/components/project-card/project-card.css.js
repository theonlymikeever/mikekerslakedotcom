import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 15px;

  li {
    margin: 0.24em;
  }

  li:before {
    content: '';
    background: #9b0e2b;
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
  padding-bottom: 10px;
`;

export const Image = styled.img`
  width: 100%;
  min-width: 300px;
`;

export const InfoBox = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;

  ${MEDIA.DESKTOP`
    padding-left: 15px;
  `};
`;

export const Heading = styled.h2`
  font-weight: bold;
  font-size: 1.5em;
  padding-bottom: 0.35em;
`;

export const SubHeading = styled.h3`
  color: #9b0e2b;
  padding-bottom: 0.35em;
  span {
    font-weight: bold;
  }
`;

export const LinkBox = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-evenly;
  margin: 0.5em 0;
`;

export const Link = styled.a`
  display: inline-block;
  padding: 0 10px;
  background-color: #9b0e2b;
  border-radius: 5px;
  width: 125px;
  padding: 10px;
  text-align: center;
  color: #fff;
  text-decoration: none;
`;
