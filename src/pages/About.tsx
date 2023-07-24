import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return <div>This is the About page
    <p><Link to={"/"} className='underline'>Go to dashboard</Link></p>
  </div>;
};

export default About;