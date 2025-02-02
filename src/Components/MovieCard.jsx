import React from 'react'
//import "../Styles/movieCard.css"
const MovieCard = ({ id, release_date, title }) => {
    const onLike = () => {

    }
    return (
        <div className='movie-card' key={id}>
            <div className="movie-poster" >
                <img src={''} alt="" />
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onLike}>like</button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{title}</h3>
                <p>{release_date}</p>
            </div>
        </div>
    )
}

export default MovieCard
