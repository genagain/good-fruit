import { Link, NavLink } from 'react-router-dom';

function NavBar({authenticated, setAuthenticated}) {
  return (
    <div className="flex flex-row items-center">
      <div className="flex flex-row items-center flex-grow" >
        <img className="h-14" src="logo.svg" alt="Good Fruit Logo" />
        <h2 className="font-logo text-orange">Good Fruit</h2>
      </div>
      {
        authenticated ? 
        (
            <Link className="text-orange text-2xl mx-2" to="/logout">Logout</Link>

        ) : (
          <>
              <NavLink className="text-orange text-2xl mx-2" to="/login">Login</NavLink>
              <NavLink className="text-orange text-2xl mx-2" to="/signup">Sign Up</NavLink>
          </>
        )
      }
    </div>
  )
}

export default NavBar;
