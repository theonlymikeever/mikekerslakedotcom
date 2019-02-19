import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import Title from 'components/title';
import BooksContainer from 'containers/books/booksContainer';
import styled from 'styled-components';

const BookList = styled.ul`
  text-align: center;
`;

const Heading = styled.h2`
  margin-top: 20px;
  text-align: center;
`;

const HorizontalRule = styled.hr`
  border: 0;
  width: 30%;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

const CurrentReads = ({ books }) => (
  <>
    <Heading>In Progression</Heading>
    <HorizontalRule />
    <BookList>
      {books.map(book => (
        <li key={book}>{book}</li>
      ))}
    </BookList>
  </>
);

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
        <BooksContainer books={data.readingJson.books} />
        <CurrentReads books={data.readingJson.currentBooks} />
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
