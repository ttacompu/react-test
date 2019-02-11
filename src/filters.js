import React from 'react';

export const Filters =({currentFilter, handleFilterClick}) =>{
    console.log(currentFilter);
        return (
            <ul className="FiltersContainer">
                <li><a href="#" onClick={() => handleFilterClick('All')} className={currentFilter === 'All' ? 'noUnderLine': ''} >All</a></li> 
                | <li><a href="#" onClick={() => handleFilterClick('Completed')} className={currentFilter === 'Completed' ? 'noUnderLine': ''} >Completed</a></li> 
                | <li><a href="#" onClick={() => handleFilterClick('InCompleted')} className={currentFilter === 'InCompleted' ? 'noUnderLine': ''} >InCompleted</a></li>
            </ul>
        )
}