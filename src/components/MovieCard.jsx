import CardStyle from'./CardStyle.css';
import React from "react";


const MovieCard =()=>{
    return (
        <div className="card">
            <h3 className="movieName">Name</h3>
            <img className="MovieImage" src={"https://m.media-amazon.com/images/M/MV5BNzQ4MGYzYzAtNjJlOC00NTdkLTlmNTAtMmZjMzZmZTg2YTEzXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_QL75_UY414_CR0,0,280,414_.jpg"}/>

        </div>
    );
};

export default MovieCard;