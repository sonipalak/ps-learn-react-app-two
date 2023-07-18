import React, { useState, useEffect } from 'react';
//const API = "https://api.themoviedb.org/3/movie/id=${id}?api_key=1e35cb3b92e6c902bcabbc7a0ef5c2f5";


const MovieDetails = ({id}) => {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1e35cb3b92e6c902bcabbc7a0ef5c2f5`)
            .then((response) => response.json())
            .then((data) => setMovie(data))
            .catch((error) => console.log(error));
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <article className='movie-card'>
                <div>
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <p className="date">{movie.release_date}, {movie.id}</p>
                <p className="vote-average">{movie.vote_average}</p>
                </div>
            </article>
        </>
    )
}
export default MovieDetails;