/* eslint-disable */
import React from 'react';
const Page = ({ pageContext }) => (
  <div dangerouslySetInnerHTML={{__html: pageContext.content }} />
)
  // pageContext ? pageContext.content : 'nothing to see here';

export default Page;
