import React from 'react';
import './Search.css'

const Search = () => {
    
    return (
        <div className='search'>
           <div>
                <h1 className='heading'>Best food waiting for your belly</h1>
                <input className='search-input' type="search" placeholder='Search'/>
                <button id='src-btn' type='submit'>Search</button>
           </div>

        </div>
    );
};

export default Search;