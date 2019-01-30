import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import Title from 'components/title';
import { ButtonContainer, Button } from 'components/buttons/contact-btn.css';

const emailAddress = 'mailto:hello@mikekerslake.com';

const EmailBtn = () => (
  <ButtonContainer>
    <Button
      id="email"
      onClick={() => (document.getElementById('email').href = emailAddress)}
      onMouseEnter={() =>
        (document.getElementById('email').href = emailAddress)
      }
      onMouseLeave={() =>
        (document.getElementById('email').href = 'noSpamForYOU')
      }
      href=""
    >
      Email Me
    </Button>
  </ButtonContainer>
);

const Contact = ({ data }) => (
  <Layout>
    <Head pageTitle={data.contactJson.title} />
    <Box>
      <Title as="h2" size="large">
        {data.contactJson.title}
      </Title>
      <div
        dangerouslySetInnerHTML={{
          __html: data.contactJson.content.childMarkdownRemark.html,
        }}
      />
      <EmailBtn />
    </Box>
  </Layout>
);

Contact.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Contact;

export const query = graphql`
  query ContactQuery {
    contactJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
      socialLinks {
        type
        link
      }
    }
  }
`;
