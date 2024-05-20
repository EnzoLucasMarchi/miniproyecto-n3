import { useState } from 'react';
import './Nav.css'

const Nav = ({data, setFilter}) => {
    const [searchLoc, setSearchLoc]= useState('');
    const [searchGuest, setSearchGuest]= useState('');
    function handlerFilter(){
        let rs = data;
        if(searchLoc.trim() !== ''){
            rs = rs.filter(stay => stay.city.toLowerCase().includes(searchLoc))
        } else if (searchGuest.trim() !== '') {
            rs = rs.filter(stay => stay.maxGuests >= parseInt(searchGuest))
        }

            setFilter(rs)
        
    }
    return (
        <>
            <nav className="nav-bar">
                <img className="logo" alt="coso"></img>
                <div className="search-container">
                    <button className="btn-search" type="button" id="search" onClick={handlerFilter}>
                    <input className="loc" type="text" id="location" placeholder="Add Location" value={searchLoc} onChange={(e)=> setSearchLoc(e.target.value.toLowerCase())}/>
                    <input className="guest" type="text" id="guests" placeholder="Add guests" value={searchGuest} onChange={(e)=> setSearchGuest(e.target.value.toLowerCase())}/>
                    <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Nav;