import React from 'react';
import loading from '../../assets/rooling.svg';
import './Loading.css';

function Loading() {
  return (
    <div className="loading">
      <div>
        <img src={loading} alt="loading" />
        <p className="loading__text">Loading...</p>
      </div>
    </div>
  );
}

export default Loading;
