import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Authors() {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getAuthors() {
    setLoading(true);
    try {
      const response = await axios.get(`https://bookify-new.onrender.com/api/v1/author?page=2`);
      console.log('Response data:', response.data);
      if (response.data && response.data.authors && response.data.authors.length > 0) {
        setAuthors(response.data.authors); // Set all authors from the array
      } else {
        console.error('Authors array is empty or undefined');
      }
    } catch (error) {
      console.error('Error fetching authors:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAuthors();
  }, []);

  return (
    <div className='container'>
      <h2 className='my-3'>All Authors</h2>
      {loading ? (
        <h1 className='text-center my-2'>Loading...</h1>
      ) : (
        <div className='row'>
          {authors.map(authors => (
            <div key={authors.id} className='col-md-3 mb-3'>
              <div className='card h-100'>
                <Link to={ "/Author/"+authors.id}> {/* Ensure the path matches your route */}
                  <img src={authors.image} className='card-img-top' alt='' />
                </Link>
                <div className='card-body'>
                  <h5 className='card-title'>{authors.name}</h5>
                  <p className='card-text line-clamp-4'>{authors.brief}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
