import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './portrait-container.css';
import Img from 'gatsby-image';

const PortraitContainer = ({ image, content }) => (
  <Container>
    <Img fluid={image ? image.childImageSharp.fluid : {}} />
    <div
      dangerouslySetInnerHTML={{
        __html: content.childMarkdownRemark.html,
      }}
    />
  </Container>
);

PortraitContainer.propTypes = {
  image: PropTypes.object,
  content: PropTypes.object,
};

export default PortraitContainer;
