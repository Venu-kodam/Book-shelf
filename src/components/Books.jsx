import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Book from './Book'
const Books = ({ search }) => {
    const [book, Setbook] = useState([])
    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get(`https://openlibrary.org/search.json?q=${search}&limit=10&page=1`);
                const books = response.data.docs;
                Setbook(books)
                console.log(book);
            } catch (error) {
                console.error(error);
            }
        }
        getUser()
    }, [book])
    return (
        <div className='books  d-flex align-items-center justify-content-center flex-wrap gap-4'>
            {book.map((book, index) => (
                <div key={index}>
                    <Book book={book}/>
                </div>
            ))}
            
        </div>
    )
}

export default Books