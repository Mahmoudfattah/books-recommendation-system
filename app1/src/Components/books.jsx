
import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Books() {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getBook();
  }, [navigate]); // Add navigate to the dependencies array to trigger effect when navigate changes

  async function getBook() {
    setLoading(true);
    try {
      const response = await axios.get(`https://bookify-new.onrender.com/api/v1/book/${id}`);
      setBook(response.data.book);
    } catch (error) {
      console.error('Error fetching book:', error);
    } finally {
      setLoading(false);
    }
  }
  const [bookId, setBookId] = useState('');
    const [message, setMessage] = useState('');
  const AddToWishlist = () => {
    console.log(id)

    
       
        const token = localStorage.getItem("token");
        try {
            const response =  axios.patch('https://bookify-new.onrender.com/api/v1/wishlist', {
                book: id
            }, {
                headers: {
                    token:token,
                    'Content-Type': 'application/json'
                }
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response ? error.response.data.message : 'An error occurred');
        }
    
  }
  
  async function handleUpdateStatus(status) {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Token not found");
        return;
      }

      const response = await axios.patch(
        `https://bookify-new.onrender.com/api/v1/auth/updateStatus/${id}`,
        { status },
        {
          headers: {
            token: token,
          },
        }
      );
      console.log('Update status response:', response.data);

      if (status === "read") {
        // If status is "read", navigate to Comment Page
        navigate(`/Comment/${id}`);
      
    } else if (status === "not_read") {
      // If status is "not_read", navigate to home page
      navigate('/');
    }
      
    } catch (error) {
      console.error('Error updating status:', error);
    } finally {
      setLoading(false);
    }
  }
  const[loved,setloved]=useState(false)
  console.log(book)

  return (
    <section style={{ backgroundColor: '#eee' }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                {loading ? (
                  <h1 className='text-center my-2'>Loading...</h1>
                ) : (
                  <img
                    src={book.imgCover}
                    alt={book.title}
                    className="w-75"
                    style={{ width: '100px' }}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h4>{book.title}</h4>
                  <p>{book.description}</p>
                  <p>{book.bookContent}</p>
                  <p className='fw-bolder'>{book.author ? book.author.name : ''}</p>
                </div>
                <div className='product-box d-flex justify-content-between align-items-center mt-auto'>
                  <div>
                    <span>{book.rateCount} <i className='fa-solid fa-star rating-color'></i></span>
                    
                    <button onClick={() => {
                      AddToWishlist()
                      setloved(true)
                    }} className="btn-fav">   
                    <span><i className={`fa-solid ${loved&&"fav-color"} fa-heart `}></i></span>
                    </button>
                  </div>
                  
                  <div className="d-flex justify-content-start">
                    <button
                      onClick={() => handleUpdateStatus("not_read")}
                      className="btn bg-main2 form-control text-white me-2"
                    >
                      Not Read
                    </button>
                    <button
                      onClick={() => handleUpdateStatus("reading")}
                      className="btn bg-main2 form-control text-white me-2"
                    >
                      Reading
                    </button>
                    <button
                      onClick={() => handleUpdateStatus("read")}
                      className="btn bg-main2 form-control text-white me-2"
                    >
                      Read
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card p-2" style={{ backgroundColor: '#eee' }}>
            <div className="card-body p-3">
              {/* Render reviews */}
              {book.myReviews && book.myReviews.map(review => (
                <div key={review.createdAt} className="review-item">
                  <p className="review-text">{review.text}</p>
                  <p className="review-user">- {review.user.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
