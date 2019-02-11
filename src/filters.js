import React from 'react';

export const Filters =({currentFilter, handleFilterClick}) =>{
    console.log(currentFilter);
        return (
            <ul className="FiltersContainer">
                <li><a href="#" onClick={() => handleFilterClick('All')} >All</a></li> 
                | <li><a href="#" onClick={() => handleFilterClick('Completed')}>Completed</a></li> 
                | <li><a href="#" onClick={() => handleFilterClick('InCompleted')}>InCompleted</a></li>
            </ul>
        )
}