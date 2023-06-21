import React from 'react'

const Book= ({ book }) => {
  return (
      <div>
          <h2>Title: {book.title} </h2>
    </div>
  )
}
const Booklists = () => {
    const books = [
        { id: 1, title: "sugar girl" },
        { id: 2, title: "drummer boy" },
        { id: 3, title: " our husband has gone mad again" },
        { id: 4, title: "our wives has gone mad again" },
        { id: 5, title: "another one"},
        
    ]
    return (
        <div>
            <h3>Bestselling books</h3>
            {books.map((book) => {
                return <Book key= {book.id} book = {book}/>
            })}
        </div>
    )
}

export default Booklists 