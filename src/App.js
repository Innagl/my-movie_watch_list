import { useState } from "react";
import { data } from "./data";
import { reviews } from "./Reviews";
import './App.css'; 

function App() {
  const [movies, setMovies] = useState(data);
  const [reviewIndex, setReviewIndex] = useState(0);
  


  


  const removeMovie = (id) => {
    let newMovies = movies.filter(movie => movie.id !== id);
     setMovies(newMovies)

 }

 const previousReview = () => {
   setReviewIndex((reviewIndex => {
      reviewIndex --;
      if (reviewIndex < 0) {
         return reviewIndex.length-1;
      }
      return reviewIndex;
    }))
 }

  const nextReview = () => {
   setReviewIndex((review => {
      reviewIndex ++;
      if (reviewIndex > reviews.length - 1) {
        reviewIndex = 0;
      }
      return reviewIndex;
    }))
 }

  return(
    <div className="main-container">
      <h1>Movies picks</h1>

     <div className="list-deleteAll">
      <h3>List of <span className="highlight">{movies.length}</span> movies</h3>
       <button className="text-btn" onClick={() => setMovies([])}>Delete all</button>
       </div>
        <div className="container-grid">
        {movies.map((element =>  {
          const {id,  image, title, year} = element;
          const movieReviewObject = reviews.find(item => item.id === id);
          const reviewArray = movieReviewObject.reviews;
          const firstReview = reviewArray[reviewIndex % reviewArray.length];

          
        return(<div className="movie_container" key={id}>
         
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
           <button className="btn body_20_bold" onClick={() => removeMovie(id)}>Delete from the list</button>
            </div>
              
           
        );

        }))}
    
       </div>
      </div>
 
  )

}

export default App;
