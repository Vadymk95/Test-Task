import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink
        to='/add'
        className="sidebar__button sidebar__add"
      >
        Add User
      </NavLink>
      <nav>
        <ul>
          <li className="sidebar__link-container">
            <NavLink
              activeClassName="active"
              className="sidebar__link"
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li className="sidebar__link-container">
            <NavLink
              activeClassName="active"
              className="sidebar__link"
              to="/users"
            >
              Users
            </NavLink>
          </li>
          <li className="sidebar__link-container">
            <NavLink
              activeClassName="active"
              className="sidebar__link"
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="sidebar__link-container">
            <NavLink
              activeClassName="active"
              className="sidebar__link"
              to="/news"
            >
              News
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
