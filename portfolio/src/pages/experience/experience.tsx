import React from 'react';
import "./experience.css";
import CustomTitle from '../../components/title/title';

import compass from '../../assets/empresas/UOL.png'
import Banner from '../../components/banner/banner';

const Experience: React.FC = () => {

  return (
    <div className='experience-container'>
        <CustomTitle text="EXPERIENCE" size="35px"/>
        <Banner
          iconUrl={compass}
          name='Estagiário DevSecOps'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          date='Jul 2023 - Dez 2023'
        />
    </div>
  );
};

export default Experience;