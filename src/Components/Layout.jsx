import React, { useState } from 'react'

export default function Layout() {
  const [search, setSearch] = useState("")
  
  const handleSubmit = (e) =>{
    e.preventDefault()
  }

  const handleChange = (event)=>{
    setSearch(event.target.value)
  }

  const print = () =>{
    console.log(search)
}
  return (
    <header>
        <img className='logo' src="./src/assets/Logo.svg" alt="BookSeekr logo" />
       <form onSubmit={handleSubmit}>
        <input className='search-bar' type="text" placeholder='Book name...' onChange={handleChange}/>
        <input className='search-btn' type="submit" value="Search" onClick={print}/>
       </form>
    </header>
  )
}
