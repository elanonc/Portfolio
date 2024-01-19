import React from 'react';
import "./card.css"; // Certifique-se de criar o arquivo CSS correspondente

type CardProps = {
  imageUrl: string;
  title: string;
  message: string;
};

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  message,
}: CardProps) => (
  <div className="card">
    <img src={imageUrl} alt="Card Image" className="card-image" />
    <div className="card-content">
      <p className="card-message">{message}</p>
      <h2 className="card-title">{title}</h2>
    </div>
  </div>
);

export default Card;
