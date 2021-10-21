import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsRequestData, fetchPostsRequestTotal } from '../../redux/covid-19/covidUpdate';
import './Home.css';
import Total from './Total';
import Loading from '../UI/Loading';
import Countries from './Countries';

const Home = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsRequestData());
    dispatch(fetchPostsRequestTotal());
  }, [dispatch]);

  const datas = useSelector((state) => state.covid.data);
  const totals = useSelector((state) => state.covid.total);
  const loading = useSelector((state) => state.covid.loading);
  return (
    <div>
      {loading && <Loading />}
      {!loading && (
        <div>
          <Total totals={totals} />
          <div className="stats">STATS BY COUNTRY</div>
          <Countries datas={datas}></Countries>
        </div>
      )}
    </div>
  );
};

export default Home;
