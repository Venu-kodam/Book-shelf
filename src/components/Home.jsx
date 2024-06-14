import React, { useState } from 'react'
import Books from './Books'
import { Link } from 'react-router-dom'

const Home = () => {
    const [search, setSearch] = useState("")
    const [submittedValue, setSubmittedValue] = useState("")
    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedValue(search)
        setSearch('')  //reset the value entered in input
    }
    return (
        <div className='container'>
            <h2 className='text-center text-white p-4'>Book Shelf</h2>
            <div className='input-item row flex-wrap justify-content-center align-items-center gap-3'>
                <form className='input-box d-flex align-items-center justify-space-between col-7 col col-sm-8 col-md-10 col-lg-10' onSubmit={handleSubmit}>
                    <input type='text' value={search} onChange={handleSearch} placeholder='Type your Book name here' />
                    <button type='submit' className='search bg-transparent fs-5'><i className="bi bi-search fs-4"></i></button>
                </form>
                <Link className='btn btn-secondary shelf mt-4 mt-sm-0 col-5 col-sm-4 col-md-2 col-lg-2' to="/shelf">My Book Shelf</Link>
            </div>

            <hr className='my-5 text-white' />
            {submittedValue == '' ? <h4 className='findmed text-white text-center'>Here is your Books</h4> : <Books search={submittedValue} />}
        </div>
    )
}

export default Home