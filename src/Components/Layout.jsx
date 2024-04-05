
import { useState } from 'react'
import Header from './Header'

export default function Layout({children, setQuery, dataFetched, setDataFetched, dataLoadedMsg, setDataLoadedMsg}) {
  
    const [userInput, setUserInput] = useState("")

    const resetSearch = ()=>{
      setQuery("james bond")
      setUserInput("")
      setDataLoadedMsg("")
    }
  return (
    <>
      <div id="container">
       <Header setQuery={setQuery} setDataFetched={setDataFetched} setUserInput={setUserInput}/>
        <main>
          {
            userInput === "" 
            ? 
            <h1>Make a search</h1> 
            : 
            <>
            <section className="search-info-section">
              <h1>Search results of: {userInput}</h1>
              <button onClick={resetSearch}>Reset Search</button> 
            </section>
            </>
          }
          {
            dataFetched === false
            ?
            <h2>{dataLoadedMsg}</h2>
            :
            <section className='books-section'>           
            {children}
            </section>
          }
         
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
