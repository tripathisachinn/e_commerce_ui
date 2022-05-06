import React from 'react'
import './Footer.css'

  

const Footer = () => {
  return (
    <div>
       <footer id="footer" className=" text-white d-flex-column text-center">

<hr className="mb-0"></hr>
{/* <!--Footer Links--> */}
<div className="container text-left text-md-left">
  <div className="row">
    {/* <!--First column--> */}
    <div className="col-lg-2 col-md-4 mx-auto shfooter">
      <h5 className="my-2 font-weight-bold d-none d-md-block">GLASSES</h5>
      <div className="d-md-none title" data-target="#Product" data-toggle="collapse">
        <div className="mt-3 font-weight-bold">GLASSES
          <div className="float-right navbar-toggler">
            <i className="fas fa-angle-down"></i>
            <i className="fas fa-angle-up"></i>
          </div>
        </div>
      </div>
      <ul className="list-unstyled collapse" id="Product">
        <li><a href="#">Round Glasses</a></li>
        <li><a href="#">Wayfarer Glasses</a></li>
        <li><a href="#">Cat Eye Glasses</a></li>
        <li><a href="#">Rectangular Glasses</a></li>
        <li><a href="#">Rimless Glasses</a></li>
        <li><a href="#">Verifocal Glasses</a></li>
        <li><a href="#">Transitions Glasses</a></li>
      </ul>
    </div>
    {/* <!--/.First column--> */}
    <hr className="clearfix w-100 d-md-none mb-0"/>
    {/* <!--Second column--> */}
    <div className="col-lg-2 col-md-4 mx-auto shfooter">
      <h5 className="my-2 font-weight-bold d-none d-md-block">SUNGLASSES</h5>
      <div className="d-md-none title" data-target="#Company" data-toggle="collapse">
        <div className="mt-3 font-weight-bold">SUNGLASSES
          <div className="float-right navbar-toggler">
            <i className="fas fa-angle-down"></i>
            <i className="fas fa-angle-up"></i>
          </div>
        </div>
      </div>
      <ul className="list-unstyled collapse" id="Company">
        <li><a href="#">Aviator Sunglasses</a></li>
        <li><a href="#">Round Sunglasses</a></li>
        <li><a href="#">Cat Eye Sunglasses</a></li>
        <li><a href="#">Wayfare Sunglasses</a></li>
        <li><a href="#">Designer Sunglasses</a></li>
        <li><a href="#">Polarised Sunglasses</a></li>
        <li><a href="#">Prescription Sunglasses</a></li>
      </ul>
    </div>
    {/* <!--/.Second column--> */}
    <hr className="clearfix w-100 d-md-none mb-0"/>
    {/* <!--Third column--> */}
    <div className="col-lg-2 col-md-4 mx-auto shfooter">
      <h5 className="my-2 font-weight-bold d-none d-md-block">HELP & FAQ</h5>
      <div className="d-md-none title" data-target="#Resources" data-toggle="collapse">
        <div className="mt-3 font-weight-bold">HELP & FAQ
          <div className="float-right navbar-toggler">
            <i className="fas fa-angle-down"></i>
            <i className="fas fa-angle-up"></i>
          </div>
        </div>
      </div>
      <ul className="list-unstyled collapse" id="Resources">
        <li><a href="#">Your Prescription</a></li>
        <li><a href="#">Digital Blue Glasses</a></li>
        <li><a href="#">Lenses & Coatings</a></li>
        <li><a href="#">Anti Reflective Lenses</a></li>
        <li><a href="#">How to order</a></li>
        <li><a href="#">Delivery Information</a></li>
        <li><a href="#">Free Return</a></li>
      </ul>
    </div>
    {/* <!--/.Third column--> */}
    <hr className="clearfix w-100 d-md-none mb-0"/>
    {/* <!--Fourth column--> */}
    <div className="col-lg-2 col-md-4 mx-auto shfooter">
      <h5 className="my-2 font-weight-bold d-none d-md-block">ABOUT US</h5>
      <div className="d-md-none title" data-target="#Get-Help" data-toggle="collapse">
        <div className="mt-3 font-weight-bold">ABOUT US
          <div className="float-right navbar-toggler">
            <i className="fas fa-angle-down"></i>
            <i className="fas fa-angle-up"></i>
          </div>
        </div>
      </div>
      <ul className="list-unstyled collapse" id="Get-Help">
        <li><a href="#" target="_blank">Our Story</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Our Blog</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Franchise</a></li>
      </ul>
    </div>
    {/* <!--/.Fourth column--> */}

    {/* <!--Fifth column--> */}
    <div className="col-md-4 mx-auto shfooter">
      <h5 className="my-2 font-weight-bold d-none d-md-block"></h5>
      
            {/* <!--Social buttons--> */}
<div className="text-center">

  <div className='d-flex font-weight-bold'>
    <h5>SUBSCRIBE</h5>
    <h5 style={{marginLeft:'65px'}}>CONTACT US</h5>
  </div>
    <div className='d-flex'>
      <div>
    <input className="form-control" style={{marginTop:'7px', borderRadius:'10px 0px 0px 10px'}} type="search" placeholder="Signup for our newsletter" aria-label="Search"/>
    </div>  
    <div>
   <button className="btn btn-success btn-ml " style={{marginLeft:'0px', padding:'6.5px' ,borderRadius:'0px 10px 10px 0px'}} type="submit" title="Subscribe">Search</button>
   </div>
    </div>
    <div className='d-flex'>
        <ul className="list-unstyled list-inline" style={{marginTop:'20px'}}>
    <li className="list-inline-item">
      <a href="#!" className="sbtn btn-large mx-1" title="Facebook">
        <i className="fab fa-facebook fa-2x"></i>
      </a>
    </li>
    <li className="list-inline-item">
      <a href="#!" className="sbtn btn-large mx-1" title="Linkedin">
        <i className="fab fa-linkedin fa-2x"></i>
      </a>
    </li>
    <li className="list-inline-item">
      <a href="#!" className="sbtn btn-large mx-1" title="Twitter">
        <i className="fab fa-twitter fa-2x"></i>
      </a>
    </li>
    <li className="list-inline-item">
      <a href="#!" className="sbtn btn-large mx-1" title="Youtube">
        <i className="fab fa-youtube fa-2x"></i>
      </a>
    </li>

    <li className="list-inline-item">
      <a href="#!" className="sbtn btn-large mx-1" title="Instagram">
        <i className="fab fa-instagram fa-2x"></i>
      </a>
    </li>
    <li className="list-inline-item">
      <a href="#!" className="sbtn btn-large mx-1" title="Github">
        <i className="fab fa-github fa-2x"></i>
      </a>
    </li>
  </ul>
  </div>

</div>
{/* <!--/.Social buttons--> */}
    </div>
    {/* <!--/.Fifth column--> */}

  </div>
</div>
{/* <!--/.Footer Links--> */}
<hr className="mb-0"/>
{/* <!--Copyright--> */}
<div className="py-3 text-center">
  &copy; 2022 &nbsp;
   <a href="#">Specscart</a>
</div>
{/* <!--/.Copyright--> */}
</footer>

{/*Footer */}
    </div>
  )
}

export default Footer