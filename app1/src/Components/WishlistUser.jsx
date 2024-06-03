import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get('https://bookify-new.onrender.com/api/v1/wishlist', {
        headers: {
          token: token,
        }
      });
      setWishlist(response.data.wishlist);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response ? error.response.data.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };
  const removeFromWishlist = async (bookId) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.delete(`https://bookify-new.onrender.com/api/v1/wishlist/${bookId}`, {
        headers: {
          token: token,
          'Content-Type': 'application/json'
        }
      });
      setMessage(response.data.message);
      // Refresh the wishlist after removing the book
      fetchWishlist();
    } catch (error) {
      setMessage(error.response ? error.response.data.message : 'An error occurred');
    }
  };

  return (
    <div>
      <h1>Your Wishlist</h1>
      {message && <div>{message}</div>}
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {wishlist.map(book => (
            <li key={book._id}>
              <Link to={`/book/${book._id}`}>
                <img src={book.imgCover} alt={book.title} style={{ width: '50px', height: '75px' }} />
                <span>{book.title}</span>
              </Link>
              <button onClick={() => removeFromWishlist(book._id)} className="small-button" >Remove from Wishlist</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

 

export default Wishlist;
