import React from 'react';
import { FaStar } from 'react-icons/fa';

// Componenent
const Star = ({ selected = false, onSelect = (f: void) => f }: any) => (
  <FaStar color={selected ? 'red' : 'grey'} onClick={onSelect} />
);

// helpers
const createArray = (length: number) => [...Array(length)];

function StarRating({
  style = {},
  totalStars = 5,
  selectedStars = 0,
  onRate = (f: any) => f,
}) {
  return (
    <div style={{ padding: '5px', ...style }}>
      {createArray(totalStars).map((n, i) => (
        <Star key={i} selected={selectedStars > i} onSelect={() => onRate(i + 1)} />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
}

export default StarRating;
