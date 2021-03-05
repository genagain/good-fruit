import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function NavBar({authenticated, setAuthenticated}) {
  const [showLinks, setShowLinks] = useState(false)

  function togglesShowAuth(){
    setShowLinks(prev => !prev)
    // setShowLinks(!showLinks)
  }

  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="flex flex-row items-center md:flex-grow">
        <div className="flex flex-row items-center flex-grow" >
          <img className="h-14" src="logo.svg" alt="Good Fruit Logo" />
          <h2 className="font-logo text-orange">Good Fruit</h2>
        </div>
        <div className="md:hidden">
          <button type="button"  className={showLinks ? "text-gray-500" : "outline-none"} onClick={togglesShowAuth}>
            <svg viewBox="0 0 100 80" width="40" height="40" className="h-10 w-10 fill-current">
              <rect width="100" height="15"></rect>
              <rect y="30" width="100" height="15"></rect>
              <rect y="60" width="100" height="15"></rect>
            </svg>
          </button>
        </div>
      </div>
      {
        authenticated ? 
        (
            <Link className={`${!showLinks && 'hidden'} md:inline-block text-orange text-2xl mx-2`} to="/logout">Logout</Link>

        ) : (
          <>
              <NavLink className={`${!showLinks && 'hidden'} md:inline-block text-orange text-2xl mx-2`} to="/login" activeClassName="font-bold">Login</NavLink>
              <NavLink className={`${!showLinks && 'hidden'} md:inline-block text-orange text-2xl mx-2`} to="/signup" activeClassName="font-bold">Sign Up</NavLink>
          </>
        )
      }
    </div>
  )
}

export default NavBar;
