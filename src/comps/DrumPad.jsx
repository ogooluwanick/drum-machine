import React, { useEffect, useState } from 'react'




const activeStyle = {
        backgroundColor: "#1875d1",
        boxShadow: '0 3px #1875d1',
};
      
const inactiveStyle = {
        backgroundColor: 'grey',
        boxShadow: '3px 3px 5px black'
};
const DrumPad = ({clip,clipId,keyCode,keyTrigger,power,updateDisplay,appvolume}) => {
        
        const [btnStyles, setBtnStyles] = useState(inactiveStyle)

        const handleKeyPress=(e)=> {
                if (e.keyCode === keyCode) {
                        playSound();
                }
        }

        const activatePad=()=> {
                if (power) {      
                        setBtnStyles( activeStyle)
                        setTimeout(() => {
                                setBtnStyles(inactiveStyle)
                        }, 150);
                } 

        }

        // console.log(keyTrigger)
        const playSound=()=> {
                const sound = document.getElementById(keyTrigger);
                sound.currentTime = 0;
                sound.volume=appvolume
                sound.play();
                activatePad();
                updateDisplay(clipId.replace(/-/g, ' '));
        }

        useEffect(() => {
                document.addEventListener('keydown', handleKeyPress);
                return ()=>document.removeEventListener('keydown', handleKeyPress);
        });


  return (
        <div className='drum-pad'
                id={clipId}
                onClick={playSound}
                style={btnStyles}
        >
                <audio
                        className='clip'
                        id={keyTrigger}
                        src={clip}
                     
                /> 
                {keyTrigger}
        </div>
  )
}

export default DrumPad