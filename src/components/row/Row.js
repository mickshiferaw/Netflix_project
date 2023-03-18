import React, { useState, useEffect } from 'react'
import './row.css'
import axios from '../../apiRequest'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLarge }) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL]

    )
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    }
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("")
        } else {
            movieTrailer(movie?.title || movie?.name || movie.original_name)
                .then((url) => {
                    const UrlParams = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(UrlParams.get("v"))
                })
                .catch((error) => console.log("error"))
        }
    }
    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="row_posters" >
                {movies.map((movie) => (
                    <img
                        onClick={() => handleClick(movie)}
                        className={`row_poster ${isLarge && "large_row"}`}
                        src={`${base_url}${isLarge ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                    />
                ))}

            </div>
            <div style={{ padding: "40px" }}>
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </div>
        </div>
    );

}
// (parameter) movie:any
export default Row