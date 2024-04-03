import './App.css'
import './Style/main.scss'
import Layout from './Components/Layout'
import BookCard from './Components/BookCard'
import BookSearch from './Components/BookSearch'
import { useEffect, useState } from 'react'


function App() {
  const [book, setBook] = useState([])
  const [query, setQuery] = useState("james+bond")

  const getData = async()=>{
    try{
      const fields = "title, author_name, cover_edition_key, first_publish_year, ratings_average, id_amazon"
      const response = await fetch (`https://openlibrary.org/search.json?title=${query}&limit=20&fields=${fields}`)
      const data = await response.json()
      setBook(data.docs)
    }catch{
      console.error("A problem has occured with API", error)
    }
  }



  useEffect(()=>{
    getData()
  },[query])


  return (
    <>
      <Layout setQuery={setQuery}>
          <BookSearch book={book} />
      </Layout>
    </>
  )
}

export default App
