import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { InfinitySpin } from 'react-loader-spinner';

export default function FeaturedBooks() {
  const [booksArr, setBooksArr] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getBooks() {
    setLoading(true);
    try {
      const response = await axios.get('https://bookify-new.onrender.com/api/v1/book');
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

  // Clone books to make the slider continuous
  const booksToDisplay = [...booksArr, ...booksArr];

  return (
    <div className='container'>
      <h1 className='my-3 text-center'>Featured Books</h1>
      <div className='slider'>
        <div className='slider-content'>
          {loading ? (
            <div className='text-center my-5'>
              <InfinitySpin
                visible={true}
                width='200'
                color='#4fa94d'
                ariaLabel='infinity-spin-loading'
              />
            </div>
          ) : (
            booksToDisplay.map((book, index) => (
              <div key={index} className='slider-item'>
                <div className='books p-3 cursor-pointer'>
                  <Link to={'/books/' + book.id} className='books'>
                    <img src={book.imgCover} alt={book.title} />
                  </Link>
                  <div className='col-md-8 '>
                    <p className='mb-0'>{book.title.split(' ').slice(0, 2).join(' ')}</p>
                    <p className='mb-0'>{book.slug}</p>
                    <Link to={'/books/' + book.id} className='books'>
                      <button className='btn bg-main text-white mt-2'>Read Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
