import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import ProjectCard from 'components/project-card';
import Title from 'components/title';

const Projects = ({ data }) => (
  <Layout>
    <Head
      pageTitle={data.projectsJson.title}
      siteDescription={data.projectsJson.meta}
    />
    <Box>
      <Title as="h2" size="large">
        {data.projectsJson.title}
      </Title>
      <div
        dangerouslySetInnerHTML={{
          __html: data.projectsJson.content.childMarkdownRemark.html,
        }}
      />
      {data &&
        data.projectsJson.projects.map((item, i) => (
          <ProjectCard {...item} key={i} />
        ))}
    </Box>
  </Layout>
);

Projects.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Projects;

export const query = graphql`
  query ProjectsQuery {
    projectsJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
      meta
      projects {
        title
        description {
          childMarkdownRemark {
            html
          }
        }
        role
        timeframe
        demoLink
        githubLink
        npmLink
        image {
          childImageSharp {
            fluid {
              src
              srcSet
              originalImg
              originalName
            }
          }
        }
      }
    }
  }
`;
