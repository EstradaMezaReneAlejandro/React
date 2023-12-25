export default function Movie({ movies, onSelectMovie })
{
	const movie = movies?.map((movie) => (
		<li key={movie.imdbID} onClick={() => onSelectMovie(movie.imdbID)}>
			<img src={movie.Poster} alt={`${movie.Title} poster`} />
			<h3>{movie.Title}</h3>
			<div>
				<p>
					<span>🗓</span>
					<span>{movie.Year}</span>
				</p>
			</div>
		</li>
	));
	return (
		<>
			{movie}
		</>
	);
}