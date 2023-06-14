import React, { useRef, useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown';


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
            <Dropdown className="dropdown" onClick={()=>pointnav.current.style.display="none"}>
            <Dropdown.Toggle className="btn-secondary" variant="success" id="dropdown-basic">
            <img src="./images/customer/team-1.jpg" alt="" />
        <span className="point" ref={pointnav}></span>
            </Dropdown.Toggle>
      
            <Dropdown.Menu className="dropdown-menu">
             <Link to="/ProfilePage"> <Dropdown.Item href="/ProfilePage">Acount</Dropdown.Item> </Link>
             <Link to="/list"><Dropdown.Item href="#/action-2" onClick={()=>pointlist.current.style.display="none"}>List <span className="point-list" ref={pointlist}></span></Dropdown.Item></Link>
             <Link to="/dash" ><Dropdown.Item href="#/action-3">DashBord</Dropdown.Item> </Link>
             <Link  to="/log"><Dropdown.Item href="#/action-3"> <i className='fa fa-sign-out'></i> Log Out</Dropdown.Item> </Link>
            </Dropdown.Menu>
          </Dropdown>
:     <Link to="/log" className='btn btn-primary'>
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
