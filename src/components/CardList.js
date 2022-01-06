import React from 'react';
import CardItem from './CardItem';

import './cardList.css';

export default function CardList({ robots }) {
  const cards = robots.map(({ id, name, email }) => {
    return <CardItem key={id} id={id} name={name} email={email} />;
  });

  return <div className='cardlist-container'> {cards}</div>;
}
