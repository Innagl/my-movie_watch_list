import { useState } from "react";
import { data } from "./data";
import './App.css'; 

function App() {
  const [movies, setMovies] = useState(data);
  const [reviewIndex, setReviewIndex] = useState(0);
  


  


  const removeMovie = (id) => {
    let newMoviews = movies.filter(movie => movie.id !== id);
     setMovies(newMoviews)

 }

 const previousReview = () => {
   setReviewIndex((reviewIndex => {
      reviewIndex --;
      if (reviewIndex < 0) {
         return data.length-1;
      }
      return reviewIndex;
    }))
 }

  const nextReview = () => {
   setReviewIndex((reviewIndex => {
      reviewIndex ++;
      if (reviewIndex > data.length - 1) {
        reviewIndex = 0;
      }
      return reviewIndex;
    }))
 }

  return(
    <div>
      <h1>list of {movies.length} movies</h1>
    
        {movies.map((element =>  {
          const {id,  image, title, year, reviews} = element;
          const firstReview = reviews[reviewIndex];
          
         

          return(<div key={id}>
            <div className="container-grid">
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


    <div className="review-container">
      <svg onClick={previousReview} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M15.9502 9.88379L5.8335 20.0005L15.9502 30.1171" stroke="#F2F2F2" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M34.1667 20H6.1167" stroke="#F2F2F2" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    <div className="name_reviwText">
      <p className="body_16_bold">{firstReview.name}</p>
      <p className="text-container">{firstReview.review}</p>
    </div>
   <svg onClick={nextReview} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <rect width="40" height="40" rx="8" fill="black" fill-opacity="0.3"/>
  <path d="M24.0498 9.88379L34.1665 20.0005L24.0498 30.1171" stroke="#F2F2F2" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.8333 20H33.8833" stroke="#F2F2F2" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </div>

</div>


            </div>
           <button className="delete_btn body_20_bold" onClick={() => removeMovie(id)}>Delete from the list</button>
            </div>
              
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
