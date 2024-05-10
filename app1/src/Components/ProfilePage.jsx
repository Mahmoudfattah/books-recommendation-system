// import React, { useState } from 'react';
// import axios from 'axios';

// const ProfilePage = () => {
//   const [user, setUser] = useState({
//     name: '',
//     email: '',
//     age: '',
//     userImage: null,
//   });
//   const [loading, setLoading] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     setUser({ ...user, userImage: e.target.files[0] });
//   };

//   const handleUploadImage = async () => {
//     setLoading(true);
//     try {
//       const formData = new FormData();
//       formData.append('image', user.userImage);
//       const response = await axios.post(
//         'https://bookify-new.onrender.com/api/v1/userImage',
//         formData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         }
//       );
//       console.log('Image uploaded successfully:', response.data);
//       // You can update user data or handle success message here
//     } catch (error) {
//       console.error('Error uploading image:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDeleteImage = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.delete(
//         'https://bookify-new.onrender.com/api/v1/userImage/deleteImage'
//       );
//       console.log('Image deleted successfully:', response.data);
//       // You can update user data or handle success message here
//     } catch (error) {
//       console.error('Error deleting image:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Profile Page</h1>
//       <div>
//         <h2>User Information</h2>
//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={user.email}
//           onChange={handleInputChange}
//         />
//         <br />
//         <label>Name:</label>
//         <input
//           type="text"
//           name="name"
//           value={user.name}
//           onChange={handleInputChange}
//         />
//         <br />
//         <label>Age:</label>
//         <input
//           type="number"
//           name="age"
//           value={user.age}
//           onChange={handleInputChange}
//         />
//         <br />
//         <h2>Profile Photo</h2>
//         {user.userImage ? (
//           <div>
//             <img
//               src={URL.createObjectURL(user.userImage)}
//               alt="Profile"
//               style={{ width: '200px', height: '200px' }}
//             />
//             <br />
//             <button onClick={handleDeleteImage} disabled={loading}>
//               {loading ? 'Deleting...' : 'Delete Image'}
//             </button>
//           </div>
//         ) : (
//           <div>
//             <input type="file" onChange={handleImageChange} />
//             <br />
//             <button onClick={handleUploadImage} disabled={loading}>
//               {loading ? 'Uploading...' : 'Upload Image'}
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {
  const { state } = useLocation();
  const token = state?.token;
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: 'Mahmoud Fattah',
    email: 'example@example.com',
    age: 30,
    userImage: null,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/LogIn');
    }
  }, [navigate]);

  const handleImageChange = (e) => {
    setUser({ ...user, userImage: e.target.files[0] });
  };

  const handleUploadImage = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('image', user.userImage);
      const token = localStorage.getItem('token');
      const response = await axios.patch(
        'https://bookify-new.onrender.com/api/v1/userImage',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('Image added successfully:', response.data);
      setUser({ ...user, userImage: response.data.imageUrl });
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setLoading(false);
    }
  };


  const handleDeleteImage = async () => {
    setLoading(true);
    try {
      const response = await axios.patch('https://bookify-new.onrender.com/api/v1/userImage/deleteImage', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Image deleted successfully:', response.data);
    } catch (error) {
      console.error('Error deleting image:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    // <section style={{ backgroundColor: '#eee' }}>
  <div className="container py-5">
    <div className="row">
      <div className="col-lg-4">
        <div className="profile-card mb-4">
          <div className="profile-card-body text-center">
            <img
              src={user.userImage || "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"}
              alt="avatar"
              className="rounded-circle"
              style={{ width: '150px' }}
            />

            <p className="text-white mb-1">Front End Developer</p>
            <p className="text-white mb-4">any massage </p>
            <div className="d-flex justify-content-center mb-2">
              {/* <button className="btn btn-primary me-1">Follow</button>
                  <button className="btn btn-outline-primary">Message</button> */}
            </div>
          </div>
        </div>

        <div className="profile-card">
          <div className="profile-card-body p-0">
            <ul className="list-group list-group-flush rounded-0 ">
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                <i className="fas fa-globe fa-lg text-warning"></i>
                <span>https://ManyBooks.com</span>
              </li>
              {/* Add other list items here */}
            </ul>
          </div>
        </div>
      </div>

      <div className="col-lg-8">
        <div className="profile-card1 mb-4">
          <div className="profile-card-body1">
            <div className="row mb-3">
              <div className="col-sm-3">
                <p className="mb-0">Full Name</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted">{user.name}</p>
              </div>
            </div>
            {/* Add other profile information rows here */}
          </div>
        </div>

        <div className="profile-card2 mb-4">
          <div className="profile-card-body2">
            <div className="row mb-3">
              <div className="col-sm-3">
                <p className="mb-0">Profile Image</p>
              </div>
              <div className="col-sm-9">
                <input type="file" onChange={handleImageChange} />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-9 offset-sm-3">
                <button className="btn btn-primary me-1" onClick={handleUploadImage} disabled={loading}>
                  {loading ? 'Uploading...' : 'Upload Image'}
                </button>
                {user.userImage && (
                  <button className="btn btn-danger" onClick={handleDeleteImage} disabled={loading}>
                    {loading ? 'Deleting...' : 'Delete Image'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  );
}
