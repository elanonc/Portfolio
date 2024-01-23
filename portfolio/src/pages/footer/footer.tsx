import React from 'react';
import "./footer.css";
import email from '../../assets/email.svg'
import CustomTitle from '../../components/title/title';
import CustomText from '../../components/text/text';

const PortfolioFooter: React.FC = () => {
  return (
    <footer className='footer'>
      <div className="footer-container">
        <CustomTitle text="Contact" size="24px"/>
        <CustomText text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque quis, est magnam porro quae ducimus. Eos excepturi assumenda, placeat ab illo magnam provident dolores, sed culpa maxime adipisci sint omnis!" size="15px"/>
        <div className="email-container">
          <img src={email} alt="icon de email" />
          <p>nunes.elano14@gmail.com</p>
        </div>
        <div className="social-medias-container">

        </div>
      </div>
    </footer>
  );
};

export default PortfolioFooter;
