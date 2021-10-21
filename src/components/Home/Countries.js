/* eslint-disable no-sequences */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation, NavLink } from 'react-router-dom';
import './Countries.css';
import { BsArrowRightCircle } from 'react-icons/bs';
import countryMap from '../Map/countryMap';

const Countries = (props) => {
  const { datas } = props;

  const location = useLocation();
  let { data } = location;
  if (!data) {
    data = JSON.parse(localStorage.getItem('data'));
  } else {
    localStorage.setItem('data', JSON.stringify(data));
  }

  const [counter, setCounter] = useState(20);
  const [, setIsEditing] = useState(false);

  const incrementCounter = () => {
    setCounter(counter + 25);
    setIsEditing(true);
  };
  let decrementCounter = () => setCounter(counter - 175);
  if (counter <= 10) {
    decrementCounter = () => {
      setCounter(10);
      setIsEditing(false);
    };
  }

  return (
    <div>
      <div className="countries">
        {datas.slice(0, counter).map((data) => {
          const test = `/detail/${data.id}`;
          return (
            <div key={data.id} className="count">
              <NavLink className="nav__link" to={{ pathname: test, data }} exact>
                <BsArrowRightCircle className="arrow" />
                <div className="country">
                  <img className="filter-green" onError={(e) => ((e.target.onerror = null), (e.target.src = 'https://mapsvg.com/static/maps/geo-calibrated/angola.svg'))} src={countryMap(data.id)} alt={data.id} width="100" height="100" />
                  <div className="country__info">
                    <p className="country__name">{data.name}</p>
                    <p className="country__total__count">{data.today_deaths}</p>
                  </div>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
      <div className="more__less">
        {counter < 195 && (
          <button type="button" className="button-three" onClick={incrementCounter}>
            MORE
            {' '}
            {counter}
          </button>
        )}
        {counter === 195 && (
          <button type="button" className="button-three" onClick={decrementCounter}>
            LESS
          </button>
        )}
      </div>
    </div>
  );
};

Countries.defaultProps = {
  dates: [],
};

Countries.propTypes = {
  dates: PropTypes.instanceOf(Array),
};

export default Countries;
