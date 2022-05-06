import React from 'react'
import video from '../assets/images/Glasses_Type_4.mp4'
import image1 from '../assets/images/5cb30b93b42e95ee807cc073b66ea1a2.png'
import rocket from '../assets/images/rocket.png'
import bee from '../assets/images/bee.jpg'
import './Home.css'


const Home = () => {
  return (
    <div>
       
      <div className="container"  style={{marginTop:'10px'}}>
  <div className="row">
    <div className="col">
    <video autoPlay playsInline src={video} style={{width:'500px' , height:'500px'}}></video>
    <div class="btn-group" role="group" aria-label="">
  <button type="button" class="btn btn-secondary btn-ml bg-white" style={{marginRight:'4px', borderRadius:'10px 0px 0px 10px', color:'black' }}>Glasses</button>
  <button type="button" class="btn btn-secondary btn-ml bg-white" style={{marginLeft:'4px', borderRadius:'0px 10px 10px 0px', color:'black'}}>Sunglasses</button>
</div>
  </div>
    <div className="col d-flex">

      {/* first card */}
      
    <div class="card" style={{width:'18rem' , height:'28rem'}}>
    <h5 class="card-title">BLUE LIGHT GLASSES</h5>
    <a href="#" style={{textDecoration:'none', color:'black'}}>The X-Blue UV Lenses</a>
  <img src={image1} class="card-img-top" alt="..."/>
  <div class="card-body">
    
    <a href="#" class="btn btn-ml bg-white" style={{color:'black', fontWeight:'bold'}}>Shop Now</a>
  </div>
  
  
</div>
{/* side content */}
<div>
    <img src={rocket} style={{width:'50px', height:'50px'}} alt="some image"/>24hr Dispatch <br />
    <a href="#" style={{textDecoration:'none', color:'black', marginLeft:'20px'}}>Specscart Rocket</a>
  </div>
{/* side content */}
{/* second card */}
<div class="card" style={{width:'18rem', height:'28rem'}}>
<h5 class="card-title">Free Try At Home</h5>
<a href="#" style={{textDecoration:'none', color:'black'}}>4 Frames 7 Days</a>
  <img src={image1} class="card-img-top" alt="..."/>
  <div class="card-body">
    
    <a href="#" class="btn btn-ml bg-white" style={{color:'black', fontWeight:'bold'}}>Shop Now</a>
  </div>
  
</div>
{/* Side content */}
<div>
    <img src={bee} style={{width:'50px', height:'50px'}} alt="some image"/>Venture Further 2018 <br />
    <a href="#" style={{textDecoration:'none', color:'black', marginLeft:'20px'}}>Business Category Winner</a>
  </div>
  {/* side content */}
    </div>
    </div>
    </div>
    {/* 2nd header */}
    <div className='d-flex content'>
     <p> Choose Style </p>
      <a href="#" style={{textDecoration:'none', color:'black'}}>Clip-On</a>
      <a href="#" style={{textDecoration:'none', color:'black'}}>Round</a>
      <a href="#" style={{textDecoration:'none', color:'black'}}>Rectangular</a>
      <a href="#" style={{textDecoration:'none', color:'black'}}>Rimless</a>
      <a href="#" style={{textDecoration:'none', color:'black'}}>Cat Eye</a>
      <a href="#" style={{textDecoration:'none', color:'black'}}>Wayfarer</a>
      <a href="#" style={{textDecoration:'none', color:'black'}}>Halfrim</a>
      <a href="#" style={{textDecoration:'none', color:'black'}}>Aviator</a>
      <a href="#" style={{textDecoration:'none', color:'black'}}>Square</a>
    </div>
    <div>
      <h1>Buy Glasses Online - Your Favourite Collections</h1>
      <h5>There's an eyewear style for every mood and occasion. What's your pick?</h5>
    </div>
    <div>
      {/* next step in home page */}
    </div>
    </div>
    
  )
}

export default Home