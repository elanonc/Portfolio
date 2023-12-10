import React from 'react';
import "./title.css";

interface CustomTitleProps {
  text: string;
  size: string;
}

const CustomTitle: React.FC<CustomTitleProps> = ({ text, size }) => {
  const titleStyle: React.CSSProperties = {
    fontSize: size,
  };

  return <h1 className='custom-title' style={titleStyle}>{text}</h1>;
};

export default CustomTitle;
