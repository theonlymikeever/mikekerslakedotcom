import React from 'react';
import PropTypes from 'prop-types';
import {
  CardContainer,
  ImageBox,
  Image,
  InfoBox,
  Heading,
  SubHeading,
  Link,
  LinkBox,
} from './project-card.css';

const ProjectCard = ({
  title,
  role,
  timeframe,
  description,
  image,
  demoLink,
  githubLink,
  npmLink,
}) => (
  <CardContainer>
    <ImageBox>
      <Image src={image.childImageSharp.fluid.src} alt={title} />
      <LinkBox>
        {demoLink ? <Link href={demoLink}>Demo</Link> : ' '}
        {githubLink ? <Link href={githubLink}>Github</Link> : ' '}
        {npmLink ? <Link href={npmLink}>NPM</Link> : ' '}
      </LinkBox>
    </ImageBox>
    <InfoBox>
      <Heading>{title}</Heading>
      <SubHeading>
        <span>{role}</span> | {timeframe}
      </SubHeading>
      {description ? (
        <div
          dangerouslySetInnerHTML={{
            __html: description.childMarkdownRemark.html,
          }}
        />
      ) : null}
    </InfoBox>
  </CardContainer>
);

ProjectCard.propTypes = {
  title: PropTypes.string,
  role: PropTypes.string,
  timeframe: PropTypes.string,
  description: PropTypes.object,
  image: PropTypes.object,
  demoLink: PropTypes.string,
  githubLink: PropTypes.string,
  npmLink: PropTypes.string,
};

export default ProjectCard;
