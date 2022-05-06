import React from 'react'
import video from '../assets/images/dual-tint-video-v1.mp4'
import rocket from '../assets/images/download.webp'
import bee from '../assets/images/140xNxventure-winner.png.pagespeed.ic.qe4Y2L7-xW.webp'
import './Home.css';
// import './home.scss';


const Home = () => {
  return (
    <div className='main-nav'>

      <div className="container" style={{ marginTop: '10px' }}>
        <div className="row">
          <div className="col media-wrapper">
            <video autoPlay src={video} style={{ width: '100%', height: 'auto' }}></video>
            <div class="btn-group" role="group" aria-label="">
              <button type="button" class="btn btn-secondary btn-ml bg-white" style={{ marginRight: '4px', borderRadius: '10px 0px 0px 10px', color: 'black' }}>Glasses</button>
              <button type="button" class="btn btn-secondary btn-ml bg-white" style={{ marginLeft: '4px', borderRadius: '0px 10px 10px 0px', color: 'black' }}>Sunglasses</button>
            </div>
          </div>
          <div className="col second-column">

            {/* first card */}

            <div class="column-wrapper" >
              <div class="card">
                <div class="card-img-wrap bg-img-1">
                  <h5 class="card-title">BLUE LIGHT GLASSES</h5>
                  <a href="#" style={{ textDecoration: 'none', color: 'black' }}>The X-Blue UV Lenses</a>
                </div>
                
                <div class="card-body">
                  <a href="#" class="btn btn-ml bg-white" style={{ color: 'black', fontWeight: 'bold' }}>Shop Now</a>
                </div>
              </div>
              

              <div class="text-wrapper">
                <img src={bee} style={{ width: 'auto', height: 'auto' }} alt="some image" />
                <div className='icon-wrapper'> <p> Venture Further 2018 </p>
                <a href="#" style={{ textDecoration: 'none', color: 'black', marginLeft: '20px' }}>Business Category Winner</a>
                </div>
                
              </div>

            </div>

            <div class="column-wrapper">
              <div class="text-wrapper">
              <img src={rocket} style={{ width: 'auto', height: 'auto' }} alt="some image" />
              <div className='icon-wrapper'> 
                <p> 24hr Dispatch</p>
                <a href="#" style={{ textDecoration: 'none', color: 'black', marginLeft: '20px' }}>Specscart Rocket</a>
               </div>
                
              </div>
              <div class="card">
                <div class="card-img-wrap bg-img-2">
                  <h5 class="card-title">Free Try At Home</h5>
                  <a href="#" style={{ textDecoration: 'none', color: 'black' }}>4 Frames 7 Days</a>
                </div>
                
                <div class="card-body">
                  <a href="#" class="btn btn-ml bg-white" style={{ color: 'black', fontWeight: 'bold' }}>Shop Now</a>
                </div>
              </div>

            </div>
            
            
           
          </div>
        </div>
      </div>
      {/* 2nd header */}
      <div className='d-flex content'>
        <p> Choose Style </p>
        <a href="#" style={{ textDecoration: 'none', color: 'black' }}>Clip-On</a>
        <a href="#" style={{ textDecoration: 'none', color: 'black' }}>Round</a>
        <a href="#" style={{ textDecoration: 'none', color: 'black' }}>Rectangular</a>
        <a href="#" style={{ textDecoration: 'none', color: 'black' }}>Rimless</a>
        <a href="#" style={{ textDecoration: 'none', color: 'black' }}>Cat Eye</a>
        <a href="#" style={{ textDecoration: 'none', color: 'black' }}>Wayfarer</a>
        <a href="#" style={{ textDecoration: 'none', color: 'black' }}>Halfrim</a>
        <a href="#" style={{ textDecoration: 'none', color: 'black' }}>Aviator</a>
        <a href="#" style={{ textDecoration: 'none', color: 'black' }}>Square</a>
      </div>
      <div>
        <h1>Buy Glasses Online - Your Favourite Collections</h1>
        <h5>There's an eyewear style for every mood and occasion. What's your pick?</h5>
      </div>
      <div>
        {/* next step in home page */}
        {/* slider */}
        {/* slider */}
      </div>
    </div>

  )
}

export default Home