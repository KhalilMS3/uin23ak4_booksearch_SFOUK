import React from 'react'
import BookCard from './BookCard'

export default function BookSearch({book}) {
  return (
    book?.map((item, index) => 
        <BookCard 
            key={index}
            cover_edition_key={item.cover_edition_key}
            title={item.title}
            author_name={item.author_name[0]}
            first_publish_year={item.first_publish_year}
            ratings_average={item.ratings_average}
            id_amazon={item.id_amazon}
        />
    )
  )
}
