import CardStyle from'./CardStyle.css';
import React from "react";
import {motion} from "framer-motion";

const MovieCard =({movie})=>{
    return (
        <motion.div
            layout
            animate={{opacity:1}}
            initial={{opacity:0}}
            exit={{opacity:0}}
           className="card">
            <h4 className="movieName">{movie.original_title}</h4>
            <img className="MovieImage" src={"https://image.tmdb.org/t/p/w500"+movie.backdrop_path}/>
        </motion.div>
    );
};

export default MovieCard;