import React from 'react'
import './Maincontainer.scss'
import Barberpole from '../components/Barberpole/Barberpole';


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
              <div id="left-content">
                
                <span id='left-content-title'> <strong>BARBER SHOP</strong></span>
                <span id='left-content-text'><strong>PLACE TO GET BEST HAIR CUT</strong></span>
                <button id='booking-btn' className='btns' onClick={handleBookingPoopup}> <strong>Book Now</strong> </button>
              </div>
            </div>
          </div>
            <div id='body-container-right'>
              <div id='body-container-right-content'>
                <div id='body-container-right-content-container'>
                  <div id='body-container-right-content-silder-left'>

                  </div>
                  <div id='body-container-right-content-silder-right'>

                  </div>
                  <div id='body-container-right-content-text'>
                    <div id='body-container-right-content-text-container'>
                      <span id='body-container-right-content-text-title'><strong>JACK</strong></span>
                      <span id='body-container-right-content-text-paragraph'><strong>7 years experience</strong></span>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Maincontainer