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
            <div>
              <p>{title}</p>
            </div>

            <div>
              <p>{year}</p>
            </div>

            <div>
              <p>{name}</p>
            </div>

             <div>
              <p>{review}</p>
            </div>
            </div>

            </div>
            </div>);
        }))}
      </div>
 
  )

}

export default App;
