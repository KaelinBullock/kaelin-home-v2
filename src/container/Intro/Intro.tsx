import { FC } from 'react';
import { AiOutlineDash } from "react-icons/ai";

import Laptop from '../../constants/Stairs';
import './Intro.css';

interface IntroProps {}

const Intro: FC<IntroProps> = () => (
  <div className="app_intro app__bg section__padding">
    <div className='app_intro-name'>
      <p>Freelancer</p>
      <span className='app_intro-icon'><AiOutlineDash /></span>
      <p className='app__intro-name-kaelin'>Kaelin Bullock</p>
    </div>

    <div className='app_intro-greeting'>
      <div className='app__intro-text-graphic'>
        <div className='app__intro-graphic'>
        <Laptop />
        </div>
        <div>
          <h1 className='app__intro-info'>I'm a Freelance<br/>
            Full Stack Web Developer
          </h1>
        </div>
        
      </div>
        <p>I prefer back end, but I will do whatever it takes to get to the end</p>
    </div>
    <div className='app_intro-contact'></div>
  </div>
);

export default Intro;
