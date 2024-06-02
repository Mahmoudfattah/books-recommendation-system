// 
// import React from 'react'
// import { BrowserRouter as Router, Route, Routes, createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Home from './Components/Home';
// import About from './Components/About'
// import Navbar from './Components/Navbar/Navbar'
// import Layout from './Components/Layout/Layout';
// import NotFount from './Components/NotFound/NotFound';
// import LogIn from './Components/LogIn/LogIn';
// import Register from './Components/Register/Register';
// import SignOut from './Components/LogOut/SignOut';
// import NotFound from './Components/NotFound/NotFound';

// export default function App() {
//   let {setLogin}  = useContext(UserTokenContext)
//   let test = 'test'

//   useEffect(()=>{
//     if(localStorage.getItem('userToken'))
//      setLogin(localStorage.getItem('userToken'))
//    },[])


//   const routes = createBrowserRouter([

//     {
//       path: '/', element: <Layout></Layout>, children: [
//         { index: true, element: <Home></Home> },
//         { path: 'login', element: <LogIn></LogIn> },
//         { path: 'register', element: <Register></Register> },
//         { path: 'signout', element: <SignOut></SignOut> },
//         { path: '*', element: <NotFound></NotFound> },
//       ]
//     }

//   ])
//   return (
//     <RouterProvider router={routes}></RouterProvider>
//   )
// }
// ==================================================================


import React, { useContext, useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home';


import LogIn from './Components/LogIn/LogIn';
import Register from './Components/Register/Register';


import NotFound from './Components/NotFound/NotFound';

import { CounterContextProvider } from './Context/CounterContext';
import { UserTokenContext } from './Context/UserTokenContext';
import ProtectedRoute from './ProtectedRoute.JS';
import Layout from './Components/Layout';
import ForgotPassword from './Components/ForgotPassword';
import Books from './Components/books';
import AllGenre from './Components/Genre/AllGenre';
import Romance from './Components/Genre/Romance';
import Comment from './Components/Comment';
import ProfilePage from './Components/ProfilePage';
import ResetPassword from './Components/ResetPassword';
import Authors from'./Components/Authors';
import Author from './Components/Author';
import Genre from './Components/Genre';
import Action from './Components/Action';
import Mystery from './Components/Mystery';
import History from './Components/History';
import AddToWishlist from './Components/Addwishlist';
//import RemoveFromWishlist from './Components/RemoveFromWishlist'
import LanguageList from './Components/GetAllLanguages'
import Wishlist from './Components/WishlistUser'
import BookByLang from './Components/book-by-lang/BookByLang';

export default function App() {

  let { setLogin } = useContext(UserTokenContext)
  let test = 'test'


  useEffect(() => {
    if (localStorage.getItem('token'))
      setLogin(localStorage.getItem('token'))
  }, [])

  const routes = createBrowserRouter([
    {
      path: '/', element: <Layout test={test}></Layout>, children: [
        { index: true, element: <Home></Home> },
        { path: 'home', element: <ProtectedRoute><Home></Home></ProtectedRoute> },
        { path: 'login', element: <LogIn fixed='fixed-bottom'></LogIn> },
        { path: 'register', element: <Register></Register> },
        { path: 'ForgotPassword', element: < ForgotPassword></ForgotPassword> },
        { path: 'books/:id', element: < Books></Books> },
        { path: 'History', element: < History></History> },
        { path: 'Mystery', element: < Mystery></Mystery> },
        { path: 'Action', element: < Action></Action> },
         { path: 'Genre/:genreId', element: < Genre></Genre> },
        { path: 'AllGenre', element: < AllGenre></AllGenre> },
        {path :'Romance', element:<Romance></Romance> },
        {path :'Comment/:id', element:<Comment></Comment> },
        {path :'ResetPassword', element:<ResetPassword></ResetPassword> },
        {path: 'Authors', element:<Authors></Authors>},
        {path: 'Author/:id', element:<Author></Author>},
        {path: 'AddToWishlist', element:<AddToWishlist></AddToWishlist>},
        //{path: 'RemoveFromWishlist', element:<RemoveFromWishlist></RemoveFromWishlist>},
        {path: 'LanguageList', element:<LanguageList></LanguageList>},
        {path: 'Wishlist', element:<Wishlist></Wishlist>},
        {path: 'book-by-lang/:id', element:<BookByLang></BookByLang>},
        
         
        {path :'ProfilePage', element:<ProfilePage></ProfilePage> },
        //  {path:'Reviews',element:<Reviews></Reviews>},
        { path: '*', element: <NotFound></NotFound> },
      ]
    }
  ])


  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}
