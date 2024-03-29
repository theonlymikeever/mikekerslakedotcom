import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import posed from 'react-pose';
import { Container } from './header.css';
import Title from 'components/title';
import Nav from 'components/header/nav';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = () => (
  <AnimatedContainer>
    <Container>
      <Link to="/" className="title">
        <Title as="h1">
          <span>Mike</span> Kerslake
        </Title>
      </Link>
      <Nav />
    </Container>
  </AnimatedContainer>
);

// Header.propTypes = {
//   title: PropTypes.string.isRequired,
// };

export default Header;
