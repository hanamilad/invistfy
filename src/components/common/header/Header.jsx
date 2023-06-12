import React, { useRef, useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"

const Header = () => {
  const [navList, setNavList] = useState(false)
  const [user,setuser]=useState(true)
  const pointnav=useRef()
  const pointlist=useRef()

  return (
    <>
      <header>
        <div className='container flex' style={{height:"100%"}}>
          <div className='logo'>
            <img src='./images/logo3.png' alt='' />
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex'>{
            user?
          <div className="dropdown" onClick={()=>pointnav.current.style.display="none"}>
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <img src="./images/customer/team-1.jpg" alt="" />
  <span className="point" ref={pointnav}></span>
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <Link className="dropdown-item" to="/ProfilePage">Acount</Link>
    <Link className="dropdown-item list" to="/list"onClick={()=>pointlist.current.style.display="none"} >List <span className="point-list" ref={pointlist}></span></Link>
    <Link to="/dash" className="dropdown-item" >DashBord</Link> 
    <Link to="/log" className='btn1 dropdown-item'>
     <i className='fa fa-sign-out'></i> Log Out</Link>
  </div>
</div> :     <Link to="/log" className='btn btn-primary'>
     <i className='fa fa-sign-out'></i> Log in</Link>  }
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
