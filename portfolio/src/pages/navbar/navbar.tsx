import React from 'react';
import "./navbar.css";

const PortfolioNavbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">Elano N. Caitano</a>
      </div>
      <div className="links">
        <a href="#">Início</a>
        <a href="#">Projetos</a>
        <a href="#">Experiências</a>
        <a href="#">Contato</a>
      </div>
    </nav>
  );
};

export default PortfolioNavbar;
