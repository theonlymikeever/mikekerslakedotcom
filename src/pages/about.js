import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import PortraitContainer from 'components/portrait-container';

const About = ({ data }) => (
  <Layout>
    <Head pageTitle={data.aboutJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.aboutJson.content.childMarkdownRemark.html,
        }}
      />
      <PortraitContainer image={data.aboutJson.image} />
    </Box>
  </Layout>
);

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default About;

// const duoToneBlue = 'highlight: "#0ec4f1", shadow: "#192550"';
// const duoToneRed = 'highlight: "#f00e2e", shadow: "#192550", opacity: 90';

export const query = graphql`
  query AboutQuery {
    aboutJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
      image {
        childImageSharp {
          fluid(
            maxHeight: 500
            quality: 90
            duotone: { highlight: "#0ec4f1", shadow: "#192550" }
          ) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      skills {
        proficient
        knowledgeable
        some_experience
      }
    }
  }
`;
