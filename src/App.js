import './App.css';
import axios from "axios";
import { useState } from 'react';
import {useEffect} from "react"
import MovieCard from './components/MovieCard';
import SearchBar from './components/SearchBar';
import './components/SearchBar.css'

function App() {    


  const [listData , setData] = useState([]);
  
  




    const getData = async () => {

    const res = await axios.get("https://movies-app.prakashsakari.repl.co/api/movies") 

    const data = res.data

    setData(data)
  }


  useEffect(
  
    () => {
      getData()
    }
    
    ,[])

return (
   
    
   <div className="main-containerFirst ">

   
  
<div className="main">
     
   
     {listData.map(post => (
       <MovieCard key={post.id} movies={post}/>
       
     ))}
   
 
  </div>
   </div>
  





  
)
 

  




  
}

export default App;











