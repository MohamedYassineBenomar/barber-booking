import React from 'react'
import './Barberpole.scss'
import { useEffect } from 'react'

function Barberpole() {
    useEffect(() => {
        for (let i = 0; i < 45; i++) {
            // Your code here
            appendPoleToContainer('red');
            appendPoleToContainer('white');
            appendPoleToContainer('blue');
            appendPoleToContainer('white');
          }
       
        const animationElement = document.getElementById('pole-container');
        animationElement.addEventListener('animationiteration', () => {
            console.log('100%');
            
        });

        function appendPoleToContainer(color) {
            // Step 1: Create the element
            const newRedPole = document.createElement('div');
            switch (color) {
                case 'red':
                 newRedPole.className = 'pole redpole';
                break;
                case 'blue':
                 newRedPole.className = 'pole bluepole';
                break;
                case 'white':
                 newRedPole.className = 'pole whitepole';
                break;
                default:
                    newRedPole.className = 'pole whitepole';
                break;
            }
            const poleContainerElement = document.getElementById('pole-container');
            poleContainerElement.appendChild(newRedPole);
          }
    }, []); 
    

    return (
    <div id='Barberpole-container'>
        <div id='view-pole-container'>
            <div id='pole-container'> 
            
                
        
            </div>
        </div>
    </div>
  )
}

export default Barberpole