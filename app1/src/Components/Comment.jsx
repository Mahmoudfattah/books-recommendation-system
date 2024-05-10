// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Comment() {
//   // State to manage the list of comments and the input for adding a new comment
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState('');
//   const [userName, setUserName] = useState(''); // Assuming you have a way to get the user's name

//   // Function to fetch comments from the API
//   useEffect(() => {
//     async function fetchComments() {
//       try {
//         const response = await axios.get('https://bookify-new.onrender.com/api/v1/review');
//         setComments(response.data);
//       } catch (error) {
//         console.error('Error fetching comments:', error);
//       }
//     }

//     fetchComments();
//   }, []);

//   // Function to handle adding a new comment
//   async function handleAddComment() {
//     try {
//       const response = await axios.post('https://bookify-new.onrender.com/api/v1/review', {
//         userName: userName, // Assuming you have a way to get the user's name
//         comment: newComment
//       });

//       // Add the new comment to the list of comments
//       setComments([...comments, response.data]);

//       // Clear the input field after adding the comment
//       setNewComment('');
//     } catch (error) {
//       console.error('Error adding comment:', error);
//     }
//   }

//   return (
//     <div>
//       <h1>Comments</h1>
//       <div>
//         {/* Input field to add a new comment */}
//         <input
//           type="text"
//           value={newComment}
//           onChange={(e) => setNewComment(e.target.value)}
//           placeholder="Add a comment..."
//         />
//         <button onClick={handleAddComment}>Add Comment</button>
//       </div>
//       <div>
//         {/* Display the list of comments */}
//         {comments.map((comment, index) => (
//           <div key={index}>
//             <p>User: {comment.userName}</p>
//             <p>Comment: {comment.comment}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Comment;


import React from "react";

export default function Comment() {
  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5" style={{ maxWidth: "1000px" }}>
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-10 col-xl-8">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-start align-items-center">
                  <img
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                    alt="avatar"
                    width="60"
                    height="60"
                  />
                  <div>
                    <h6 className="fw-bold text-primary mb-1">Lily Coleman</h6>
                    <p className="text-muted small mb-0">
                      Shared publicly - Jan 2020
                    </p>
                  </div>
                </div>

                <p className="mt-3 mb-4 pb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip consequat.
                </p>

                <div className="small d-flex justify-content-start">
                  <a href="#!" className="d-flex align-items-center me-3">
                    <i className="far fa-thumbs-up me-2"></i>
                    <p className="mb-0">Like</p>
                  </a>
                  <a href="#!" className="d-flex align-items-center me-3">
                    <i className="far fa-comment-dots me-2"></i>
                    <p className="mb-0">Comment</p>
                  </a>
                  <a href="#!" className="d-flex align-items-center me-3">
                    <i className="fas fa-share me-2"></i>
                    <p className="mb-0">Share</p>
                  </a>
                </div>
              </div>

              <div className="card-footer py-3 border-0" style={{ backgroundColor: "#f8f9fa" }}>
                <div className="d-flex flex-start w-100">
                  <img
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                    alt="avatar"
                    width="40"
                    height="40"
                  />
                  <textarea className="form-control w-100" rows="4" style={{backgroundColor: '#fff'}}></textarea>
                </div>
                <div className="float-end mt-2 pt-1">
                  <button className="btn btn-sm me-1">Post comment</button>
                  <button className="btn btn-outline-secondary btn-sm">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

