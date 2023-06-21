import React from 'react'
const Book = ({ Title, Author, DateReleased }) => {
    return (
        <div>
            <h3> Book Title: {Title} </h3>
            <h4> Name: {Author} </h4>
            <p>Year: {DateReleased} </p>
        </div>
    )
}

const Books = () => {
  return (
      <div>
          <Book
              Title="things fall apart"
              Author="chinua archebe"
              DateReleased= "1984"
          />
                   <Book
              Title="our husband has gone mad again"
              Author="kwamw akufo"
              DateReleased= "1994"
          />
                   <Book
              Title="Joys of motherhood"
              Author="akerele taiwo"
              DateReleased= "1999"
         />
    </div>
  )
}

export default Books