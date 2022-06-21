import { useState } from 'react';
import Switch from '@mui/material/Switch';
import { motion } from 'framer-motion'

import './App.scss';
import { bankOne, bankTwo } from './assets';
import PadBank from './comps/PadBank';

function App() {
        const [power, setPower] = useState(true)
        const [display, setDisplay] = useState("")
        const [currentPadBank, setCurrentPadBank] = useState(bankOne)
        const [currentPadBankId, setCurrentPadBankId] = useState("Heater Kit")
        const [sliderVal, setSliderVal] = useState(.3)

        const powerControl=()=>{
                setPower(switchPower=>!switchPower)
                setDisplay("")
        }

        const selectBank=()=>{
                if (power) {
                        if      (currentPadBankId === 'Heater Kit'){
                                setCurrentPadBank(bankTwo)
                                setCurrentPadBankId( 'Smooth Piano Kit')
                                setDisplay('Smooth Piano Kit')
                        }
                        else {
                                setCurrentPadBank(bankOne)
                                setCurrentPadBankId( 'Heater Kit')
                                setDisplay('Heater Kit') 
                        }
                }
        }

        const displayClipName=(name)=>{
                if (power) {
                        setDisplay(name)
                }
        }

        const clearDisplay=()=>{
                setDisplay("")
        }

        const adjustVolume=(e)=> {
                if (power) {
                        setSliderVal(e.target.value)
                        setDisplay('Volume: ' + Math.round(e.target.value * 100) )
                        setTimeout(()=>{clearDisplay()},1200)
                }
        }

  return (
    <motion.div className="App" whileInView={{y:[100,50,0],opacity:[0,0,1]}}   transition={{duration:0.5,type:"Tween" }}>
                <div className='inner-container' id='drum-machine'>    
                        <div className='logo'>
                                <div className='inner-logo '>{'O.G.O  ' }</div>
                                <img src={"logo.png"} alt="OGO's logo" />
                        </div>  
                        <PadBank
                                power={power}
                                appvolume={sliderVal}
                                currentPadBank={currentPadBank}
                                updateDisplay={displayClipName}
                        />


                        <div className='controls-container'>
                                <div className='control'>
                                        <p>Power</p>
                                        <Switch className='switch' defaultChecked onClick={powerControl} />
                                </div>

                                <p id='display'>{display}</p>

                                <div className='volume-slider'>
                                        <input
                                        max='1'
                                        min='0'
                                        onChange={adjustVolume}
                                        step='0.01'
                                        type='range'
                                        value={sliderVal}
                                        disabled={power ? false: true}
                                        className="slider"
                                        />
                                </div>

                                <div className='control'>
                                        <p>Bank</p>
                                        <Switch className='switch'  onClick={selectBank} disabled={power ? false: true}/>
                                </div>
                        </div>
                        
                 </div>
    </motion.div>
  );
}

export default App;
