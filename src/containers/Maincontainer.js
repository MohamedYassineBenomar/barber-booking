import React, { useState, useEffect } from 'react'
import './Maincontainer.scss'
import Barberpole from '../components/Barberpole/Barberpole';


function Maincontainer() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const images = [  
    'https://nypost.com/wp-content/uploads/sites/2/2015/06/barber_mendoza1a.jpg?resize=744,496&quality=75&strip=all',
    'https://static01.nyt.com/images/2023/05/21/multimedia/00CelebrityBarbers-JP1/00CelebrityBarbers-lede-try-btcf-mobileMasterAt3x.jpg?quality=75&auto=webp&disable=upscale&width=1200',
    'https://www.betterteam.com/images/barber-job-description-5184x3456-20201124.jpeg?crop=21:16,smart&width=420&dpr=2',
    'https://i.ytimg.com/vi/E_qH0HEM4kY/maxresdefault.jpg'
   ];
   useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      updateBarberInfo(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex,images.length]);

  const goToPrevSlide = () => {
    const prevIndex = (currentIndex + images.length - 1) % images.length;
    setCurrentIndex(prevIndex);
    updateBarberInfo(prevIndex);
  };

  const goToNextSlide = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    updateBarberInfo(nextIndex);
  };

  const updateBarberInfo = (index) => {
    const barberNameElement = document.querySelector("#body-container-right-content-text-title > strong");
    const barberExperience = document.querySelector("#body-container-right-content-text-paragraph > strong");
    switch (index) {
      case 0:
        barberNameElement.textContent = "Oliver";
        barberExperience.textContent = "4 years experience";
        break;
      case 1:
        barberNameElement.textContent = "JACK";
        barberExperience.textContent = "7 years experience";
        break;
      case 2:
        barberNameElement.textContent = "Liam";
        barberExperience.textContent = "5 years experience";
        break;
      case 3:
        barberNameElement.textContent = "Noah";
        barberExperience.textContent = "6 years experience";
        break;
      default:
        break;
    }
  };

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
              <div id='body-container-right-content' style={{ backgroundImage: `url(${images[currentIndex]})` }}>
                <div id='body-container-right-content-container'>
                  <div id='body-container-right-content-silder'>
                    <div id='body-container-right-content-silder-left' onClick={goToPrevSlide}>
                      <div className='leftsliderrow toppart'>

                      </div>
                      <div className='leftsliderrow bottompart'>

                      </div>
                    </div>
                    <div id='body-container-right-content-silder-right' onClick={goToNextSlide}>
                      <div className='rightsliderrow toppart'>

                      </div>
                      <div className='rightsliderrow bottompart'>

                      </div>
                    </div>
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