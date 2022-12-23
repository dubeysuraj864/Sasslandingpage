import { Outlet, Link } from "react-router-dom";
import Logo from "../Images/Logo.png";
import Search from "../Images/Search.png";
import Arrow from "../Images/Arrow-down.png";
function Navbar() {
  return (
    <>
      <div className="navbar bg-black text-white py-5 px-10 sm:px-28">
        <nav className="sm:flex sm:items-center sm:justify-between">
          <div className="nav-link sm:flex sm:items-center sm:justify-around">
            <div className="logo mr-10" >
              <img src={Logo} className="sm:w-8 w-8 py-2" alt="" />
            </div>
            <ul className="sm:flex sm:items-center sm:justify-around ">
              <li className="p-2 ">
                <Link className="flex items-center justify-between">AboutUIFry?  <img src={Arrow} className="w-8" alt="" /></Link>
               
              </li>
              <li className="p-2 ">
                <Link className="flex items-center justify-between">Features <img src={Arrow} className="w-8" alt="" /></Link>
                
              </li>
              <li className="p-2 ">
                <Link className="flex items-center justify-between">Resources  <img src={Arrow} className="w-8" alt="" /></Link>
               
              </li>
              <li className="p-2 ">
                <Link className="flex items-center justify-between">Company <img src={Arrow} className="w-8" alt="" /></Link>
                
              </li>
             
            </ul>
          </div>
          <div className="sm:flex flex justify-around mt-5 sm:mt-0 items-center sm:items-center sm:justify-around">
            <button className="p-2 border-green-300 border rounded-lg py-1 text-green-300 mr-2">GetDemo</button>
            <div className="p-2">Contact Sales</div>
            <button className="p-2">  <img src={Search} className="sm:w-8 w-6" alt="" /></button>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
