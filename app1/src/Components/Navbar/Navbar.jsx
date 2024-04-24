//  


import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { CounterContext } from '../../Context/CounterContext';
import { UserTokenContext } from '../../Context/UserTokenContext';

export default function Navbar({ test }) {
  const { counter } = useContext(CounterContext);
  const { isLogin, setLogin } = useContext(UserTokenContext);
  const navigate = useNavigate();

  function LogOut() {
    localStorage.removeItem('userToken');
    setLogin(null);
    navigate('/logIn');
  }

  return (


    <nav className="navbar navbar-expand-lg blueNavbar"  >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <div className='position' style={{marginLeft: '10px' , marginRight: 'auto'}}  > */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

         
            <li className="nav-item dropdown" />
            <a
              className="nav-link dropdown-toggle whiteText"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              DISCOVER
            </a>
            <ul className="dropdown-menu">
              {/* Rest of your dropdown content */}

              <h3 className=" d-flex justify-content-between w-75 mx-auto  h3 ">Genres</h3>
              <li><a className="dropdown-item" href="#">Action & Adventure</a></li>
              <li><a className="dropdown-item" href="#">Bios & History </a></li>
              <li><a className="dropdown-item" href="#"> Children's</a></li>
              <li><a className="dropdown-item" href="#">Fantasy </a></li>
              <li><a className="dropdown-item" href="#">Historical Fiction </a></li>
              <li><a className="dropdown-item" href="#"> Horror</a></li>

              <li><a className="dropdown-item" href="#">Literary Fiction </a></li>
              <li><a className="dropdown-item" href="#">Mystery & Thriller </a></li>
              <li><a className="dropdown-item" href="#">Non-Fiction </a></li>
              <li><a className="dropdown-item" href="#">Romance </a></li>
              <li><a className="dropdown-item" href="#">Science Fiction </a></li>
              <li><a className="dropdown-item" href="#">Young Adult </a></li>
              <li><hr className="dropdown-divider" /></li>
              <h3 className=" d-flex justify-content-between w-75 mx-auto  h3 ">Resources</h3>
              <li><a className="dropdown-item blackText" href="#">Authors</a></li>
              <li><a className="dropdown-item blackText" href="#">Languages</a></li>
              <li><a className="dropdown-item blackText" href="#">Genres</a></li>
              <li><a className="dropdown-item blackText" href="#">Articles</a></li>
              <li><a className="dropdown-item blackText" href="#">Author Interviews</a></li>
              <li><a className="dropdown-item blackText" href="#">Discuss</a></li>
            </ul>
          </ul>
          <li className="nav-link whiteText"     >
            <Link className="nav-link" to='/'></Link>
          </li>
          {/* </div> */}

          

          {isLogin ? <li className="nav-item">
            <Link className="nav-link" to='/cart'>Cart</Link>
          </li> : ''}
          <form className="d-flex w-25 " role="search" style={{ marginLeft: 'auto', marginRight: 'auto' }}  >
            {/* Your search form */}
            <input
              className="form-control me-2"
              type="search"
              style={{ width: "70%", fontSize: "0.76em" }} // Adjust the font size here
              placeholder="Search by title, author or keywords"
              aria-label="Search"
            />
            <button className="btn original-button" type="submit"  >
              Search
            </button>
          </form>

          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">

            <li className="nav-item d-flex align-items-center">
              <a href=""><i className='fa-brands fa-facebook mx-2'></i></a>
              <a href=""><i className='fa-brands fa-google mx-2'></i></a>
              <a href=""><i className='fa-brands fa-youtube mx-2'></i></a>
            </li>


            {
              isLogin ? <li className="nav-item">
                <span className="nav-link cursor-pointer" onClick={LogOut}>SignOut</span>
              </li> :
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to='/Register'>Register</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to='/logIn'>Login</Link>
                  </li>
                  
                  
                </>
            }






          </ul>
        </div>
      </div>
    </nav>
  );
}



//comment to another form

// <div className="container">
//         <Link className="navbar-brand" to='/'>
//           <img src={logo} alt="logo" />
//           <span>{counter}</span>
//         </Link>
//         <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
//           aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="collapsibleNavId">
//           <ul className="navbar-nav me-auto mt-2 mt-lg-0">

//             <li className="nav-item">
//               <Link className="nav-link" to='/'>Home</Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" to='/products'>Products</Link>
//             </li>

//            {isLogin?  <li className="nav-item">
//               <Link className="nav-link" to='/cart'>Cart</Link>
//             </li>:''}

//             <li className="nav-item">
//               <Link className="nav-link" to='/brands'>Brands</Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" to='/categories'>Categories</Link>
//             </li>

//           </ul>
//

//         </div>
//       </div>
//     </nav>

//   )
// }
{/* <form className="d-flex justify-content-between w-50 mx-auto" role="search"> */}
          {/* Your search form */}

          {/* <input
              className="form-control me-2 "
              type="search"
              placeholder="Search by title, author or keywords"
              aria-label="Search"
            />
            <button className="btn original-button " type="submit">
              Search
            </button>
          </form> */}
             {/* {isLogin ? (
              <li className="nav-item">
                <Link className="nav-link active whiteText" to="/">
                  Cart
                </Link>
              </li>
            ) : (
              ''
            )}
           */}