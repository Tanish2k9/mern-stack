import React from 'react'
import "./navbar.css";
import useLogout from '../../hooks/useLogout';
import useAuthContext from '../../hooks/useAuthContext';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const {logout} = useLogout();

  const {user} = useAuthContext();
  const handlebtn = ()=>{
    logout();
  }


  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <Link to="/"><h3>TaskManager</h3></Link>
        </div>
         {user&&<Link to="/todolist"><h3>Your Task</h3></Link>}
        <div className='nav-links'>
          {user&&(
            <div>
            
            <button onClick={handlebtn}>Logout</button>
            </div>
          )}
          {!user &&(
            <div>
            <Link to="/login"><h3>Login</h3></Link>
            <Link to="/signup"><h3>Signup</h3></Link>
            </div>  
          )}
            
        </div>
    </div>
  )
}

export default Navbar