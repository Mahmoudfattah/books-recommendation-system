// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Add import statement for axios
// import { Link } from 'react-router-dom';
// import image4 from '../assets/images/4.jpg';
// import { useParams } from 'react-router-dom';

// export default function Books() {
//   const [book, setBook] = useState({});
//   const [loading, setLoading] = useState(false);
//   const id = useParams().id;
//   async function getBook() {
//     setLoading(true);
//     try {
//       const response = await axios.get(`https://bookify-new.onrender.com/api/v1/book/${id}`);
//       console.log('Response data:', response.data);
//       setBook(response.data.book);
//     } catch (error) {
//       console.error('Error fetching books:', error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     getBook();
//   }, []);

//   //   return (
//   //     <section style={{ backgroundColor: '#eee' }}>
//   //       <div className="container py-5">
//   //         <div className="row">
//   //           <div className="col-lg-4">
//   //             <div className="card mb-4">
//   //               <div className="card-body text-center">
//   //                 {loading ? (
//   //                   <h1 className='text-center my-2'>Loading...</h1>
//   //                 ) : (
//   //                   <img
//   //                     src={image4}
//   //                     alt=''
//   //                     className="w-100"
//   //                     style={{ width: '150px' }}
//   //                   />
//   //                 )}
//   //               </div>
//   //             </div>
//   //           </div>

//   //           <div className="col-lg-8">
//   //             <div className="card mb-4">
//   //               <div className="card-body">
//   //                 <p>{book.title}</p>
//   //                 <p>{book.description}</p>
//   //                 {/* <p>{book.genre}</p> */}
//   //                 <p>{book.language}</p>
//   //                 <p>{book.myReviews}</p>
//   //                 <p>{book.bookContent}</p>
//   //                 <p className='fw-bolder'>{book.author?book.author.name:''}</p>
//   //                 <div className='product-box d-flex justify-content-between align-items-center'>
//   //                   <span>{book.rateCount} <i className='fa-solid fa-star rating-color'></i></span>
//   //                   <div className="d-flex justify-content-start">
//   //                     <Link to='/'>
//   //                       <button className='btn bg-main form-control text-white me-2'>Not Read</button>
//   //                     </Link>
//   //                     <Link to='/'>
//   //                       <button className='btn bg-main form-control text-white me-2'>Reading</button>
//   //                     </Link>
//   //                     <Link to='/ProfilePage'>
//   //                       <button className='btn bg-main form-control text-white'>Read</button>
//   //                     </Link>
//   //                   </div>
//   //                 </div>
//   //               </div>
//   //             </div>
//   //           </div>

//   //           <div className="card">
//   //             <div className="card-body p-0">
//   //               <ul className="list-group list-group-flush rounded-3">
//   //                 <li className="list-group-item d-flex justify-content-between align-items-center p-3">
//   //                   <i className="fas fa-globe fa-lg text-warning"></i>
//   //                   <span>{book.genre}</span>
//   //                 </li>
//   //                 {/* Add other list items here */}
//   //               </ul>
//   //             </div>
//   //           </div>
//   //         </div>
//   //       </div>
//   //     </section>
//   //   );
//   // }
//   return (
//     <section style={{ backgroundColor: '#eee' }}>
//       <div className="container py-5">
//         <div className="row">
//           <div className="col-lg-4">
//             <div className="card mb-4">
//               <div className="card-body2 text-center">
//                 {loading ? (
//                   <h1 className='text-center my-2'>Loading...</h1>
//                 ) : (
//                   <img
//                     src={book.imgCover}
//                     alt={book.title}
//                     className="w-75"
//                     style={{ width: '100px' }}
//                   />
//                 )}
//               </div>
//             </div>
//           </div>




//           <div className="col-lg-8">
//             <div className="card mb-4">
//               <div className="card-body d-flex flex-column justify-content-between">
//                 <div>
//                   <h4>{book.title}</h4>
//                   <p>{book.description}</p>
//                   {/* <a href={book.bookContent} target="_blank" rel="noopener noreferrer">
//   <p>{book.bookContent}</p>
// </a> */}
//                   <p>{book.bookContent}</p>

//                   <p className='fw-bolder'>{book.author ? book.author.name : ''}</p>
//                 </div>

//                 <div className='product-box d-flex justify-content-between align-items-center mt-auto'>
//                   <div>
//                     <span>{book.rateCount} <i className='fa-solid fa-star rating-color'></i></span>
//                   </div>

//                   <div className="d-flex justify-content-start">
//                     <Link to='/'>
//                       <button className='btn bg-main2 form-control text-white me-2'>Not read</button>
//                     </Link>
//                     <Link to='/'>
//                       <button className='btn bg-main2 form-control text-white me-2'>reading</button>
//                     </Link>
//                     <Link to='/Comment'>
//                       <button className='btn bg-main2 form-control text-white'>read</button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="card p-2" style={{ backgroundColor: '#eee' }}>
//             <div className="card-body p-3" > {/* Add padding around the card body */}
//               {/* Render reviews */}
//               {book.myReviews && book.myReviews.map(review => (
//                 <div key={review.createdAt} className="review-item">
//                   <p className="review-text">{review.text}</p>
//                   {/* Render the user's name */}
//                   <p className="review-user">- {review.user.name}</p>
//                 </div>
//               ))}
//             </div>
//           </div>







//         </div>
//       </div>
//     </section>
//   );

// }
import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { useNavigate, useParams } from 'react-router-dom'; // Import useParams from react-router-dom

export default function Books() {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams(); // Destructure id from useParams

  useEffect(() => {
    getBook();
  }, []);
 // Add navigate to the dependencies array to trigger effect when navigate changes

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

  async function handleUpdateStatus() {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        // Handle case where token is not available
        console.error('Token not found');
        return;
      }
  
      const response = await axios.patch(
        'https://bookify-new.onrender.com/api/v1/auth/updateStatus',
        { bookId: id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('Update status response:', response.data);
      getBook(); // Update book data after status update
      navigate('/Comment');
    } catch (error) {
      console.error('Error updating status:', error);
    } finally {
      setLoading(false);
    }
  }
  

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
                  </div>
                  <div className="d-flex justify-content-start">
                    <button className='btn bg-main2 form-control text-white me-2'>Not Read</button>
                    <button className='btn bg-main2 form-control text-white me-2'>Reading</button>
                    <button className='btn bg-main2 form-control text-white' onClick={handleUpdateStatus}>Read</button>
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
