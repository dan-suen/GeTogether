import React, {useState} from 'react';
import './search.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Search = (props) => {
  const [name, setName] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(name); 
    }
  return (
    <form onSubmit = {handleSubmit}>
    <div className="input-group search">
      <button className="btn btn-primary dropdown-toggle search__select" type="button" data-bs-toggle="dropdown" aria-expanded="false">See whats Happening</button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Today</a></li>
          <li><a className="dropdown-item" href="#">Tommorow</a></li>
          <li><a className="dropdown-item" href="#">This week</a></li>
        </ul>
     
        <input onChange = {(e) => setName(e.target.value)} value = {name} className="form-control search__bar" placeholder='Search'/>
        <button type="submit" className="btn btn-primary input-group-text search__btn"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
      
    </div>
    </form>
  );
};

export default Search;