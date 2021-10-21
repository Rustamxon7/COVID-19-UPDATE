/* eslint-disable react/prop-types */
import React from 'react';
import TopBar from '../UI/TopBar';
import './Total.css';

const Total = (props) => {
  // eslint-disable-next-line react/prop-types
  const { totals } = props;
  return (
    <div>
      {totals.map((total) => (
        <div key={total.date}>
          <TopBar day={total.date} />
          <div className="total">
            <img className="world__map" src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" alt="worldmap" />
            <div className="total__info">
              <p>Total</p>
              <p className="info__cases">
                {total.today_confirmed.toLocaleString()}
                {' '}
                cases
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Total;
