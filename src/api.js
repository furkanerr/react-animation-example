import axios from "axios";

/*https://api.themoviedb.org/3/movie/popular?api_key=92572631dd1553ee6e6ee2c9d66363b5&language=en-US&page=1*/
 const  getPopulerMovies=async()=>{

    const {data}  =await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=92572631dd1553ee6e6ee2c9d66363b5&language=en-US&page=1');
    return data;

}
export default getPopulerMovies;