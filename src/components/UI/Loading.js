import React from 'react';
import rolling from '../../assets/rolling.svg';
import './Loading.css';

function Loading() {
  return (
    <div className="loading">
      <div>
        <img src={rolling} alt="loading" />
        <p className="loading__text">Loading...</p>
      </div>
    </div>
  );
}

export default Loading;
