import React, { useState } from 'react'

export default function Layout({children}) {
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
    <>
      <div id="container">
        <header>
            <img className='logo' src="./src/assets/Logo.svg" alt="BookSeekr logo" />
            <form onSubmit={handleSubmit}>
              <input className='search-bar' type="text" placeholder='Book name...' onChange={handleChange}/>
              <button className='search-btn' type="submit"  onClick={print}>Search</button>
            </form>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <p>
            BookSeekr use <a href="https://openlibrary.org/developers/api">OpenLibrary</a> API to retrieve books you search for
          </p>
          <p>Copyright MovieSeekr 2024 ©</p>
        </footer>
      </div>
    </>
  )
}
