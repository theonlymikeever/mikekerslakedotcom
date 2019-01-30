import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import Head from 'components/head';
// import Modal from 'containers/modal';
import { graphql } from 'gatsby';

const Photography = ({ data }) => (
  <Layout>
    <Head pageTitle={data.photographyJson.title} />
    <Box>
      <Title as="h2">
        {data.photographyJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
      {/* <Modal /> */}
      <Gallery items={data.photographyJson.gallery} />
    </Box>
  </Layout>
);

Photography.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Photography;

export const query = graphql`
  query PhotographyQuery {
    photographyJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
