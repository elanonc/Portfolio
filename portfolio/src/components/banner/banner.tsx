import React from 'react';
import "./banner.css";
import CustomText from '../text/text';

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
        <div className="empresa-cargo">
          <img src={iconUrl} alt="icon da empresa" className="experience-icon" />
          <h3 className="experience-name">{name}</h3>
        </div>
        <CustomText text={date} size="15px"/>
      </div>
      <CustomText text={description} size="15px"/>
    </div>
  </div>
);

export default Banner;
