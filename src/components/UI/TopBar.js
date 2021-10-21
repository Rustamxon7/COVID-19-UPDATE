import React from 'react';
import { NavLink } from 'react-router-dom';
import './TopBar.css';
import { IoIosArrowBack, IoMdSettings } from 'react-icons/io';
import { BiMicrophone } from 'react-icons/bi';

const TopBar = (props) => {
  const { day } = props;

  return (
    <div className="top__bar">
      <NavLink to="/" exact className="left-nav" activeClassName="active-link">
        <IoIosArrowBack className="back"/>
      </NavLink>
      <div className="date">{day}</div>
      <div className="settings">
        <BiMicrophone />
        <IoMdSettings />
      </div>
    </div>
  );
};
export default TopBar;
