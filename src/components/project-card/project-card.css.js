import styled from 'styled-components';
import { accent, pink, shadowLight } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1rem;
  padding: 0.5rem;

  li {
    margin: 0.5em;
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
  max-width: 300px;
`;

export const Image = styled.img`
  width: 100%;
  min-width: 300px;
  border-radius: 0.25rem;
  box-shadow: ${shadowLight};
`;

export const InfoBox = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 0 0.75rem;
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 1.5em;
  margin-bottom: 0.35rem;
  grid-column: span 2;
`;

export const SubTitle = styled.h3`
  color: ${pink};
  padding-bottom: 0.35rem;
  display: block;
  font-weight: ${props => (props.bold ? 'bold' : 'inherit')};
  grid-column: span 2;
  ${MEDIA.PHONE`
    justify-self: start;
  `};
`;

export const HeadingBox = styled.div`
  border-bottom: 1px #e0e0e0 solid;
  margin-bottom: 0.75rem;
  display: grid;
  grid-template-columns: [l1] 1fr [l2] 1fr;

  ${MEDIA.MIN_DESKTOP`
    h3 {
      grid-column: span 1;
    }
    h3:last-child {
      justify-self: end;
    }
  `};
`;

export const LinkBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
  grid-gap: 10px;
  margin-top: 5px;
  margin-bottom: 10px;
  align-content: center;
`;

export const Link = styled.a`
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
