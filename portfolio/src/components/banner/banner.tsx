import React from 'react';
import "./banner.css";

type BannerProps = {
  iconUrl: string;
  name: string;
  description: string;
  date: string;
};

const Banner: React.FC<BannerProps> = ({
  iconUrl,
  name,
  description,
  date,
}: BannerProps) => (
  <div className="banner">
    <div className="banner-content">
      <div className="banner-div">
        <img src={iconUrl} alt="icon da empresa" className="experience-icon" />
        <h3 className="experience-name">{name}</h3>
        <p className="experience-date">{date}</p>
      </div>
      <p className="experience-description">{description}</p>
    </div>
  </div>
);

export default Banner;
