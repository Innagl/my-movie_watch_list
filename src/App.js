import { useState } from "react";
import { data } from "./data";
import './App.css'; 

function App() {
  const [movies, setMovies] = useState(data);
  console.log(data);


  return(
    <div>
      <h1>list of {movies.length} movies</h1>
    
        {movies.map((element =>  {
          const {id,  image, title, year, name, review} = element;

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
            <div>
              <p className="body_16_bold">{name}</p>
            </div>

             <div>
              <p>{review}</p>
            </div>
            </div>
            </div>
           <button className="delete_btn body_20_bold">Delete from the list</button>
            </div>
              
            </div>);
        }))}
      </div>
 
  )

}

export default App;
