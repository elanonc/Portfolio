import React from 'react';
import "./experience.css";
import CustomTitle from '../../components/title/title';
import Icon from '../../components/icon/icon';
import MySvgContent from '../../assets/css.svg'; // Importe o conteúdo SVG como um componente React

const Experience: React.FC = () => {

  return (
    <>
        <CustomTitle text="EXPERIENCE WITH" size="20px"/>
        <div className="experience-icons-container">
            <Icon svgContent={<MySvgContent />} width={38} height={42} color="#ff0000" />
        </div>
    </>
  );
};

export default Experience;