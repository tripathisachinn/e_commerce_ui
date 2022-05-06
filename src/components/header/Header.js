import React from 'react'
import image from '../../assets/images/Cart.png'
import search from '../../assets/images/Group_2964.png'
import admin from '../../assets/images/Group_2966.png'
import like from '../../assets/images/Group_2965.png'
import home from '../../assets/images/Group_2967.png'

const Header = () => {
  return (
    
    <div>
  <nav className="navbar navbar-light bg-light">
{/* Footer */}
<div  className="container-fluid">

    {/* Left */}
   
    <div className='d-flex' style={{marginTop:'20px'}}>
        <a href='#' style={{marginRight:'10px',textDecoration:'none', color:'black'}}>Free Return </a>|
        <a href='#' style={{marginRight:'10px',textDecoration:'none', color:'black'}}>&nbsp; 24 Hr </a>|
        <a href='#' style={{textDecoration:'none', color:'black'}}> &nbsp;Blog</a>
    </div>
    
    {/* Left */}

    {/* Right */}
    <div>
    {/* <div className="d-flex justify-content-right justify-content-lg-between p-4"> */}
        <a href='#' style={{marginRight:'10px',textDecoration:'none', color:'black'}}>+44(0)1613125767</a>|
        <a href='#' style={{marginRight:'10px',textDecoration:'none', color:'black'}}>&nbsp; Help</a>|
        <a href='#' style={{textDecoration:'none', color:'black'}}> &nbsp;Login </a>| 
        <a href='#' style={{textDecoration:'none', color:'black'}}> &nbsp;Register</a>
    </div>
   
    {/* Right */}
  </div>
    {/* Footer */}
  <div className="container-fluid">
    <div>
        <a href='#' style={{marginRight:'10px',textDecoration:'none', color:'black'}}>Glasses</a>
        <a href='#' style={{marginRight:'10px',textDecoration:'none', color:'black'}}>Sunglasses</a>
        <a href='#' style={{textDecoration:'none', color:'black'}}>Try At Home </a>
        <a href='#' style={{textDecoration:'none', color:'black'}}>Eye Test</a>
   </div>
        
    <form className="d-flex">

  <div className="text-center">
    <ul className="list-unstyled list-inline">
      <li className="list-inline-item">
        <a href="#!" className="sbtn btn-large mx-1" title="search">
          <img src={search}></img>
        </a>
      </li>
      <li className="list-inline-item">
        <a href="#!" className="sbtn btn-large mx-1" title="admin">
        <img src={admin}></img>
        </a>
      </li>
      <li className="list-inline-item">
        <a href="#!" className="sbtn btn-large mx-1" title="like">
        <img src={like}></img>
        </a>
      </li>
      <li className="list-inline-item">
        <a href="#!" className="sbtn btn-large mx-1" title="home">
        <img src={home}></img>
        </a>
      </li>
      <li className="list-inline-item">
        <a href="#!" className="sbtn btn-large mx-1" title="cart">
        <img src={image}></img>
        </a>
      </li>
    </ul>
  </div>
  {/* <!--/.Social buttons--> */}
      

    </form>
  </div>
</nav>
    </div>
  )
}

export default Header