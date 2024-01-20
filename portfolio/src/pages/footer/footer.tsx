import React from 'react';
import "./footer.css";
import email from '../../assets/email.svg'

const PortfolioFooter: React.FC = () => {
  return (
    <footer>
        <h4>Contact</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque quis, est magnam porro quae ducimus. Eos excepturi assumenda, placeat ab illo magnam provident dolores, sed culpa maxime adipisci sint omnis!
        </p>
        <div className="email-container">
          <img src={email} alt="icon de email" />
        </div>
        <div className="social-medias-container">

        </div>
    </footer>
  );
};

export default PortfolioFooter;
