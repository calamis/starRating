import React from 'react';
import { FaTrash } from 'react-icons/fa';

import StarRating from '../startRating';

interface IColor {
  id: string;
  title: string;
  color: string;
  rating: number;
  // eslint-disable-next-line no-unused-vars
  onRemove?: (id: any) => void | undefined;
  // eslint-disable-next-line no-unused-vars
  onRate?: (id: any, rating: any) => void | undefined;
}

function Color({
  id,
  title,
  color,
  rating,
  onRemove = (f) => f,
  onRate = (f) => f,
}: IColor) {
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating selectedStars={rating} onRate={(rating) => onRate(id, rating)} />
    </section>
  );
}

export default Color;
