import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { primary } from 'constants/theme';
import styled from 'styled-components';

const Star = () => (
  <svg height="25" width="23">
    <polygon
      fill={primary}
      points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
    />
  </svg>
);

/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
const columns = [
  {
    Header: 'Title',
    accessor: 'title',
    Cell: props => <a href={props.original.link}>{props.value}</a>,
    minWidth: 140,
  },
  {
    Header: 'Author',
    accessor: 'author',
    minWidth: 140,
  },
  {
    Header: 'Topic',
    accessor: 'topic',
    minWidth: 140,
  },
  {
    Header: 'Rating',
    accessor: 'rating',
    Cell: props => Array.from({ length: props.value }, (_, i) => <Star key={i} />),
    minWidth: 140,
  },
];

const config = {
  resizable: false,
  showPagination: false,
  minRows: 5,
};

/* eslint-enable react/prop-types */

const Heading = styled.h2`
  text-align: center;
`;

const BooksContainer = ({ books }) => {
  return (
    <div>
      <Heading>Current</Heading>
      <ReactTable
        columns={columns}
        data={books}
        style={{ margin: '0 auto' }}
        {...config}
      />
    </div>
  );
};

BooksContainer.propTypes = {
  books: PropTypes.array,
};

export default BooksContainer;
