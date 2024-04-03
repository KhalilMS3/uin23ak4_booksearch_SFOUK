import React, { useState } from 'react'

export default function Layout({children, setQuery}) {
  
  const [search, setSearch] = useState("")
  const [userInput, setUserInput] = useState("")
  const [dataFetched, setDataFetched] = useState(false)
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(search !== "james+bond"){
      setUserInput(search)
    }else{
      setUserInput("")
    }
    setQuery(search)
    setDataFetched(true)
  }


  const handleChange = (event)=>{
    if (event.target.value.length >= 3){
      setSearch(event.target.value)
    }else{
      setSearch('james+bond')
    }
   
  }
 

  return (
    <>
      <div id="container">
        <header>
            <img className='logo' src="./src/assets/Logo.svg" alt="BookSeekr logo" />
            <form onSubmit={handleSubmit}>
                <input className='search-bar' type="text" placeholder='Book name...' onChange={handleChange}/>
                <button className='search-btn' type="submit">Search</button>
            </form>
        </header>
        <main>
          {
            dataFetched === false || userInput === "" ? <h1>Make a search</h1> : <h1>Search results of: {userInput}</h1>
          }
          <section className='books-section'>
            
          {children}
          </section>
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
