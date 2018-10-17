import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import ProjectCard from 'components/project-card';

const Projects = ({ data }) => (
  <Layout>
    <Head pageTitle={data.projectsJson.title} />
    <Box>
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
        image
      }
    }
  }
`;
