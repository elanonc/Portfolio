import React from 'react';
import "./button.css";

type ButtonProps = {
  onClick: (e?: React.MouseEvent) => void;
  width?: number;
  height?: number;
  text?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  width = 100,
  height = 40,
  text = '',
  backgroundColor = '#ffffff',
  borderColor = '#000000',
  textColor = '#000000',
}: ButtonProps) => (
  <button
    onClick={onClick}
    style={{
      width: `${width}px`,
      height: `${height}px`,
      backgroundColor,
      borderColor,
      color: textColor,
    }}
  >
    {text}
  </button>
);

export default Button;
