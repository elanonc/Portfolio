import "./icons.css";

import React from 'react';
import css from '../../assets/css.svg'
import html from '../../assets/html.svg'
import javascript from '../../assets/javascript.svg'
import nodejs from '../../assets/nodejs.svg'
import reactjs from '../../assets/reactjs.svg'

const Icon: React.FC = () => {
  return (
    <>
        <div className="icons-container">
            <img src={css} alt="icon do css" />
            <img src={html} alt="icon do html" />
            <img src={javascript} alt="icon do javascript" />
            <img src={nodejs} alt="icon do nodejs" />
            <img src={reactjs} alt="icon do reactjs" />
        </div>
    </>
  );
};

export default Icon;