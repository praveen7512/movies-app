import React, { useState } from 'react'
import './SearchBar.css'






function SearchBar(props) {

    const [searchBar, setSearchData] = useState("")

    props.sendData(searchBar)

  return (
    <div className='SearchPage'>
     <input type="text" className='SearchBar'
      onChange={(e)=>{
              setSearchData(e.target.value)
      }} 
      
      value={searchBar}
     
     
     
     
     ></input>
     <button>Search</button>
    </div>
  )
}

export default SearchBar