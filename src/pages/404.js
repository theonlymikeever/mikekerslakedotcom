import React from 'react';
import Box from 'components/box';
import Layout from 'components/layout';
import Head from 'components/head';
import Title from 'components/title';

const NotFound = () => (
  <Layout>
    <Head
      pageTitle="Whoops! Where am I?!"
      siteDescription="This page could not be found. Thus, you are seeing a 404."
    />
    <Box>
      <Title as="h2" size="large">
        {"Whoops. Is this a 4 oh whatever it's called?"}
      </Title>
      <span role="img" aria-label="crying">
        😢
      </span>{' '}
      {
        "I'm sorry! You must be looking for something that does not currently exist. I mean it could. Maybe it even should. Crap. Okay, now there's panic. Everyone remain calm. REMAIN CALM!!"
      }
      <br />
      <br />
      {"Okay. Maybe we should just contact the webmaster. Oh wait, that's me!"}
      <br />
      <br />
      {
        "Okay. So there's no page here. I simply did not write a component to render one. If you think I should have. Definitely email me. I'll review it. Consider it. Debate it with friends and loved ones. And I'll get back to you in 8-10 business days (companies still use that for some reason). "
      }
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </Box>
  </Layout>
);

export default NotFound;
