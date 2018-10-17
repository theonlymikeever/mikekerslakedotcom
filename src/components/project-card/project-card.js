import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({
  title,
  role,
  timeframe,
  description,
  image,
  demoLink,
  githubLink,
}) => (
  <div>
    <h2>{title}</h2>
    <p>Role: {role}</p>
    <p>Timeframe: {timeframe}</p>
    {description ? (
      <div
        dangerouslySetInnerHTML={{
          __html: description.childMarkdownRemark.html,
        }}
      />
    ) : null}
    <img src={image} alt={title} />
    {demoLink ? (
      <p>
        <a href={demoLink}>Demo</a>{' '}
      </p>
    ) : (
      ' '
    )}
    {githubLink ? (
        <p>
          <a href={githubLink}>Github</a>{' '}
        </p>
      ) : (
        ' '
      )}
  </div>
);

ProjectCard.propTypes = {
  title: PropTypes.string,
  role: PropTypes.string,
  timeframe: PropTypes.string,
  description: PropTypes.object,
  image: PropTypes.string,
  demoLink: PropTypes.string,
  githubLink: PropTypes.string,
}

export default ProjectCard;
