import React, { useState, useEffect } from 'react'
import axios from './axios';
import requests from './request';
import './banner.css'
const base_url = "https://www.youtube.com/results?search_query="
function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            return request

        }
        fetchData()
    }, [])
    console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            
        }}>
            <div className="banner--featured--vertical">
                <div className="banner--featured--horizontal">
                    <div className="banner_contents">
                        <h1 className="banner_title">
                            {movie?.title || movie?.name || movie?.original_name}
                        </h1>

                        <div className="banner_buttons">
                            <a href={`${base_url}${movie?.title || movie?.name || movie?.original_name}`}>
                            <button className="banner_button" href>Play</button></a>
                            <button className="banner_button">My List</button>
                        </div>
                        <h1 className="banner_description">
                            {truncate(movie?.overview, 150)}
                        </h1>
                    </div>
                </div>
            </div>
            <div className="banner--fadeBottom"></div>
        </header>
    )
}

export default Banner
