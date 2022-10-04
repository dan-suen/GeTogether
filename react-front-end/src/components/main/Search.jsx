import React from 'react';
import './search.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Search = () => {
  return (
    <div className="input-group search">
    <button className="btn btn-primary dropdown-toggle search__select" type="button" data-bs-toggle="dropdown" aria-expanded="false">See whats Happening</button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Starting Soon</a></li>
        <li><a className="dropdown-item" href="#">Today</a></li>
        <li><a className="dropdown-item" href="#">Tommorow</a></li>
        <li><a className="dropdown-item" href="#">This week</a></li>
      </ul>

      <input type="search" className="form-control search__bar" placeholder='search'/>
     
      <button type="button" className="btn btn-primary input-group-text search__btn">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
};

export default Search;