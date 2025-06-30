import { useState } from "react";
import { data } from "./data";
import './App.css'; 

function App() {
  const [movies, setMovies] = useState(data);
  const [user, setUser ] = useState(0);
  const {name, review} = data[user];

  


  const removeMovie = (id) => {
    let newMoviews = movies.filter(movie => movie.id !== id);
     setMovies(newMoviews)

 }


  return(
    <div>
      <h1>list of {movies.length} movies</h1>
    
        {movies.map((element =>  {
          const {id,  image, title, year, name, reviews} = element;
         

          return(<div key={id}>

            <div className="movie_container">
              <img src={image}/>
            <div className="item_container">
            <div className="title_year" >
            <div>
              <p className="body_32_regular">{title}</p>
            </div>

            <div>
              <p className="body_16_regular">{year}</p>
            </div>
            </div>
            
            <div>
              <p className="body_24_bold">Reviews</p>
            </div>

            <div className="userName_review">
  {reviews.map((reviewObj, index) => (

    <div className="review-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M15.9502 9.88379L5.8335 20.0005L15.9502 30.1171" stroke="#F2F2F2" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M34.1667 20H6.1167" stroke="#F2F2F2" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    <div key={index} className="name_reviwText">
      <p className="body_16_bold">{reviewObj.name}</p>
      <p>{reviewObj.review}</p>
    </div>
   <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <rect width="40" height="40" rx="8" fill="black" fill-opacity="0.3"/>
  <path d="M24.0498 9.88379L34.1665 20.0005L24.0498 30.1171" stroke="#F2F2F2" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.8333 20H33.8833" stroke="#F2F2F2" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </div>
  ))}
</div>


            </div>
           <button className="delete_btn body_20_bold" onClick={() => removeMovie(id)}>Delete from the list</button>
            </div>
              
            </div>);
        }))}
          <div>
       <button onClick={() => setMovies([])}>delet all</button>
       </div>
      </div>
 
  )

}

export default App;
