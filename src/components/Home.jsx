import React, {useEffect,useState} from 'react';
import Filter from "./Filter";
import MovieCard from "./MovieCard";
import HomeStyle from './HomeStyle.css'
import getPopulerMovies from '../api';
import {motion,AnimatePresence} from "framer-motion";

const Home = () =>{
    const [movies, setMovies] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [activeGenre,setActiveGenre] = useState(0);

    useEffect(async ()=>{
        const data = await getPopulerMovies();
        setMovies(data.results);
        setFiltered(data.results)
        },[])



    return (
        <div className="Container">
            <div className="filter">
                <Filter setFilter={setFiltered} movies={movies} activeGenre={activeGenre} setActiveGenre={setActiveGenre}/>
            </div>

            <motion.div
                layout
                className="cardContainer">
                <AnimatePresence>
                {

                    filtered?.map((movie) =>(
                        <MovieCard key={movie.id} movie={movie}/>
                    ))

                }
                </AnimatePresence>
            </motion.div>

        </div>
    );
}

export default Home;
