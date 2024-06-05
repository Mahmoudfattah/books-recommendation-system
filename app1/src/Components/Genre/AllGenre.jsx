import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { InfinitySpin } from 'react-loader-spinner';
export default function AllGenre() {
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function getGenres() {
        setLoading(true);
        try {
            const response = await axios.get(`https://bookify-new.onrender.com/api/v1/genre`);
            console.log('Response data:', response.data);
            if (response.data && response.data.genre && response.data.genre.length > 0) {
                setGenres(response.data.genre); // Set all genres from the array
            } else {
                console.error('Genres array is empty or undefined');
            }
        } catch (error) {
            console.error('Error fetching genres:', error);
        } finally {
            setLoading(false);
        }
    }
    
    useEffect(() => {
        getGenres();
    }, []);

    return (
        <div className='container'>
            <h1 className='my-3'>All Genres</h1>
            {loading ? (
                <div className='text-center my-5'>
                <InfinitySpin
                    visible={true}
                    width="200"
                    color='rgba(9, 116, 115, 1)'
                    ariaLabel="infinity-spin-loading"
                />
            </div>
            ) : (
                <div className='row'>
                    {genres.map(genre => (
                        <div key={genre._id} className='col-md-4 mb-3'>
                            <Link to={"/Genre/" + genre._id} className='card h-100'>
                                <img src={genre.image} className='card-img-top' alt='' />
                                <div className='card-body'>
                                    <h5 className='card-title'>{genre.name}</h5>
                                    <p className='card-text'>{genre.slug}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
