import React from 'react';
import "./text.css";

interface CustomTextProps {
  text: string;
  size: string;
}

const CustomText: React.FC<CustomTextProps> = ({ text, size }) => {
  const textStyle: React.CSSProperties = {
    fontSize: size,
  };

  return <p className='custom-text' style={textStyle}>{text}</p>;
};

export default CustomText;
