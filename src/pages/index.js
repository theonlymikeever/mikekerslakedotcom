import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
// import Gallery from 'components/gallery';
import CtaGrid from 'components/cta-grid';
import Head from 'components/head';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Head pageTitle={data.homeJson.title} />
    <Box>
      <Title as="h2">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
      <CtaGrid ctas={data.homeJson.ctas} />
    </Box>
  </Layout>
);

// const Index = ({ data }) => (
//   <Layout>
//     <Box>
//       <Title as="h2">
//         {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
//       </Title>
//       <CtaGrid />
//       <Title as="h3">Writings</Title>
//     </Box>
//     <Gallery items={data.homeJson.gallery} />
//   </Layout>
// );

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
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
      ctas {
        title
        link
        button
        image {
          childImageSharp {
            fixed(height: 400) {
              src
            }
          }
        }
      }
    }
  }
`;
