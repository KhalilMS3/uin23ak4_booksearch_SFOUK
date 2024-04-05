import React, { useState } from 'react'

export default function Header({setQuery, setDataFetched, setUserInput}) {
    const [search, setSearch] = useState("")

    
    const handleSubmit = (e) =>{
    e.preventDefault()
    
    if(search !== "james+bond"){
      setUserInput(search)
      setDataFetched(false)
    }else{
      setUserInput("")
    }
    setQuery(search)
}

    const handleChange = (event)=>{
    if (event.target.value.length >= 3){
        setSearch(event.target.value)
        
    }
    else{
        setSearch('james+bond')
    }
}
    return (
        <header>
            <img className='logo' src="./src/assets/Logo.svg" alt="BookSeekr logo" />
            <form onSubmit={handleSubmit}>
                <input className='search-bar' type="text" placeholder='Book name...' onChange={handleChange}/>
                <button className='search-btn' type="submit">Search</button>
            </form>
        </header>
)
}
