import React from 'react';
import './cardItem.css';

export default function CardItem(props) {
  // const getRandomInt = Math.floor(Math.random() * 100);
  const roboHashUrl = `https://robohash.org/${props.id}?set=set2`;

  return (
    <div className='card'>
      <div className='card__bio-image-container'>
        <img
          className='bio-image-container__image'
          src={roboHashUrl}
          alt='robots'></img>
      </div>
      <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
}
