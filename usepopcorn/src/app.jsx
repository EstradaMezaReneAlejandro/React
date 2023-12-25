import { useState } from 'react';
import originalData from '../originalData.js';
import favourites from '../favourites.js';
import Navbar from './Navbar.jsx';
import Main from './main.jsx';

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App()
{
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState(originalData);
    const [watched, setWatched] = useState(favourites);

    return (
        <>
            <Navbar movies={movies} query={query} onSetQuery={setQuery}/>
            <Main movies={movies} watched={watched} />
        </>
  );
}