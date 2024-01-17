import React from 'react';
import "./experience.css";
import CustomTitle from '../../components/title/title';
import Icon from '../../components/icons/icons';

const Experience: React.FC = () => {

  return (
    <div className='experience-container'>
        <CustomTitle text="EXPERIENCE WITH" size="20px"/>
        <Icon/>
    </div>
  );
};

export default Experience;