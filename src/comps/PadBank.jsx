import React from 'react'
import DrumPad from './DrumPad'

const PadBank = ({power,appvolume,currentPadBank, updateDisplay}) => {
               
                    
                return (
                        <div className='pad-bank'>
                                {
                                        currentPadBank.map((drumObj, i, padBankArr)=>(
                                                <DrumPad
                                                        key={i}
                                                        clip={power?  padBankArr[i].url : "#"}
                                                        clipId={padBankArr[i].id}
                                                        keyCode={padBankArr[i].keyCode}
                                                        keyTrigger={padBankArr[i].keyTrigger}
                                                        power={power}
                                                        appvolume={appvolume}
                                                        updateDisplay={updateDisplay}
                                                />
                                        )
                                        )
                                }
                        </div>
                )
        
        
        
}

export default PadBank