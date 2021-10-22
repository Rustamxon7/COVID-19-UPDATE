/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-sequences */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import './Country.css';
import {
  BarChart, Bar, XAxis, CartesianGrid, Tooltip,
} from 'recharts';

import TopBar from '../UI/TopBar';
import { fetchPostsRequestHistory } from '../../redux/covid-19/covidHistory';
import LineChart from './Chart';
import Loading from '../UI/Loading';
import countryMap from '../Map/countryMap';
import countryIso from '../Map/countryIso';

const Country = () => {
  const location = useLocation();
  let { data } = location;
  if (!data) {
    data = JSON.parse(localStorage.getItem('data'));
  } else {
    localStorage.setItem('data', JSON.stringify(data));
  }

  const [count, setCount] = useState(0);
  const [countInTimeout, setCountInTimeout] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsRequestHistory(data.name));
    setTimeout(() => {
      setCountInTimeout(count); // count is 0 here
    }, 3000);
    setCount(5); // Update count to be 5 after timeout is scheduled
  }, [count, data.name, dispatch]);
  const [chartData, setChartData] = useState([]);

  const historyData = useSelector((state) => state.history.history[0]);
  const loading = useSelector((state) => state.history.loading);

  const handleChartData = (category) => {
    const dataArr = Object.keys(historyData).map((date) => {
      const value = historyData[date].countries[data.name][category];
      return value;
    });
    setChartData(dataArr);
  };

  const datas = [
    {
      name: 'Confirmed',
      pv: data.today_confirmed,
      amt: data.today_new_confirmed,
    },
    {
      name: 'Death',
      pv: data.today_deaths,
      amt: data.today_new_deaths,
    },
    {
      name: 'Cases',
      pv: data.today_open_cases,
      amt: data.today_new_open_cases,
    },
    {
      name: 'Recovered',
      pv: data.today_recovered,
      amt: data.today_new_recovered,
    },
  ];

  const iso = countryIso[data.name];

  return (
    <div key={data.id} className="country__container">
      <MediaQuery query="(min-device-width: 1024px)">
        <div className="chart">
          <BarChart width={800} height={200} data={datas}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <Tooltip />
            <Bar dataKey="pv" stackId="a" fill="#8884d8" />
            <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
            <Bar dataKey="uv" fill="#ffc658" />
          </BarChart>
        </div>
      </MediaQuery>
      <TopBar day={data.date} />
      <MediaQuery query="(min-device-width: 1024px)">
        <div className="country__header">
          <div className="country__map">
            <img className="filter-green" onError={(e) => ((e.target.onerror = null), (e.target.src = `https://mapsvg.com/static/maps/geo-calibrated/${data.name}.svg`))} src={countryMap(iso)} alt={data.id} width="100" height="100" />
          </div>
          <div className="country__name__inside">
            <h1 className="country__name__title">{data.name}</h1>
            <h2 className="country__name__today">
              Total:
              {' '}
              {data.today_confirmed.toLocaleString()}
            </h2>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 1024px)">
        {!countInTimeout && (
          <div className="country__header">
            <div className="country__map">
              <img className="filter-green" onError={(e) => ((e.target.onerror = null), (e.target.src = `https://mapsvg.com/static/maps/geo-calibrated/${data.name}.svg`))} src={countryMap(iso)} alt={data.id} width="100" height="100" />
            </div>
            <div className="country__name">
              <h1 className="country__name__title">{data.name}</h1>
              <h2 className="country__name__today">
                Total:
                {' '}
                {data.today_confirmed.toLocaleString()}
              </h2>
            </div>
          </div>
        )}
        {countInTimeout && (
          <div className="chart__main__mobile">
            <LineChart chartData={chartData} type={data.name} />
          </div>
        )}
      </MediaQuery>

      <h5 className="stasistic">CASES STATISTIC BREAKDOWN </h5>
      {loading && !countInTimeout && <Loading />}
      {!loading && (
        <div className="stat__info">
          <div className="cases">
            <div
              className="case1"
              onClick={() => {
                handleChartData('today_confirmed');
              }}
            >
              <div>Today Confirmed</div>
              <div>
                {data.today_confirmed.toLocaleString()}
                {' '}
                cases
              </div>
            </div>

            <div
              className="case2"
              onClick={() => {
                handleChartData('today_new_confirmed');
              }}
            >
              <div>Today New Confirmed</div>
              <div>
                {data.today_new_confirmed.toLocaleString()}
                {' '}
                cases
              </div>
            </div>
            <div
              className="case1"
              onClick={() => {
                handleChartData('today_deaths');
              }}
            >
              <div>Today Deaths</div>
              <div>
                {data.today_deaths.toLocaleString()}
                {' '}
                cases
              </div>
            </div>
            <div
              className="case2"
              onClick={() => {
                handleChartData('today_new_deaths');
              }}
            >
              <div>Today New Deaths</div>
              <div>
                {data.today_new_deaths.toLocaleString()}
                {' '}
                cases
              </div>
            </div>
            <div
              className="case1"
              onClick={() => {
                handleChartData('today_open_cases');
              }}
            >
              <div>Today Open Cases</div>
              <div>
                {data.today_open_cases.toLocaleString()}
                {' '}
                cases
              </div>
            </div>
            <div
              className="case2"
              onClick={() => {
                handleChartData('today_new_open_cases');
              }}
            >
              <div>Today New Open Cases</div>
              <div>
                {data.today_new_open_cases.toLocaleString()}
                {' '}
                cases
              </div>
            </div>
            <div
              className="case1"
              onClick={() => {
                handleChartData('today_new_recovered');
              }}
            >
              <div>Today New Recovered</div>
              <div>
                {data.today_new_recovered.toLocaleString()}
                {' '}
                cases
              </div>
            </div>

            <div
              className="case2"
              onClick={() => {
                handleChartData('today_recovered');
              }}
            >
              <div>Today Recovered</div>
              <div>
                {data.today_recovered.toLocaleString()}
                {' '}
                cases
              </div>
            </div>
            <div className="case1">
              <div>Yesterday Confirmed</div>
              <div>
                {data.yesterday_confirmed.toLocaleString()}
                {' '}
                cases
              </div>
            </div>
            <div className="case2">
              <div>Yesterday Deaths</div>
              <div>
                {data.yesterday_deaths.toLocaleString()}
                {' '}
                cases
              </div>
            </div>
            <div className="case1">
              <div>Yesterday Open Cases</div>
              <div>{data.yesterday_open_cases.toLocaleString()}</div>
            </div>
          </div>
          <MediaQuery query="(min-device-width: 1024px)">
            <div className="chart__main">
              <LineChart chartData={chartData} type={data.name} />
            </div>
          </MediaQuery>
        </div>
      )}
    </div>
  );
};

export default Country;
