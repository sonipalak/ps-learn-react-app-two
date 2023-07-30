import React from "react";
import { Link } from 'react-router-dom';



const MovieItem = ({ movie }) => {


    return (
        <>
            <article className='movie-card'>
                <div className='movie-card__poster'>
                    <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.title} />
                </div>
                <div className='movie-card__details'>
                    <h5 className="title">{movie.title}</h5>
                    {/* <p>{movie.overview}</p> */}
                    <p className="date">{movie.release_date}, {movie.id}</p>
                    <p className="vote-average">{movie.vote_average}</p>
                    <Link to={`details`}>More Deatils</Link>
                </div>
            </article>
        </>
    )
}
export default MovieItem;