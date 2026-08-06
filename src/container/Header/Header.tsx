import React, { FC } from 'react';
import Images from '../../constants/Images';
import './Header.css';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <nav>
    <div className="app__header">
      <div className='app__header-logo'>
        <img src={Images.whitelogocircle} alt="images" />
      </div>
      <ul className='app__header-links'>
        <li className='p__notosans app__header-link'>About</li>
        <li className='p__notosans app__header-link'>Projects</li>
        <li className='p__notosans app__header-link'>Contact</li>
      </ul>
    </div>
  </nav>
);

export default Header;
