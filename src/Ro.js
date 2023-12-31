import React, { useEffect, useState } from 'react'
import instance from './baseUrl'
import './Ro.css'

function Ro({ title, fetchUrl,isposter }) {

    const [movies, setMovies] = useState([])
    const baseUrl = "https://image.tmdb.org/t/p/original/"

    //apicall
    const fetchMovie = async () => {
        const { data } = await instance.get(fetchUrl)
        setMovies(data.results)
    }
    console.log(movies);

    useEffect(() => {
        fetchMovie()
    }, [])


    return (
        <div className='row'>
            <h1>{title}</h1>

            <div className='movieRow'>
                {
                    movies.map(movie => (
                        <img className={`movie ${isposter && 'postermovie'}`} src={`${baseUrl}${isposter?movie.backdrop_path:movie.poster_path}`} alt="" />
                    ))
                }
            </div>


        </div>
    )
}

export default Ro