import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import PortraitContainer from 'components/portrait-container';

const About = ({ data }) => (
  <Layout>
    <Head
      pageTitle={data.aboutJson.title}
      siteDescription={data.aboutJson.meta}
    />
    <Box>
      <PortraitContainer {...data.aboutJson} />
      <Link to="/" style={{ display: 'block' }}>
        &lt; Back
      </Link>
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
      meta
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
