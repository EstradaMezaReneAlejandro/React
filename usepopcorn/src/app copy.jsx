import { useState, useEffect } from 'react';
// import originalData from '../originalData.js';
// import favourites from '../favourites.js';
import Navbar from './Navbar.jsx';
import Logo from './Logo.jsx';
import SearchInput from './SearchInput.jsx';
import Results from './Results.jsx';
import Main from './main.jsx';
import ListBox from './ListBox.jsx';
import MovieList from './MovieList.jsx';
import Movie from './Movie.jsx';
import WatchedBox from './WatchedBox.jsx';
import WatchedSummary from './WatchedSummary.jsx';
import WatchedList from './WatchedList.jsx';
import WatchedMovie from './WatchedMovie.jsx';
import Loader from './Loader.jsx';
import ErrorMessage from './ErrorMessage.jsx';
import SelectedMovie from './SelectedMovie.jsx';
import { useMovies } from './useMovies.js';
import { useLocalStorageState } from './useLocalStorageState.js';

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const KEY = "f3477b88"
// api ---> http://www.omdbapi.com/?apikey=${KEY}&s=interstellar

export default function App()
{
    
    const [query, setQuery] = useState("");
    const [selectedId, setSelectedId] = useState(null);
    
    const {movies, isLoading, error} = useMovies(query, handleCloseMovie);
    const [watched, setWatched] = useLocalStorageState([], "watched");

    // const [watched, setWatched] = useState([]);
    
    function handleSelectMovie(id)
    {
        setSelectedId(selectedId => id === selectedId ? null : id);
    }

    function handleCloseMovie()
    {
        setSelectedId(null);
    }

    function handleAddWatched(movie)
    {
        setWatched(watched => [...watched, movie]);
        // localStorage.setItem('watched', JSON.stringify([...watched, movie]));
    }

    function handleDeleteWatched(id)
    {
        setWatched(watched => watched.filter(movie => movie.imdbID !== id));
    }


    return (
        <>
            <Navbar>
                <Logo />
                <SearchInput query={query} onSetQuery={setQuery} />
                <Results movies={movies} />
            </Navbar>
            <Main>
                <ListBox>
                    {/* {isLoading ? <Loader /> : (
                    )
                    } */}
                    {isLoading && <Loader />}
                    {!isLoading && !error && (
                        <MovieList>
                            <Movie movies={movies} onSelectMovie={handleSelectMovie}/>
                        </MovieList>
                    )}
                    {error && <ErrorMessage message={error} />}
                </ListBox>
                <WatchedBox>
                    {
                        selectedId ? <SelectedMovie KEY={KEY} selectedId={selectedId} onCloseMovie={handleCloseMovie} onAddWatched={handleAddWatched} watched={watched}/> :
                        (
                            <>
                                <WatchedSummary watched={watched} average={average}/>
                                <WatchedList>
                                    <WatchedMovie watched={watched} onDeleteWatched={handleDeleteWatched}/>
                                </WatchedList>
                            </>
                        )
                    }
                </WatchedBox>
            </Main>
        </>
  );
}