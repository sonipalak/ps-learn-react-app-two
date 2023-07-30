import React from 'react';
import { useParams } from 'react-router-dom';
//const API = "https://api.themoviedb.org/3/movie/id=${id}?api_key=1e35cb3b92e6c902bcabbc7a0ef5c2f5";


const MovieDetails = () => {
    const { id } = useParams();

    return (
        <>
            MovieDetails {id}
        </>
    )
}
export default MovieDetails;