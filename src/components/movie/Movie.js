/* eslint-disable no-template-curly-in-string */
import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieLayout from "./MovieLayout";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";

const Movie = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<MovieLayout />}>
                    <Route exact path="/" element={<MovieList />} />
                    <Route exact path='/details/:id' element={<MovieDetails />} />
                </Route>
            </Routes>
        </>
    )
}
export default Movie;