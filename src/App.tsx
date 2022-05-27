import React, { useState } from 'react';

import ColorList from './components/colorList';
import colorData from './components/colorList/color-data.json';
// import StarRating from './components/startRating';

function App() {
  const [colors, setColors] = useState(colorData);

  return (
    <div className="App">
      {/* <StarRating
        totalStars={5}
        style={{ backgroundColor: 'lightblue' }}
        onDoubleClick={() => alert('double click')}
      /> */}
      <ColorList
        colors={colors}
        onRemoveColor={(id) => {
          const newColors = colors.filter((color) => color.id !== id);
          setColors(newColors);
        }}
        onRateColor={(id: string, rating: any) => {
          const newColors = colors.map((color) =>
            color.id === id ? { ...color, rating } : color,
          );
          setColors(newColors);
        }}
      />
    </div>
  );
}

export default App;
