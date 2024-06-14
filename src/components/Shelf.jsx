import React from 'react'
import { Link } from 'react-router-dom';

const Shelf = () => {
  //get the books whatever we added
  const storedBooks = JSON.parse(localStorage.getItem('shelfBooks')) || [];
  return (
    <div>
      <h3 className='text-white text-center pt-4'>My Bookshelf</h3>
      <Link className='btn btn-secondary home' to="/">🏚️ Home</Link>
      {storedBooks.length === 0 ? <h4 className='text-center text-white mt-5'>Shelf is Empty 😔</h4> :
        <div className='shelf-container  gap-5 d-flex flex-wrap align-items-center justify-content-center pt-5 wrap'>
          {storedBooks.map((item, index) => (
            <div key={index} className="card p-3" style={{ width: '19rem', height: '18rem', borderRadius: '20px' }}>
              <div className="card-body text-white">
                <h5 className="card-title">Book : {item.title}</h5>
                <p className="card-text">Author 🖊️ : {item.author_name}</p>
                <p className="card-text">Edition :{item.edition_count}</p>
                <p className="card-text">Ratings ⭐ :{Math.floor(item.ratings_average ? item.ratings_average : "")}</p>
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  )
}

export default Shelf