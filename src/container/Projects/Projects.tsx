import React, { FC } from 'react';
import './Projects.css';

import Images from '../../constants/Images'

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = () => (
  <div className="app__projects app__bg section__padding">
    <h1 className='app__projects_header headtext'>Projects</h1>
    <p>Projects I worked on, with teammates</p>

    <div className='app__projects-container'>
      <div className='app__projects-img'>
        <img  src={Images.notification}></img>
      </div>
      <div className='app__projects-info'>
        <h1>Notifications</h1>
        <h2>Tools Used</h2>
        <p className='p__notosans app__projects-description'>Azure Event Hub, Spring Boot, SQL, Rest API</p>
        <h2>Description</h2>
        <p className='p__notosans app__projects-description'> Sends notifications to users based on shipment status, eta changes, late, arrived, etc.</p>
      </div>
    </div>

    <div className='app__projects-container'>
      <div className='app__projects-info'>
        <h1>Claims</h1>
        <h2>Tools Used</h2>
        <p className=' p__notosans app__projects-description'>Angular, Spring Boot, REST API</p>
        <h2>Description</h2>
        <p className='p__notosans app__projects-description'>Allows users to submit claims for items</p>
      </div>
      <div className='app__projects-img'>
        <img  src={Images.fragile}></img>
      </div>
    </div>

    <div className='app__projects-container'>
      <div className='app__projects-img'>
          <img  src={Images.stats}></img>
        </div>      
        <div className='app__projects-info'>
        <h1>Integrating Third Party Data</h1>
        <h2>Tools Used</h2>
        <p className='p__notosans app__projects-description'>Spring Boot, Angular, REST API</p>
        <h2>Description</h2>
        <p className='p__notosans app__projects-description'>Retrieved shipment data, from third party, and displayed it within the user portal</p>
      </div>
    </div>
  </div>
);

export default Projects;
