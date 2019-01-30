import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/gallery/item';
import { Container, ImageWrapper } from './gallery.css';
import Img from 'gatsby-image';
import Modal from 'components/modal';
import { Consumer } from 'store/createContext';

/* eslint-disable no-console */
const Gallery = ({ items }) => (
  <Container>
    <Consumer>
      {({ open, showModal, hideModal, displayItem }) => {
        return (
          <>
            <Modal open={open} hideModal={hideModal}>
              {displayItem ? <Item {...displayItem} /> : null}
            </Modal>
            {items.map((item, i) => (
              <ImageWrapper key={i} onClick={() => showModal(item)}>
                <Img
                  fluid={item.image ? item.image.childImageSharp.fluid : {}}
                  alt={item.image.title}
                />
              </ImageWrapper>
            ))}
          </>
        );
      }}
    </Consumer>
  </Container>
);
// const Gallery = ({ items }) => (
//   <Container>
//     {items.map((item, i) => (
//       <Modal key={i}>
//         <Item {...item} />
//       </Modal>
//     ))}
//   </Container>
// );

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
