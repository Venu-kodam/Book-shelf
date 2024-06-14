import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../Redux/bookSlice'
import { toast } from 'react-toastify'
const Book = ({ book }) => {
    const [bookitem, setBookitem] = useState(book);
    const { Book } = useSelector(state => state)
    const dispatch = useDispatch()
    const addToShelf = (book) => {
        dispatch(add(book))
        toast.success('Book added', {
            position: 'bottom-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true
        })
        // to store the card data in localStorage
        let storedBooks = JSON.parse(localStorage.getItem('shelfBooks')) || [];
        storedBooks.push(book);
        localStorage.setItem('shelfBooks', JSON.stringify(storedBooks));
    }
    

    useEffect(() => {
        localStorage.setItem("book", JSON.stringify(bookitem));
    }, [bookitem]);
    return (
        <div className="card p-3" style={{ width: '19rem', height: '22rem', borderRadius: '20px' }}>
            <div className="card-body text-white">
                <h5 className="card-title">Book : {book.title}</h5>
                <p className="card-text">Author 🖊️ : {book.author_name}</p>
                <p className="card-text">Edition :{book.edition_count}</p>
                <p className="card-text">Ratings ⭐ :{Math.floor(book.ratings_average ? book.ratings_average : "")}</p>
            </div>
            <div className="card-footer ">
                <button type='button' className='add d-block btn  mx-auto' onClick={() => addToShelf(book)}>Add to Book Shelf ❤️</button>
            </div>
        </div>
    )
}

export default Book