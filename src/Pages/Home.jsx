import React, { useState } from 'react'
import MovieCard from '../Components/MovieCard'

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const handleSearch = (e) => {
        e.preventDefault()
        setSearchQuery('')
    }

    const movies = [
        { id: 1, title: "john-wick", release_date: "2020" },
        { id: 2, title: "deadpool", release_date: "2022" },
        { id: 3, title: "batman", release_date: "2024" },
        { id: 4, title: "xmen", release_date: "2027" },
    ]
    return (
        <div className='home'>
            <form onSubmit={handleSearch} className='search-form'>
                <input value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} type="text" placeholder='Search for movies' className='search-input'  />
                <button type='submit' className='search-button'>search</button>
            </form>
            <div className="movie-grid">
                {movies.map((movie) => (
                       movie.title.toLocaleLowerCase().startsWith(searchQuery) && <MovieCard {...movie} key={movie.id} />
                ))}
            </div>
        </div>
    )
}

export default Home
