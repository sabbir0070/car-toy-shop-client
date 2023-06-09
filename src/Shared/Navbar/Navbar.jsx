import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.jpg'
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navbar = () => {
const {user, logOut} = useContext(AuthContext);
const handleLogOut = () =>{
logOut()
.then(()=>{
console.log('log out');
})
.catch(error=>{
console.log(error.message)
})
}

const navItems = <>
    <ul className="menu menu-horizontal  px-1 mb-4 text-lg font-bold text-gray-700">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/allToy">All Toys</Link></li>
     
 {user &&
<>
<li><Link to="myToy">My Toys</Link></li>
 <li><Link to="/addToy">Add A Toy</Link></li>
</>
}
 <li><Link to="/blog">Blogs</Link></li >
{user ? <>

<div aria-label={user} title={user?.displayName}>
<div className='w-10 h-10 rounded-full mr-3 mt-2'> <img src={user?.photoURL} className='w-10 h-10 rounded-full' alt="img nai" /> </div>
</div>
<button onClick={handleLogOut} className="bg-lime-600 rounded-xl  px-6 text-white">logOut</button>
</>:
<><li><Link to="/login">Login</Link></li> </>
}
    </ul>
</>
const navItemSmallDevice = <>
   <div className='flex justify-between'>
 <ul className="menu menu-horizontal flex flex-col px-1 mb-4 text-lg font-bold bg-base-300 text-gray-700">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/allToy">All Toys</Link></li>
      {user &&
<>
<li><Link to="myToy">My Toys</Link></li>
 <li><Link to="/addToy">Add A Toy</Link></li>
</>
}
 <li><Link to="blog">Blogs</Link></li>
{user ? <>

<div aria-label={user} title={user?.displayName}>
<div className='w-10 h-10 rounded-full ml-3 mb-3 items-center justify-center'> <img src={user?.photoURL} className='w-10 h-10 rounded-full' alt="img nai" /> </div>
</div>
<button onClick={handleLogOut} className="bg-lime-600 px-6 py-2 rounded-xl sm:mb-3 text-white">logOut</button>
</>:
<><li><Link to="/login">Login</Link></li> </>
}
    </ul>
<p  className='text-red-600 font-bold text-3xl'>X</p>
</div>
</>
  return (
  <div className="navbar bg-base-300 mt-1 h-28">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">    
{ navItemSmallDevice }
      </ul>
    </div>
    <Link className="ml-10">
<img src={logo} className='w-52 h-16 rounded-lg' alt="nai" />
</Link>
  </div>
  <div className="navbar-center hidden  lg:flex justify-between">
    <ul className="menu menu-horizontal  pr-10">
{navItems}
    </ul>
  </div>
  <div className="navbar-end lg:hidden">
 <Link to='/signUp'><button className="px-6 py-4 bg-lime-600 rounded-lg text-white font-bold">Register</button></Link>
  </div>
</div>
  );
};

export default Navbar;<h2>this is navbar</h2>