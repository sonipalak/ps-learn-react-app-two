import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";

const MovieList = () => {
    const [popular, setPopular] = useState([]);
    const [loading, setLoding] = useState(true);
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState()
    const [pageSize, setPageSize] = useState()
    

    //1 [total_pages, setTotal_pages] = useState(0)



    const getMovie = async () => {
        let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=1e35cb3b92e6c902bcabbc7a0ef5c2f5&language=en-US&page=${page}`;
        let data = await fetch(url);
        let movies = await data.json();
        setPopular(movies.results);
        setTotalResults(movies.totalResults)
        setPageSize(movies.pageSize)
        setLoding(false);
        console.log(movies)
    };

    useEffect(() => {
        getMovie();
        // eslint-disable-next-line
    }, [page]);


    const hendelNextClick = async () =>{
        console.log("Next")
        if(!(page + 1 > Math.ceil(totalResults/pageSize))){
            let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=1e35cb3b92e6c902bcabbc7a0ef5c2f5&language=en-US&page=${page+1}`;
            setPage(page+1)
            let data = await fetch(url);
            let movies = await data.json();
            setPopular(movies.results);
            setLoding(false);
        }
        
    }

    const hendelPrevClick = async () => {
        console.log("Previous")
        if(!(page - 1 > Math.ceil(totalResults/pageSize))){
            let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=1e35cb3b92e6c902bcabbc7a0ef5c2f5&language=en-US&page=${page-1}`;
            setPage(page-1)
            let data = await fetch(url);
            let movies = await data.json();
            setPopular(movies.results);
            setLoding(false);
        }
        
    }
    return(
        <>

            <section className="movie-list">
                {loading && <h4>Loading...</h4>}
                {popular.map((movie) => {
                    return <MovieItem key={movie.id} movie={movie} overview={movie.overview} id={movie.id} />;
                })}
            </section>
            <div className="button_action">
                <button disabled={page<=1} onClick={hendelPrevClick}>Previous</button>
                <button disabled={page + 1 > Math.ceil(totalResults/pageSize)} onClick={hendelNextClick}>Next</button>
            </div>
        </>
    )
}
export default MovieList;