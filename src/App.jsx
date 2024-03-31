import './App.css'
import './Style/main.scss'
import Layout from './Components/Layout'
import BookCard from './Components/BookCard'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [book, setBook] = useState([])
  const [query, setQuery] = useState("james+bond")

  const getData = async()=>{
    try{
      const response = await fetch (`https://openlibrary.org/search.json?title=${query}&limit=20`)
      const data = await response.json()
      setBook(data.docs)
    }catch{
      console.error("A problem has occured with API")
    }
  }


  useEffect(()=>{
    getData()
  },[query])


  return (
    <>
      <Layout setQuery={setQuery}>
          <BookCard book={book} />
      </Layout>
    </>
  )
}

export default App
