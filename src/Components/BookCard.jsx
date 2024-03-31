import React from 'react'

export default function BookCard({book}) {
  return (
    <>
    <section className='books-section'>
      {
      book?.map(item =>
      <article>
          <img src={`https://covers.openlibrary.org/b/olid/${item.cover_edition_key}.jpg`} alt={item.title}/>
          <h2>{item.title}</h2>
          <p>{item.author_name}</p>
          <div className='book-subInfo'>
            <span>{item.first_publish_year} 📅</span>
            <span>{item.ratings_average} ⭐</span>
          </div>
          <a href="#">Get Book</a>
      </article>)
    }
    </section>
    </>
  )
}
