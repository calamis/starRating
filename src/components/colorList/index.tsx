import React from 'react';

import Color from './color';

export interface IColor {
  colors: {
    id: string;
    title: string;
    color: string;
    rating: number;
  }[];
  // eslint-disable-next-line no-unused-vars
  onRemoveColor: (id: any) => void | undefined;
  // eslint-disable-next-line no-unused-vars
  onRateColor: (id: any, rating: any) => void | undefined;
}

function ColorList({
  colors = [],
  onRemoveColor = (f) => f,
  onRateColor = (f) => f,
}: IColor) {
  if (!colors.length) return <>No Colors listed</>;

  return (
    <div>
      {colors.map((color) => (
        <Color key={color.id} {...color} onRemove={onRemoveColor} onRate={onRateColor} />
      ))}
    </div>
  );
}

export default ColorList;
