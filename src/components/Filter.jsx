import React, {useEffect} from 'react';
import FilterStyle from './FilterStyle.css'
const Filter = ({setFilter,movies,activeGenre,setActiveGenre})=>{


    useEffect(()=>{
        if (activeGenre==0){
            setFilter(movies)
        }else{
            const filteredData = movies?.filter((movie) => movie.genre_ids.includes(activeGenre))
            setFilter(filteredData);
            console.log(filteredData)
        }


    },[activeGenre])

    return (
        <div className="filterContainer">
            <button onClick={() =>setActiveGenre(0)} className={activeGenre === 0 ? 'active' : ''}>All</button>
            <button onClick={() =>setActiveGenre(35)} className={activeGenre === 35 ? 'active' : ''}>Comedy</button>
            <button onClick={() =>setActiveGenre(28)} className={activeGenre === 28 ? 'active' : ''}>Action</button>
        </div>
    );
};

export default Filter;