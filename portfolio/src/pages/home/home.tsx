import React from 'react';
import "./home.css";
import PortfolioNavbar from '../../components/navbar/navbar';
import CustomText from '../../components/text/text';
import CustomTitle from '../../components/title/title';

const PortfolioHome: React.FC = () => {
  return (
    <>
        <PortfolioNavbar/>
        <div className='home-text-container'>
          <CustomTitle text="I do code and make content about it!" size="55px"/>
          <CustomText text="I am a seasoned full-stack software engineer with over 8 years of professional experience, specializing in backend development. My expertise lies in crafting robust and scalable SaaS-based architectures on the Amazon AWS platform." size="18px"/>
        </div>
    </>
  );
};

export default PortfolioHome;
