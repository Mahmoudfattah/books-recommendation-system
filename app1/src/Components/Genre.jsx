import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Rings } from 'react-loader-spinner'; // Import the Rings spinner

export default function Genre() {
    const { id } = useParams(); // Retrieve the genre ID from the URL
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    async function getBooksForGenre() {
        if (!id) {
            setErrorMessage('Genre ID not found.');
            return;
        }

        setLoading(true);
        try {
            const response = await axios.get(`https://bookify-new.onrender.com/api/v1/genre/${id}/book`);
            console.log('Response data:', response.data);
            setBooks(response.data.books);
        } catch (error) {
            console.error('Error fetching books for genre:', error);
            setErrorMessage('Error fetching books for genre.');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getBooksForGenre();
    }, [id]);

    const truncateText = (text, length) => {
        if (text.length <= length) return text;
        return text.substring(0, length) + '...';
    };

    return (
        <section style={{ backgroundColor: '#eee' }}>
            <div className="container py-5">
                <div className="row">
                    {loading ? (
                        <div className='d-flex justify-content-center my-5'>
                            <Rings
                                height="80"
                                width="80"
                                color="#3498db"
                                radius="6"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                ariaLabel="rings-loading"
                            />
                        </div>
                    ) : errorMessage ? (
                        <h1 className='text-center my-2'>{errorMessage}</h1>
                    ) : (
                        books.map(book => (
                            <div key={book.id} className="col-lg-3 col-md-6 mb-4">
                                <div className="card h-100">
                                    <Link to={"/books/" + book.id} className="card-body text-center">
                                        <img
                                            src={book.imgCover}
                                            alt={book.title}
                                            className="w-100 mb-3"
                                            style={{ height: '200px', objectFit: 'cover' }}
                                        />
                                        <h5 className="card-title">{truncateText(book.title, 20)}</h5>
                                        <p className="card-text">{truncateText(book.description, 100)}</p>
                                        <div className="card-body d-flex align-items-center justify-content-center">
                                            <i className="fa-solid fa-globe mr-4 rating-color"></i> Visit website
                                        </div>
                                        <div className='product-box d-flex justify-content-between align-items-center mt-auto'>
                                            <span>{book.rateCount} <i className='fa-solid fa-star rating-color'></i></span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}
