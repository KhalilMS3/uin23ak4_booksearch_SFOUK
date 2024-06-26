import './App.css'
import './Style/main.scss'
import Layout from './Components/Layout'
import SearchResult from './Components/SearchResult'
import { useEffect, useState } from 'react'


function App() {
  const [book, setBook] = useState([])
  const [query, setQuery] = useState("james bond")
  const [dataLoadedMsg, setDataLoadedMsg] = useState("")
  const [dataFetched, setDataFetched] = useState()

  const getData = async()=>{
    try{
      const fields = "title, author_name, cover_edition_key, first_publish_year, ratings_average, id_amazon"
      const response = await fetch (`https://openlibrary.org/search.json?title=${query}&limit=21&fields=${fields}`)
      const data = await response.json()
      
      if(data.docs === null || data.docs.length === 0){
        setDataLoadedMsg("No result found 😔")
        setDataFetched(false)
        console.log(dataFetched)
      }else{
        setBook(data.docs)
        setDataFetched(true)
        console.log(data.docs)
      }
    }catch{
      console.error("A problem has occured with API", error)
    }
  }



  useEffect(()=>{
    getData()
  },[query])


  return (
    <>
      <Layout setQuery={setQuery} dataFetched={dataFetched} setDataFetched={setDataFetched} dataLoadedMsg={dataLoadedMsg} setDataLoadedMsg={setDataLoadedMsg}>
          <SearchResult book={book} />
      </Layout>
    </>
  )
}

export default App
