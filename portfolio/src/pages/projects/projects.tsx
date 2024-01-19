import React from 'react';
import './projects.css';
import CustomTitle from '../../components/title/title';
import Card from '../../components/cards/card';
import htmlimage from '../../assets/projetos/html.jpg';
import cssimage from '../../assets/projetos/css.jpg';

const PortfolioProject: React.FC = () => {

  return (
    <div className='projects-container'>
        <CustomTitle text="PROJECTS" size="35px"/>
        <div className="cards-container">
            <Card imageUrl={htmlimage} title='Projeto HTML' message='clique aqui'/>
            <Card imageUrl={cssimage} title='Projeto CSS' message='clique aqui'/>
        </div>
    </div>
  );
};

export default PortfolioProject;
