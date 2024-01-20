import React from 'react';
import "./home.css";
import CustomText from '../../components/text/text';
import CustomTitle from '../../components/title/title';
import Button from '../../components/buttons/button';
import Icon from '../../components/icons/icons';

const PortfolioHome: React.FC = () => {

  const handleButtonClick = () => {
    console.log('Button clicked!');
  };


  return (
    <>
      <div className='home-text-container'>
        <CustomTitle text="I do code and make content about it!" size="55px"/>
        <CustomText text="I am a seasoned full-stack software engineer with over 8 years of professional experience, specializing in backend development. My expertise lies in crafting robust and scalable SaaS-based architectures on the Amazon AWS platform." size="18px"/>
      </div>
      <div className="home-button-container">
          <Button
            onClick={handleButtonClick}
            width={195}
            height={64}
            text="Get In Touch"
            backgroundColor="#FFF"
            borderColor="#FFF"
            textColor="#000"
          />
          <Button
            onClick={handleButtonClick}
            width={195}
            height={64}
            text="Download CV"
            backgroundColor="transparent"
            borderColor="#FFF"
            textColor="#FFF"
          />
      </div>
      <div className='home-experience-container'>
        <CustomTitle text="EXPERIENCE WITH" size="20px"/>
        <Icon/>
    </div>
    </>
  );
};

export default PortfolioHome;
