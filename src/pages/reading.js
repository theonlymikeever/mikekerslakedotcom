
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import Title from 'components/title';

/* eslint-disable no-console */

const BooksContainer = ({ children }) => (
  <div>
    <ul>{children}</ul>
  </div>
);

const BookDisplay = ({ title, author, link, rating, topic }) => {
  return (
    <li>
      {title} by {author} - {link} - {rating} - {topic}
    </li>
  );
};

const Reading = ({ data }) => {
  return (
    <Layout>
      <Head
        pageTitle={data.readingJson.title}
        siteDescription={data.readingJson.meta}
      />
      <Box>
        <Title as="h2" size="large">
          {data.readingJson.title}
        </Title>
        <div
          dangerouslySetInnerHTML={{
            __html: data.readingJson.content.childMarkdownRemark.html,
          }}
        />
        <BooksContainer>
          {data.readingJson.books.map(book => (
            <BookDisplay key={book.title} {...book} />
          ))}
        </BooksContainer>
      </Box>
    </Layout>
  );
};

BookDisplay.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  rating: PropTypes.number,
  link: PropTypes.string,
  topic: PropTypes.string,
};

BooksContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

Reading.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query ReadingQuery {
    readingJson {
      title
      meta
      content {
        childMarkdownRemark {
          html
        }
      }
      books {
        title
        link
        author
        rating
        topic
      }
    }
  }
`;

export default Reading;
