import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './portrait-container.css';
import Img from 'gatsby-image';

const PortraitContainer = ({ image }) => (
  <Container>
    <Img fluid={image ? image.childImageSharp.fluid : {}} />
  </Container>
);

PortraitContainer.propTypes = {
  image: PropTypes.object,
};

export default PortraitContainer;
