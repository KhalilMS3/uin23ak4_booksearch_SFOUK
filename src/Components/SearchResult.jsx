import React, { useEffect, useState } from 'react'
import BookCard from './BookCard'

export default function SearchResult({book}) {

  const [amazonIdExist, setAmazonIdExist] = useState(false)


  useEffect(()=>{
    /* 
    * Check if the id is defined and not a an empty string
    * By this we avoid the following:
      - Undefined arrays
      - Empty elements
    */

    const hasValidAmazonId = book.some(item => item.id_amazon?.some(id => id && id !== ""))
    setAmazonIdExist(hasValidAmazonId)
    
  }, [book])
  return (

  book?.map((item, index) => {
      const firstNonEmptyId = item.id_amazon?.find(id => id && id !== "");

      return(
        <BookCard 
        key={index}
        cover_edition_key={item.cover_edition_key}
        title={item.title}
        author_name={item.author_name?.[0]}
        first_publish_year={item.first_publish_year}
        ratings_average={item.ratings_average}
        id_amazon={firstNonEmptyId || "No amazon id"}
        amazonIdExist={amazonIdExist}
        />
        )
    })
  )
}
  