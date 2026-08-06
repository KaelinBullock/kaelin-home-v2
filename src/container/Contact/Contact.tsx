import React, { FC } from 'react';
import './Contact.css';

interface ContactProps {}

const Contact: FC<ContactProps> = () => (
  <div className="app__contact app__bg section__padding">
    <div className='head_text'>
      <h1 className='app__projects_header headtext'>Contact</h1>
    </div>
    <div className='app__contact-container'>
      <div className='app__contact-container-info p__notosans'>
        <p> Feel free contact me.  I will try to respond in a timely manner.</p>
      </div>
      <div className='app__contact-container-button'>
        <button >
          kaelin.bullock@gmail.com
        </button>
        <button className='app__contact-container-button-overlay' onClick={() => {navigator.clipboard.writeText('kaelin.bullock@gmail.com')}}>Click to Copy</button>
      </div>
    </div>
  </div>
);

export default Contact;
