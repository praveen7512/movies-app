import React, { useState } from 'react'
import './MovieCard.css'

function MovieCard({movies}) {


    let {name , year ,genre ,duration,img_link,imdb_rating} = movies;
    

    
    

  
  return (
    <div className="card-container">
      

      
      <div className="imgclass">
        <img src={img_link} alt="ii" className='imgtag' />
     
      </div>
     

       <div className="details">
       <div>
        <span className="title">{name}</span>
     </div>


     <div>
        <span className='title'>{genre}</span>
     </div>

        <div className='rating'>
        <span>{imdb_rating}</span>
        <span>{duration} mins</span>
     </div>
       </div>
    



    </div>
  )
}

export default MovieCard