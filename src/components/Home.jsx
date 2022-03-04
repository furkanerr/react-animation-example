import React from 'react';
import Filter from "./Filter";
import MovieCard from "./MovieCard";

const Home = () =>{
    return (
        <div className="Container">
            <div className="filter">
                <Filter/>
            </div>
            <div className="cardContainer">
                <MovieCard/>
            </div>
        </div>
    );
}

export default Home;
