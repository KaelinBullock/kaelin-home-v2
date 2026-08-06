import React, { FC } from 'react';
import './About.css';

interface AboutProps {}

const About: FC<AboutProps> = () => (
  <div className="app__about app__bg section__padding">
    <h1 className='headtext app__about-skills'>About Me</h1>
    <h1>Skills</h1>
    <p className='app__about-description p__notosans'>Java, SQL, Typescript, Angular, React, APIs, Spring Boot,</p>
    <h1>Background</h1>
    <p className='app__about-description p__notosans'>
      I have worked as a full stack web developer for the last 3 and a half years, at a logistics company.
      My focus is back end. I was born and raised in Arkansas.  I have a degree in Computer Science.
      I have spent most of my careers making APIs and working on backend projects, but I have done many projects on the front end.
    </p>
  </div>
);

export default About;
