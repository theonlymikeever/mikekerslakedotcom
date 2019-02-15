import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import Title from 'components/title';
import BooksContainer from 'containers/books/booksContainer';

/* eslint-disable no-console */
const CurrentReads = ({ books }) => (
  <ul>
    {books.map(book => (
      <li key={book}>{book}</li>
    ))}
  </ul>
)

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
        <CurrentReads books={data.readingJson.currentBooks} />
        <BooksContainer books={data.readingJson.books} />
      </Box>
    </Layout>
  );
};

CurrentReads.propTypes = {
  books: PropTypes.array,
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
      currentBooks
    }
  }
`;

export default Reading;
