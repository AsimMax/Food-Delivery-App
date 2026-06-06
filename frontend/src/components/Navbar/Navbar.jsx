import { use, useContext, useState } from 'react'
import './Navbar.css'
import { StoreContext } from '../../context/StoreContext'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.png'
import basket_icon from '../../assets/basket_icon.png'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
const Navbar = ({setShowLogin}) => {

    const [menu , setMenu] = useState("home")
    const navigate=useNavigate();
    const { getTotalCartAmount,token,setToken } = useContext(StoreContext)
    const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");

}
  return (
    <div className='navbar'>
      <Link to='/'><img src={logo} alt="logo" /></Link>

      <ul className='navbar-menu'>
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
        <a href='#footer' onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>contact</a>
      </ul>

      <div className="navbar-right">
       <img src={search_icon} alt="" />

       <div className="navbar-search-icon">
        <Link to='/cart'><img src={basket_icon} alt="" /></Link>
        <div className={getTotalCartAmount()===0? "":"dot"}></div>
       </div>
       {!token?<button onClick={() => setShowLogin(true)}>SignIn</button>
       :<div className='navbar-profile'>
       <img src={assets.profile_icon} alt="" />
       <ul className="nav-profile-dropdown">
       <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
       <hr />
       <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
       </ul>
       </div>
       }
      </div>
    </div>
  )
}

export default Navbar