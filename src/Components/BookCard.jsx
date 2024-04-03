import React from 'react'

export default function BookCard({key, cover_edition_key, title, author_name, first_publish_year, ratings_average, id_amazon}) {

  
  return (
    <>
    
      <article key={key}>
          <img src={`https://covers.openlibrary.org/b/olid/${cover_edition_key}.jpg`} alt={title}/>
          <h2>{title}</h2>
          <p>{author_name}</p>
          <div className='book-subInfo'>
            <span>{first_publish_year} 📅</span>
            <span>{typeof ratings_average === 'number' ? ratings_average.toFixed(1) : "N/A"} ⭐</span>
          </div>
            <a href={`https://www.amazon.com/s?k=${id_amazon}`}>Get Book</a>
      </article>

    </>
  )
}
/*

          {
            Array.isArray(item.id_amazon) && item.id_amazon.length > 0 ?
            <a href={`https://www.amazon.com/s?k=${item.id_amazon}`}>Get Book</a>
            :
            <a href="#">Book not available</a>
          }

*/