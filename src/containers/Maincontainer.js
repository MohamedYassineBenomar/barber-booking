import React from 'react'
import './Maincontainer.scss'
import Barberpole from '../components/Barberpole/Barberpole';
import barberImage from '../barber-zurich.jpg';

function Maincontainer() {
  const handleBookingPoopup = () => {
    console.log('handleBookingPoopup');
  }
  return (
    <div id='main-container'>
      <Barberpole />
      <div id='body-container'>
        <div id='img-container'>
        
         <div id='body-container'>
          <div id='body-container-left'>
          <div id='logo-container'>

          </div>
            <div id='body-container-left-content'>
              <div id='barber-logo'>

              </div>
              <h1> BARBER SHOP</h1>
              <h2>PLACE TO GET BEST HAIR CUT</h2>
              <button id='booking-btn' className='btns' onClick={handleBookingPoopup}> <strong>Book Now</strong> </button>
            </div>
          </div>
            <div id='body-container-right'>
              <div id='body-container-right-content'>
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Maincontainer