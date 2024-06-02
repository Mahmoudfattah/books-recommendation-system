import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image4 from '../assets/images/4.jpg';
import { InfinitySpin } from 'react-loader-spinner';

export default function FeaturedBooks() {
  const [booksArr, setBooksArr] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 4; // Number of books to display per page

  async function getBooks() {
    setLoading(true);
    try {
      const response = await axios.get(`https://bookify-new.onrender.com/api/v1/book`);
      console.log('Response data:', response.data);
      setBooksArr(response.data.books.slice(0, 8));
    } catch (error) {
      console.error('Error fetching books:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getBooks();
  }, []);

  // Logic for displaying books
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = booksArr.slice(indexOfFirstBook, indexOfLastBook);

  // Logic for pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (

    <div className='container'>
      
    <h1 className='my-3 text-center'>Featured Books</h1>
    <div className='row justify-content-center'>
      {loading ? (
        <div className='text-center my-5'>
    <InfinitySpin
      visible={true}
      width="200"
      color="#4fa94d"
      ariaLabel="infinity-spin-loading"
    />
  </div>
       
      ) : (
        currentBooks.map((books) => (
          <div key={books.id} className='col-md-3 mb-3'>
            <div className='books p-3 cursor-pointer'>
              <Link to={"/books/" + books.id} className='books'>
                <img src={books.imgCover} className='w-75' alt='' />
                {/* <img src={image4} className='w-100'/> */}
              </Link>
              <div className='col-md-8 '>
                <p className='mb-0'>{books.title.split(" ").slice(0, 2).join(" ")}</p>
                <p className='mb-0'>{books.slug}</p>
                <Link to={"/books/" + books.id} className='books'>
                  <button className='btn bg-main text-white mt-2 '>Read Now</button>
                </Link>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
    <nav>
      <ul className='pagination justify-content-center'>
        {[...Array(Math.ceil(booksArr.length / booksPerPage)).keys()].map((number) => (
          <li key={number} className='page-item'>
            <button onClick={() => paginate(number + 1)} className='page-link'>
              {number + 1}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  </div>

  );
}
